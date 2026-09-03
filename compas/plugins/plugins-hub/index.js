var yo = Object.defineProperty;
var ms = (n) => {
  throw TypeError(n);
};
var Ao = (n, e, t) => e in n ? yo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var cn = (n, e, t) => Ao(n, typeof e != "symbol" ? e + "" : e, t), ua = (n, e, t) => e.has(n) || ms("Cannot " + t);
var A = (n, e, t) => (ua(n, e, "read from private field"), t ? t.call(n) : e.get(n)), ye = (n, e, t) => e.has(n) ? ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Ce = (n, e, t, i) => (ua(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), Xe = (n, e, t) => (ua(n, e, "access private method"), t);
const ht = Symbol(), Ys = "http://www.w3.org/1999/xhtml", Eo = "http://www.w3.org/2000/svg", Co = "@attach", So = !1;
var za = Array.isArray, xo = Array.prototype.indexOf, Qi = Array.prototype.includes, ea = Array.from, Qs = Object.defineProperty, ri = Object.getOwnPropertyDescriptor, Zs = Object.getOwnPropertyDescriptors, To = Object.prototype, Lo = Array.prototype, Xa = Object.getPrototypeOf, gs = Object.isExtensible;
function dr(n) {
  return typeof n == "function";
}
const Ee = () => {
};
function wo(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Js() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Ot = 2, Zi = 4, ta = 8, Wa = 1 << 24, Tn = 16, gn = 32, si = 64, Aa = 128, sn = 512, mt = 1024, St = 2048, On = 4096, Rt = 8192, Yt = 16384, Pi = 32768, Ea = 1 << 25, Wn = 65536, Ca = 1 << 17, Mo = 1 << 18, ir = 1 << 19, Oo = 1 << 20, xn = 1 << 25, Di = 65536, Sa = 1 << 21, br = 1 << 22, ai = 1 << 23, Ln = Symbol("$state"), $s = Symbol("legacy props"), Do = Symbol(""), Nn = new class extends Error {
  constructor() {
    super(...arguments);
    cn(this, "name", "StaleReactionError");
    cn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ws;
const el = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ws = globalThis.document) != null && Ws.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ka(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ro() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _o(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Po(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ko() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fo(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Uo(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function No() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ho() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Go() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function zo() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function tl(n) {
  return n === this.v;
}
function qa(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function nl(n) {
  return !qa(n, this.v);
}
let Wo = !1, ot = null;
function Ji(n) {
  ot = n;
}
function Me(n) {
  return (
    /** @type {T} */
    rl().get(n)
  );
}
function me(n, e) {
  return rl().set(n, e), e;
}
function Ke(n, e = !1, t) {
  ot = {
    p: ot,
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
function qe(n) {
  var e = (
    /** @type {ComponentContext} */
    ot
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      wl(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ot = e.p, n ?? /** @type {T} */
  {};
}
function il() {
  return !0;
}
function rl(n) {
  return ot === null && Ka(), ot.c ?? (ot.c = new Map(Ko(ot) || void 0));
}
function Ko(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let Ii = [];
function al() {
  var n = Ii;
  Ii = [], wo(n);
}
function Xn(n) {
  if (Ii.length === 0 && !gr) {
    var e = Ii;
    queueMicrotask(() => {
      e === Ii && al();
    });
  }
  Ii.push(n);
}
function qo() {
  for (; Ii.length > 0; )
    al();
}
function sl(n) {
  var e = De;
  if (e === null)
    return Le.f |= ai, n;
  if (!(e.f & Pi) && !(e.f & Zi))
    throw n;
  ii(n, e);
}
function ii(n, e) {
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
const Yo = -7169;
function rt(n, e) {
  n.f = n.f & Yo | e;
}
function Ya(n) {
  n.f & sn || n.deps === null ? rt(n, mt) : rt(n, On);
}
function ll(n) {
  if (n !== null)
    for (const e of n)
      !(e.f & Ot) || !(e.f & Di) || (e.f ^= Di, ll(
        /** @type {Derived} */
        e.deps
      ));
}
function ol(n, e, t) {
  n.f & St ? e.add(n) : n.f & On && t.add(n), ll(n.deps), rt(n, mt);
}
function ul(n, e, t) {
  if (n == null)
    return e(void 0), Ee;
  const i = li(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Bi = [];
function xa(n, e = Ee) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (qa(n, u) && (n = u, t)) {
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
  function s(u, o = Ee) {
    const d = [u, o];
    return i.add(d), i.size === 1 && (t = e(r, a) || Ee), u(
      /** @type {T} */
      n
    ), () => {
      i.delete(d), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function Qo(n) {
  let e;
  return ul(n, (t) => e = t)(), e;
}
let Ta = !1, Pr = !1, La = Symbol();
function Qa(n, e, t) {
  const i = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ yl(void 0),
    unsubscribe: Ee
  });
  if (i.store !== n && !(La in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = Ee;
    else {
      var r = !0;
      i.unsubscribe = ul(n, (a) => {
        r ? i.source.v = a : G(i.source, a);
      }), r = !1;
    }
  return n && La in t ? Qo(n) : l(i.source);
}
function Wr(n, e) {
  return Zo(n, e), e;
}
function na() {
  const n = {};
  function e() {
    Mr(() => {
      for (var t in n)
        n[t].unsubscribe();
      Qs(n, La, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Zo(n, e) {
  Ta = !0;
  try {
    n.set(e);
  } finally {
    Ta = !1;
  }
}
function Jo(n) {
  var e = Pr;
  try {
    return Pr = !1, [n(), Pr];
  } finally {
    Pr = e;
  }
}
const hi = /* @__PURE__ */ new Set();
let oe = null, Et = null, wa = null, gr = !1, da = !1, Hi = null, Nr = null;
var Is = 0;
let $o = 1;
var zi, Xi, Ai, Hn, An, Er, Wt, Cr, ti, Vn, En, Wi, Ki, Ei, ut, Hr, dl, Vr, Ma, jr, eu;
const Zr = class Zr {
  constructor() {
    ye(this, ut);
    cn(this, "id", $o++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    cn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    cn(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    ye(this, zi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    ye(this, Xi, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    ye(this, Ai, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    ye(this, Hn, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    ye(this, An, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ye(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    ye(this, Wt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    ye(this, Cr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    ye(this, ti, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    ye(this, Vn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    ye(this, En, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    ye(this, Wi, /* @__PURE__ */ new Set());
    cn(this, "is_fork", !1);
    ye(this, Ki, !1);
    /** @type {Set<Batch>} */
    ye(this, Ei, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    A(this, En).has(e) || A(this, En).set(e, { d: [], m: [] }), A(this, Wi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (i) => this.schedule(i)) {
    var i = A(this, En).get(e);
    if (i) {
      A(this, En).delete(e);
      for (var r of i.d)
        rt(r, St), t(r);
      for (r of i.m)
        rt(r, On), t(r);
    }
    A(this, Wi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, i = !1) {
    e.v !== ht && !this.previous.has(e) && this.previous.set(e, e.v), e.f & ai || (this.current.set(e, [t, i]), Et == null || Et.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    oe = this;
  }
  deactivate() {
    oe = null, Et = null;
  }
  flush() {
    try {
      da = !0, oe = this, Xe(this, ut, Vr).call(this);
    } finally {
      Is = 0, wa = null, Hi = null, Nr = null, da = !1, oe = null, Et = null, Ti.clear();
    }
  }
  discard() {
    for (const e of A(this, Xi)) e(this);
    A(this, Xi).clear(), A(this, Ai).clear(), hi.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    A(this, Cr).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    let i = A(this, Hn).get(t) ?? 0;
    if (A(this, Hn).set(t, i + 1), e) {
      let r = A(this, An).get(t) ?? 0;
      A(this, An).set(t, r + 1);
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
      let a = A(this, An).get(t) ?? 0;
      a === 1 ? A(this, An).delete(t) : A(this, An).set(t, a - 1);
    }
    A(this, Ki) || i || (Ce(this, Ki, !0), Xn(() => {
      Ce(this, Ki, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const i of e)
      A(this, ti).add(i);
    for (const i of t)
      A(this, Vn).add(i);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    A(this, zi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    A(this, Xi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    A(this, Ai).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of A(this, Ai)) e(this);
    A(this, Ai).clear();
  }
  settled() {
    return (A(this, Er) ?? Ce(this, Er, Js())).promise;
  }
  static ensure() {
    if (oe === null) {
      const e = oe = new Zr();
      da || (hi.add(oe), gr || Xn(() => {
        oe === e && e.flush();
      }));
    }
    return oe;
  }
  apply() {
    {
      Et = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var r;
    if (wa = e, (r = e.b) != null && r.is_pending && e.f & (Zi | ta | Wa) && !(e.f & Pi)) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var i = t.f;
      if (Hi !== null && t === De && (Le === null || !(Le.f & Ot)) && !Ta)
        return;
      if (i & (si | gn)) {
        if (!(i & mt))
          return;
        t.f ^= mt;
      }
    }
    A(this, Wt).push(t);
  }
};
zi = new WeakMap(), Xi = new WeakMap(), Ai = new WeakMap(), Hn = new WeakMap(), An = new WeakMap(), Er = new WeakMap(), Wt = new WeakMap(), Cr = new WeakMap(), ti = new WeakMap(), Vn = new WeakMap(), En = new WeakMap(), Wi = new WeakMap(), Ki = new WeakMap(), Ei = new WeakMap(), ut = new WeakSet(), Hr = function() {
  return this.is_fork || A(this, An).size > 0;
}, dl = function() {
  for (const i of A(this, Ei))
    for (const r of A(i, An).keys()) {
      for (var e = !1, t = r; t.parent !== null; ) {
        if (A(this, En).has(t)) {
          e = !0;
          break;
        }
        t = t.parent;
      }
      if (!e)
        return !0;
    }
  return !1;
}, Vr = function() {
  var u, o;
  if (Is++ > 1e3 && (hi.delete(this), nu()), !Xe(this, ut, Hr).call(this)) {
    for (const d of A(this, ti))
      A(this, Vn).delete(d), rt(d, St), this.schedule(d);
    for (const d of A(this, Vn))
      rt(d, On), this.schedule(d);
  }
  const e = A(this, Wt);
  Ce(this, Wt, []), this.apply();
  var t = Hi = [], i = [], r = Nr = [];
  for (const d of e)
    try {
      Xe(this, ut, Ma).call(this, d, t, i);
    } catch (c) {
      throw hl(d), c;
    }
  if (oe = null, r.length > 0) {
    var a = Zr.ensure();
    for (const d of r)
      a.schedule(d);
  }
  if (Hi = null, Nr = null, Xe(this, ut, Hr).call(this) || Xe(this, ut, dl).call(this)) {
    Xe(this, ut, jr).call(this, i), Xe(this, ut, jr).call(this, t);
    for (const [d, c] of A(this, En))
      fl(d, c);
  } else {
    A(this, Hn).size === 0 && hi.delete(this), A(this, ti).clear(), A(this, Vn).clear();
    for (const d of A(this, zi)) d(this);
    A(this, zi).clear(), bs(i), bs(t), (u = A(this, Er)) == null || u.resolve();
  }
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    oe
  );
  if (A(this, Wt).length > 0) {
    const d = s ?? (s = this);
    A(d, Wt).push(...A(this, Wt).filter((c) => !A(d, Wt).includes(c)));
  }
  s !== null && (hi.add(s), Xe(o = s, ut, Vr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ma = function(e, t, i) {
  e.f ^= mt;
  for (var r = e.first; r !== null; ) {
    var a = r.f, s = (a & (gn | si)) !== 0, u = s && (a & mt) !== 0, o = u || (a & Rt) !== 0 || A(this, En).has(r);
    if (!o && r.fn !== null) {
      s ? r.f ^= mt : a & Zi ? t.push(r) : Dr(r) && (a & Tn && A(this, Vn).add(r), tr(r));
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
jr = function(e) {
  for (var t = 0; t < e.length; t += 1)
    ol(e[t], A(this, ti), A(this, Vn));
}, eu = function() {
  var c, v, f;
  for (const p of hi) {
    var e = p.id < this.id, t = [];
    for (const [h, [m, g]] of this.current) {
      if (p.current.has(h)) {
        var i = (
          /** @type {[any, boolean]} */
          p.current.get(h)[0]
        );
        if (e && m !== i)
          p.current.set(h, [m, g]);
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
        for (const h of A(this, Wi))
          p.unskip_effect(h, (m) => {
            var g;
            m.f & (Tn | br) ? p.schedule(m) : Xe(g = p, ut, jr).call(g, [m]);
          });
      p.activate();
      var a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var u of t)
        cl(u, r, a, s);
      s = /* @__PURE__ */ new Map();
      var o = [...p.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of A(this, Cr))
        !(h.f & (Yt | Rt | Ca)) && Za(h, o, s) && (h.f & (br | Tn) ? (rt(h, St), p.schedule(h)) : A(p, ti).add(h));
      if (A(p, Wt).length > 0) {
        p.apply();
        for (var d of A(p, Wt))
          Xe(c = p, ut, Ma).call(c, d, [], []);
        Ce(p, Wt, []);
      }
      p.deactivate();
    }
  }
  for (const p of hi)
    A(p, Ei).has(this) && (A(p, Ei).delete(this), A(p, Ei).size === 0 && !Xe(v = p, ut, Hr).call(v) && (p.activate(), Xe(f = p, ut, Vr).call(f)));
};
let Ri = Zr;
function tu(n) {
  var e = gr;
  gr = !0;
  try {
    for (var t; ; ) {
      if (qo(), oe === null)
        return (
          /** @type {T} */
          t
        );
      oe.flush();
    }
  } finally {
    gr = e;
  }
}
function nu() {
  try {
    Bo();
  } catch (n) {
    ii(n, wa);
  }
}
let fn = null;
function bs(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Yt | Rt)) && Dr(i) && (fn = /* @__PURE__ */ new Set(), tr(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && Dl(i), (fn == null ? void 0 : fn.size) > 0)) {
        Ti.clear();
        for (const r of fn) {
          if (r.f & (Yt | Rt)) continue;
          const a = [r];
          let s = r.parent;
          for (; s !== null; )
            fn.has(s) && (fn.delete(s), a.push(s)), s = s.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const o = a[u];
            o.f & (Yt | Rt) || tr(o);
          }
        }
        fn.clear();
      }
    }
    fn = null;
  }
}
function cl(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const a = r.f;
      a & Ot ? cl(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : a & (br | Tn) && !(a & St) && Za(r, e, i) && (rt(r, St), Ja(
        /** @type {Effect} */
        r
      ));
    }
}
function Za(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (Qi.call(e, r))
        return !0;
      if (r.f & Ot && Za(
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
function Ja(n) {
  oe.schedule(n);
}
function fl(n, e) {
  if (!(n.f & gn && n.f & mt)) {
    n.f & St ? e.d.push(n) : n.f & On && e.m.push(n), rt(n, mt);
    for (var t = n.first; t !== null; )
      fl(t, e), t = t.next;
  }
}
function hl(n) {
  rt(n, mt);
  for (var e = n.first; e !== null; )
    hl(e), e = e.next;
}
function iu(n) {
  let e = 0, t = _i(0), i;
  return () => {
    es() && (l(t), aa(() => (e === 0 && (i = li(() => n(() => Ir(t)))), e += 1, () => {
      Xn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Ir(t));
      });
    })));
  };
}
var ru = Wn | ir;
function au(n, e, t, i) {
  new su(n, e, t, i);
}
var nn, Ga, rn, Ci, Ht, an, Dt, Kt, jn, Si, ni, qi, Sr, xr, Gn, Jr, tt, lu, ou, uu, Oa, Gr, zr, Da, Ra;
class su {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, i, r) {
    ye(this, tt);
    /** @type {Boundary | null} */
    cn(this, "parent");
    cn(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    cn(this, "transform_error");
    /** @type {TemplateNode} */
    ye(this, nn);
    /** @type {TemplateNode | null} */
    ye(this, Ga, null);
    /** @type {BoundaryProps} */
    ye(this, rn);
    /** @type {((anchor: Node) => void)} */
    ye(this, Ci);
    /** @type {Effect} */
    ye(this, Ht);
    /** @type {Effect | null} */
    ye(this, an, null);
    /** @type {Effect | null} */
    ye(this, Dt, null);
    /** @type {Effect | null} */
    ye(this, Kt, null);
    /** @type {DocumentFragment | null} */
    ye(this, jn, null);
    ye(this, Si, 0);
    ye(this, ni, 0);
    ye(this, qi, !1);
    /** @type {Set<Effect>} */
    ye(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    ye(this, xr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    ye(this, Gn, null);
    ye(this, Jr, iu(() => (Ce(this, Gn, _i(A(this, Si))), () => {
      Ce(this, Gn, null);
    })));
    var a;
    Ce(this, nn, e), Ce(this, rn, t), Ce(this, Ci, (s) => {
      var u = (
        /** @type {Effect} */
        De
      );
      u.b = this, u.f |= Aa, i(s);
    }), this.parent = /** @type {Effect} */
    De.b, this.transform_error = r ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), Ce(this, Ht, rr(() => {
      Xe(this, tt, Oa).call(this);
    }, ru));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    ol(e, A(this, Sr), A(this, xr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!A(this, rn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    Xe(this, tt, Da).call(this, e, t), Ce(this, Si, A(this, Si) + e), !(!A(this, Gn) || A(this, qi)) && (Ce(this, qi, !0), Xn(() => {
      Ce(this, qi, !1), A(this, Gn) && $i(A(this, Gn), A(this, Si));
    }));
  }
  get_effect_pending() {
    return A(this, Jr).call(this), l(
      /** @type {Source<number>} */
      A(this, Gn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!A(this, rn).onerror && !A(this, rn).failed)
      throw e;
    oe != null && oe.is_fork ? (A(this, an) && oe.skip_effect(A(this, an)), A(this, Dt) && oe.skip_effect(A(this, Dt)), A(this, Kt) && oe.skip_effect(A(this, Kt)), oe.on_fork_commit(() => {
      Xe(this, tt, Ra).call(this, e);
    })) : Xe(this, tt, Ra).call(this, e);
  }
}
nn = new WeakMap(), Ga = new WeakMap(), rn = new WeakMap(), Ci = new WeakMap(), Ht = new WeakMap(), an = new WeakMap(), Dt = new WeakMap(), Kt = new WeakMap(), jn = new WeakMap(), Si = new WeakMap(), ni = new WeakMap(), qi = new WeakMap(), Sr = new WeakMap(), xr = new WeakMap(), Gn = new WeakMap(), Jr = new WeakMap(), tt = new WeakSet(), lu = function() {
  try {
    Ce(this, an, jt(() => A(this, Ci).call(this, A(this, nn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ou = function(e) {
  const t = A(this, rn).failed;
  t && Ce(this, Kt, jt(() => {
    t(
      A(this, nn),
      () => e,
      () => () => {
      }
    );
  }));
}, uu = function() {
  const e = A(this, rn).pending;
  e && (this.is_pending = !0, Ce(this, Dt, jt(() => e(A(this, nn)))), Xn(() => {
    var t = Ce(this, jn, document.createDocumentFragment()), i = wn();
    t.append(i), Ce(this, an, Xe(this, tt, zr).call(this, () => jt(() => A(this, Ci).call(this, i)))), A(this, ni) === 0 && (A(this, nn).before(t), Ce(this, jn, null), Li(
      /** @type {Effect} */
      A(this, Dt),
      () => {
        Ce(this, Dt, null);
      }
    ), Xe(this, tt, Gr).call(
      this,
      /** @type {Batch} */
      oe
    ));
  }));
}, Oa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ce(this, ni, 0), Ce(this, Si, 0), Ce(this, an, jt(() => {
      A(this, Ci).call(this, A(this, nn));
    })), A(this, ni) > 0) {
      var e = Ce(this, jn, document.createDocumentFragment());
      is(A(this, an), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        A(this, rn).pending
      );
      Ce(this, Dt, jt(() => t(A(this, nn))));
    } else
      Xe(this, tt, Gr).call(
        this,
        /** @type {Batch} */
        oe
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
Gr = function(e) {
  this.is_pending = !1, e.transfer_effects(A(this, Sr), A(this, xr));
}, /**
 * @template T
 * @param {() => T} fn
 */
zr = function(e) {
  var t = De, i = Le, r = ot;
  Dn(A(this, Ht)), on(A(this, Ht)), Ji(A(this, Ht).ctx);
  try {
    return Ri.ensure(), e();
  } catch (a) {
    return sl(a), null;
  } finally {
    Dn(t), on(i), Ji(r);
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
    this.parent && Xe(i = this.parent, tt, Da).call(i, e, t);
    return;
  }
  Ce(this, ni, A(this, ni) + e), A(this, ni) === 0 && (Xe(this, tt, Gr).call(this, t), A(this, Dt) && Li(A(this, Dt), () => {
    Ce(this, Dt, null);
  }), A(this, jn) && (A(this, nn).before(A(this, jn)), Ce(this, jn, null)));
}, /**
 * @param {unknown} error
 */
Ra = function(e) {
  A(this, an) && (xt(A(this, an)), Ce(this, an, null)), A(this, Dt) && (xt(A(this, Dt)), Ce(this, Dt, null)), A(this, Kt) && (xt(A(this, Kt)), Ce(this, Kt, null));
  var t = A(this, rn).onerror;
  let i = A(this, rn).failed;
  var r = !1, a = !1;
  const s = () => {
    if (r) {
      Xo();
      return;
    }
    r = !0, a && jo(), A(this, Kt) !== null && Li(A(this, Kt), () => {
      Ce(this, Kt, null);
    }), Xe(this, tt, zr).call(this, () => {
      Xe(this, tt, Oa).call(this);
    });
  }, u = (o) => {
    try {
      a = !0, t == null || t(o, s), a = !1;
    } catch (d) {
      ii(d, A(this, Ht) && A(this, Ht).parent);
    }
    i && Ce(this, Kt, Xe(this, tt, zr).call(this, () => {
      try {
        return jt(() => {
          var d = (
            /** @type {Effect} */
            De
          );
          d.b = this, d.f |= Aa, i(
            A(this, nn),
            () => o,
            () => s
          );
        });
      } catch (d) {
        return ii(
          d,
          /** @type {Effect} */
          A(this, Ht).parent
        ), null;
      }
    }));
  };
  Xn(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (d) {
      ii(d, A(this, Ht) && A(this, Ht).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (d) => ii(d, A(this, Ht) && A(this, Ht).parent)
    ) : u(o);
  });
};
function vl(n, e, t, i) {
  const r = ia;
  var a = n.filter((f) => !f.settled);
  if (t.length === 0 && a.length === 0) {
    i(e.map(r));
    return;
  }
  var s = (
    /** @type {Effect} */
    De
  ), u = du(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((f) => f.promise)) : null;
  function d(f) {
    u();
    try {
      i(f);
    } catch (p) {
      s.f & Yt || ii(p, s);
    }
    Kr();
  }
  if (t.length === 0) {
    o.then(() => d(e.map(r)));
    return;
  }
  var c = pl();
  function v() {
    Promise.all(t.map((f) => /* @__PURE__ */ cu(f))).then((f) => d([...e.map(r), ...f])).catch((f) => ii(f, s)).finally(() => c());
  }
  o ? o.then(() => {
    u(), v(), Kr();
  }) : v();
}
function du() {
  var n = (
    /** @type {Effect} */
    De
  ), e = Le, t = ot, i = (
    /** @type {Batch} */
    oe
  );
  return function(a = !0) {
    Dn(n), on(e), Ji(t), a && !(n.f & Yt) && (i == null || i.activate(), i == null || i.apply());
  };
}
function Kr(n = !0) {
  Dn(null), on(null), Ji(null), n && (oe == null || oe.deactivate());
}
function pl() {
  var n = (
    /** @type {Effect} */
    De
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    oe
  ), i = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(i, n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(i, n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function ia(n) {
  var e = Ot | St;
  return De !== null && (De.f |= ir), {
    ctx: ot,
    deps: null,
    effects: null,
    equals: tl,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ht
    ),
    wv: 0,
    parent: De,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function cu(n, e, t) {
  let i = (
    /** @type {Effect | null} */
    De
  );
  i === null && Ro();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = _i(
    /** @type {V} */
    ht
  ), s = !Le, u = /* @__PURE__ */ new Map();
  return Su(() => {
    var p;
    var o = (
      /** @type {Effect} */
      De
    ), d = Js();
    r = d.promise;
    try {
      Promise.resolve(n()).then(d.resolve, d.reject).finally(Kr);
    } catch (h) {
      d.reject(h), Kr();
    }
    var c = (
      /** @type {Batch} */
      oe
    );
    if (s) {
      if (o.f & Pi)
        var v = pl();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        (p = u.get(c)) == null || p.reject(Nn), u.delete(c);
      else {
        for (const h of u.values())
          h.reject(Nn);
        u.clear();
      }
      u.set(c, d);
    }
    const f = (h, m = void 0) => {
      if (v) {
        var g = m === Nn;
        v(g);
      }
      if (!(m === Nn || o.f & Yt)) {
        if (c.activate(), m)
          a.f |= ai, $i(a, m);
        else {
          a.f & ai && (a.f ^= ai), $i(a, h);
          for (const [C, O] of u) {
            if (u.delete(C), C === c) break;
            O.reject(Nn);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(f, (h) => f(null, h || "unknown"));
  }), Mr(() => {
    for (const o of u.values())
      o.reject(Nn);
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
function ae(n) {
  const e = /* @__PURE__ */ ia(n);
  return Pl(e), e;
}
// @__NO_SIDE_EFFECTS__
function ml(n) {
  const e = /* @__PURE__ */ ia(n);
  return e.equals = nl, e;
}
function fu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      xt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function $a(n) {
  var e, t = De, i = n.parent;
  if (!Kn && i !== null && i.f & (Yt | Rt))
    return Go(), n.v;
  Dn(i);
  try {
    n.f &= ~Di, fu(n), e = Ul(n);
  } finally {
    Dn(t);
  }
  return e;
}
function gl(n) {
  var e = $a(n);
  if (!n.equals(e) && (n.wv = Fl(), (!(oe != null && oe.is_fork) || n.deps === null) && (oe !== null ? oe.capture(n, e, !0) : n.v = e, n.deps === null))) {
    rt(n, mt);
    return;
  }
  Kn || (Et !== null ? (es() || oe != null && oe.is_fork) && Et.set(n, e) : Ya(n));
}
function hu(n) {
  var e, t;
  if (n.effects !== null)
    for (const i of n.effects)
      (i.teardown || i.ac) && ((e = i.teardown) == null || e.call(i), (t = i.ac) == null || t.abort(Nn), i.teardown = Ee, i.ac = null, yr(i, 0), ts(i));
}
function Il(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && tr(e);
}
let _a = /* @__PURE__ */ new Set();
const Ti = /* @__PURE__ */ new Map();
let bl = !1;
function _i(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: tl,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function fe(n, e) {
  const t = _i(n);
  return Pl(t), t;
}
// @__NO_SIDE_EFFECTS__
function yl(n, e = !1, t = !0) {
  const i = _i(n);
  return e || (i.equals = nl), i;
}
function G(n, e, t = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!pn || Le.f & Ca) && il() && Le.f & (Ot | Tn | br | Ca) && (ln === null || !Qi.call(ln, n)) && Vo();
  let i = t ? Oe(e) : e;
  return $i(n, i, Nr);
}
function $i(n, e, t = null) {
  if (!n.equals(e)) {
    Ti.set(n, Kn ? e : n.v);
    var i = Ri.ensure();
    if (i.capture(n, e), n.f & Ot) {
      const r = (
        /** @type {Derived} */
        n
      );
      n.f & St && $a(r), Et === null && Ya(r);
    }
    n.wv = Fl(), Al(n, St, t), De !== null && De.f & mt && !(De.f & (gn | si)) && (tn === null ? Lu([n]) : tn.push(n)), !i.is_fork && _a.size > 0 && !bl && vu();
  }
  return e;
}
function vu() {
  bl = !1;
  for (const n of _a)
    n.f & mt && rt(n, On), Dr(n) && tr(n);
  _a.clear();
}
function Ir(n) {
  G(n, n.v + 1);
}
function Al(n, e, t) {
  var i = n.reactions;
  if (i !== null)
    for (var r = i.length, a = 0; a < r; a++) {
      var s = i[a], u = s.f, o = (u & St) === 0;
      if (o && rt(s, e), u & Ot) {
        var d = (
          /** @type {Derived} */
          s
        );
        Et == null || Et.delete(d), u & Di || (u & sn && (s.f |= Di), Al(d, On, t));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          s
        );
        u & Tn && fn !== null && fn.add(c), t !== null ? t.push(c) : Ja(c);
      }
    }
}
function Oe(n) {
  if (typeof n != "object" || n === null || Ln in n)
    return n;
  const e = Xa(n);
  if (e !== To && e !== Lo)
    return n;
  var t = /* @__PURE__ */ new Map(), i = za(n), r = /* @__PURE__ */ fe(0), a = wi, s = (u) => {
    if (wi === a)
      return u();
    var o = Le, d = wi;
    on(null), Ss(a);
    var c = u();
    return on(o), Ss(d), c;
  };
  return i && t.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && No();
        var c = t.get(o);
        return c === void 0 ? s(() => {
          var v = /* @__PURE__ */ fe(d.value);
          return t.set(o, v), v;
        }) : G(c, d.value, !0), !0;
      },
      deleteProperty(u, o) {
        var d = t.get(o);
        if (d === void 0) {
          if (o in u) {
            const c = s(() => /* @__PURE__ */ fe(ht));
            t.set(o, c), Ir(r);
          }
        } else
          G(d, ht), Ir(r);
        return !0;
      },
      get(u, o, d) {
        var p;
        if (o === Ln)
          return n;
        var c = t.get(o), v = o in u;
        if (c === void 0 && (!v || (p = ri(u, o)) != null && p.writable) && (c = s(() => {
          var h = Oe(v ? u[o] : ht), m = /* @__PURE__ */ fe(h);
          return m;
        }), t.set(o, c)), c !== void 0) {
          var f = l(c);
          return f === ht ? void 0 : f;
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
          if (v !== void 0 && f !== ht)
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
        if (o === Ln)
          return !0;
        var d = t.get(o), c = d !== void 0 && d.v !== ht || Reflect.has(u, o);
        if (d !== void 0 || De !== null && (!c || (f = ri(u, o)) != null && f.writable)) {
          d === void 0 && (d = s(() => {
            var p = c ? Oe(u[o]) : ht, h = /* @__PURE__ */ fe(p);
            return h;
          }), t.set(o, d));
          var v = l(d);
          if (v === ht)
            return !1;
        }
        return c;
      },
      set(u, o, d, c) {
        var x;
        var v = t.get(o), f = o in u;
        if (i && o === "length")
          for (var p = d; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var h = t.get(p + "");
            h !== void 0 ? G(h, ht) : p in u && (h = s(() => /* @__PURE__ */ fe(ht)), t.set(p + "", h));
          }
        if (v === void 0)
          (!f || (x = ri(u, o)) != null && x.writable) && (v = s(() => /* @__PURE__ */ fe(void 0)), G(v, Oe(d)), t.set(o, v));
        else {
          f = v.v !== ht;
          var m = s(() => Oe(d));
          G(v, m);
        }
        var g = Reflect.getOwnPropertyDescriptor(u, o);
        if (g != null && g.set && g.set.call(c, d), !f) {
          if (i && typeof o == "string") {
            var C = (
              /** @type {Source<number>} */
              t.get("length")
            ), O = Number(o);
            Number.isInteger(O) && O >= C.v && G(C, O + 1);
          }
          Ir(r);
        }
        return !0;
      },
      ownKeys(u) {
        l(r);
        var o = Reflect.ownKeys(u).filter((v) => {
          var f = t.get(v);
          return f === void 0 || f.v !== ht;
        });
        for (var [d, c] of t)
          c.v !== ht && !(d in u) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        Ho();
      }
    }
  );
}
function ys(n) {
  try {
    if (n !== null && typeof n == "object" && Ln in n)
      return n[Ln];
  } catch {
  }
  return n;
}
function pu(n, e) {
  return Object.is(ys(n), ys(e));
}
var As, El, Cl, Sl, xl;
function mu() {
  if (As === void 0) {
    As = window, El = document, Cl = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Sl = ri(e, "firstChild").get, xl = ri(e, "nextSibling").get, gs(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), gs(t) && (t.__t = void 0);
  }
}
function wn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function er(n) {
  return (
    /** @type {TemplateNode | null} */
    Sl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function wr(n) {
  return (
    /** @type {TemplateNode | null} */
    xl.call(n)
  );
}
function J(n, e) {
  return /* @__PURE__ */ er(n);
}
function re(n, e = !1) {
  {
    var t = /* @__PURE__ */ er(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ wr(t) : t;
  }
}
function Y(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ wr(i);
  return i;
}
function gu(n) {
  n.textContent = "";
}
function Tl() {
  return !1;
}
function Ll(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? Ys, n, void 0)
  );
}
function Iu(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Xn(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let Es = !1;
function bu() {
  Es || (Es = !0, document.addEventListener(
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
function ra(n) {
  var e = Le, t = De;
  on(null), Dn(null);
  try {
    return n();
  } finally {
    on(e), Dn(t);
  }
}
function yu(n, e, t, i = t) {
  n.addEventListener(e, () => ra(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), bu();
}
function Au(n) {
  De === null && (Le === null && Fo(), ko()), Kn && Po();
}
function Eu(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Rn(n, e) {
  var t = De;
  t !== null && t.f & Rt && (n |= Rt);
  var i = {
    ctx: ot,
    deps: null,
    nodes: null,
    f: n | St | sn,
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
  oe == null || oe.register_created_effect(i);
  var r = i;
  if (n & Zi)
    Hi !== null ? Hi.push(i) : Ri.ensure().schedule(i);
  else if (e !== null) {
    try {
      tr(i);
    } catch (s) {
      throw xt(i), s;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    !(r.f & ir) && (r = r.first, n & Tn && n & Wn && r !== null && (r.f |= Wn));
  }
  if (r !== null && (r.parent = t, t !== null && Eu(r, t), Le !== null && Le.f & Ot && !(n & si))) {
    var a = (
      /** @type {Derived} */
      Le
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return i;
}
function es() {
  return Le !== null && !pn;
}
function Mr(n) {
  const e = Rn(ta, null);
  return rt(e, mt), e.teardown = n, e;
}
function Pe(n) {
  Au();
  var e = (
    /** @type {Effect} */
    De.f
  ), t = !Le && (e & gn) !== 0 && (e & Pi) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ot
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return wl(n);
}
function wl(n) {
  return Rn(Zi | Oo, n);
}
function Cu(n) {
  Ri.ensure();
  const e = Rn(si | ir, n);
  return (t = {}) => new Promise((i) => {
    t.outro ? Li(e, () => {
      xt(e), i(void 0);
    }) : (xt(e), i(void 0));
  });
}
function Or(n) {
  return Rn(Zi, n);
}
function Su(n) {
  return Rn(br | ir, n);
}
function aa(n, e = 0) {
  return Rn(ta | e, n);
}
function He(n, e = [], t = [], i = []) {
  vl(i, e, t, (r) => {
    Rn(ta, () => n(...r.map(l)));
  });
}
function rr(n, e = 0) {
  var t = Rn(Tn | e, n);
  return t;
}
function Ml(n, e = 0) {
  var t = Rn(Wa | e, n);
  return t;
}
function jt(n) {
  return Rn(gn | ir, n);
}
function Ol(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Kn, i = Le;
    Cs(!0), on(null);
    try {
      e.call(null);
    } finally {
      Cs(t), on(i);
    }
  }
}
function ts(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && ra(() => {
      r.abort(Nn);
    });
    var i = t.next;
    t.f & si ? t.parent = null : xt(t, e), t = i;
  }
}
function xu(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & gn || xt(e), e = t;
  }
}
function xt(n, e = !0) {
  var t = !1;
  (e || n.f & Mo) && n.nodes !== null && n.nodes.end !== null && (Tu(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), rt(n, Ea), ts(n, e && !t), yr(n, 0);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  Ol(n), n.f ^= Ea, n.f |= Yt;
  var r = n.parent;
  r !== null && r.first !== null && Dl(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function Tu(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ wr(n);
    n.remove(), n = t;
  }
}
function Dl(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function Li(n, e, t = !0) {
  var i = [];
  Rl(n, i, !0);
  var r = () => {
    t && xt(n), e && e();
  }, a = i.length;
  if (a > 0) {
    var s = () => --a || r();
    for (var u of i)
      u.out(s);
  } else
    r();
}
function Rl(n, e, t) {
  if (!(n.f & Rt)) {
    n.f ^= Rt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && e.push(u);
    for (var r = n.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & si)) {
        var s = (r.f & Wn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & gn) !== 0 && (n.f & Tn) !== 0;
        Rl(r, e, s ? t : !1);
      }
      r = a;
    }
  }
}
function ns(n) {
  _l(n, !0);
}
function _l(n, e) {
  if (n.f & Rt) {
    n.f ^= Rt, n.f & mt || (rt(n, St), Ri.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Wn) !== 0 || (t.f & gn) !== 0;
      _l(t, r ? e : !1), t = i;
    }
    var a = n.nodes && n.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || e) && s.in();
  }
}
function is(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ wr(t);
      e.append(t), t = r;
    }
}
let Xr = !1, Kn = !1;
function Cs(n) {
  Kn = n;
}
let Le = null, pn = !1;
function on(n) {
  Le = n;
}
let De = null;
function Dn(n) {
  De = n;
}
let ln = null;
function Pl(n) {
  Le !== null && (ln === null ? ln = [n] : ln.push(n));
}
let Vt = null, Xt = 0, tn = null;
function Lu(n) {
  tn = n;
}
let kl = 1, bi = 0, wi = bi;
function Ss(n) {
  wi = n;
}
function Fl() {
  return ++kl;
}
function Dr(n) {
  var e = n.f;
  if (e & St)
    return !0;
  if (e & Ot && (n.f &= ~Di), e & On) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), i = t.length, r = 0; r < i; r++) {
      var a = t[r];
      if (Dr(
        /** @type {Derived} */
        a
      ) && gl(
        /** @type {Derived} */
        a
      ), a.wv > n.wv)
        return !0;
    }
    e & sn && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Et === null && rt(n, mt);
  }
  return !1;
}
function Bl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(ln !== null && Qi.call(ln, n)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & Ot ? Bl(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? rt(a, St) : a.f & mt && rt(a, On), Ja(
        /** @type {Effect} */
        a
      ));
    }
}
function Ul(n) {
  var m;
  var e = Vt, t = Xt, i = tn, r = Le, a = ln, s = ot, u = pn, o = wi, d = n.f;
  Vt = /** @type {null | Value[]} */
  null, Xt = 0, tn = null, Le = d & (gn | si) ? null : n, ln = null, Ji(n.ctx), pn = !1, wi = ++bi, n.ac !== null && (ra(() => {
    n.ac.abort(Nn);
  }), n.ac = null);
  try {
    n.f |= Sa;
    var c = (
      /** @type {Function} */
      n.fn
    ), v = c();
    n.f |= Pi;
    var f = n.deps, p = oe == null ? void 0 : oe.is_fork;
    if (Vt !== null) {
      var h;
      if (p || yr(n, Xt), f !== null && Xt > 0)
        for (f.length = Xt + Vt.length, h = 0; h < Vt.length; h++)
          f[Xt + h] = Vt[h];
      else
        n.deps = f = Vt;
      if (es() && n.f & sn)
        for (h = Xt; h < f.length; h++)
          ((m = f[h]).reactions ?? (m.reactions = [])).push(n);
    } else !p && f !== null && Xt < f.length && (yr(n, Xt), f.length = Xt);
    if (il() && tn !== null && !pn && f !== null && !(n.f & (Ot | On | St)))
      for (h = 0; h < /** @type {Source[]} */
      tn.length; h++)
        Bl(
          tn[h],
          /** @type {Effect} */
          n
        );
    if (r !== null && r !== n) {
      if (bi++, r.deps !== null)
        for (let g = 0; g < t; g += 1)
          r.deps[g].rv = bi;
      if (e !== null)
        for (const g of e)
          g.rv = bi;
      tn !== null && (i === null ? i = tn : i.push(.../** @type {Source[]} */
      tn));
    }
    return n.f & ai && (n.f ^= ai), v;
  } catch (g) {
    return sl(g);
  } finally {
    n.f ^= Sa, Vt = e, Xt = t, tn = i, Le = r, ln = a, Ji(s), pn = u, wi = o;
  }
}
function wu(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = xo.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  if (t === null && e.f & Ot && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Vt === null || !Qi.call(Vt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & sn && (a.f ^= sn, a.f &= ~Di), a.v !== ht && Ya(a), hu(a), yr(a, 0);
  }
}
function yr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      wu(n, t[i]);
}
function tr(n) {
  var e = n.f;
  if (!(e & Yt)) {
    rt(n, mt);
    var t = De, i = Xr;
    De = n, Xr = !0;
    try {
      e & (Tn | Wa) ? xu(n) : ts(n), Ol(n);
      var r = Ul(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = kl;
      var a;
      So && Wo && n.f & St && n.deps;
    } finally {
      Xr = i, De = t;
    }
  }
}
async function Nl() {
  await Promise.resolve(), tu();
}
function l(n) {
  var e = n.f, t = (e & Ot) !== 0;
  if (Le !== null && !pn) {
    var i = De !== null && (De.f & Yt) !== 0;
    if (!i && (ln === null || !Qi.call(ln, n))) {
      var r = Le.deps;
      if (Le.f & Sa)
        n.rv < bi && (n.rv = bi, Vt === null && r !== null && r[Xt] === n ? Xt++ : Vt === null ? Vt = [n] : Vt.push(n));
      else {
        (Le.deps ?? (Le.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Le] : Qi.call(a, Le) || a.push(Le);
      }
    }
  }
  if (Kn && Ti.has(n))
    return Ti.get(n);
  if (t) {
    var s = (
      /** @type {Derived} */
      n
    );
    if (Kn) {
      var u = s.v;
      return (!(s.f & mt) && s.reactions !== null || Vl(s)) && (u = $a(s)), Ti.set(s, u), u;
    }
    var o = (s.f & sn) === 0 && !pn && Le !== null && (Xr || (Le.f & sn) !== 0), d = (s.f & Pi) === 0;
    Dr(s) && (o && (s.f |= sn), gl(s)), o && !d && (Il(s), Hl(s));
  }
  if (Et != null && Et.has(n))
    return Et.get(n);
  if (n.f & ai)
    throw n.v;
  return n.v;
}
function Hl(n) {
  if (n.f |= sn, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Ot && !(e.f & sn) && (Il(
        /** @type {Derived} */
        e
      ), Hl(
        /** @type {Derived} */
        e
      ));
}
function Vl(n) {
  if (n.v === ht) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Ti.has(e) || e.f & Ot && Vl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function li(n) {
  var e = pn;
  try {
    return pn = !0, n();
  } finally {
    pn = e;
  }
}
function Mu(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Ln in n)
      Pa(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && Ln in t && Pa(t);
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
    const t = Xa(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = Zs(t);
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
const yi = Symbol("events"), jl = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set();
function rs(n, e, t, i = {}) {
  function r(a) {
    if (i.capture || Fa.call(e, a), !a.cancelBubble)
      return ra(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Xn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function Ou(n, e, t, i = {}) {
  var r = rs(e, n, t, i);
  return () => {
    n.removeEventListener(e, r, i);
  };
}
function Gl(n, e, t, i, r) {
  var a = { capture: i, passive: r }, s = rs(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Mr(() => {
    e.removeEventListener(n, s, a);
  });
}
function vn(n, e, t) {
  (e[yi] ?? (e[yi] = {}))[n] = t;
}
function as(n) {
  for (var e = 0; e < n.length; e++)
    jl.add(n[e]);
  for (var t of ka)
    t(n);
}
let xs = null;
function Fa(n) {
  var g, C;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((g = n.composedPath) == null ? void 0 : g.call(n)) || [], a = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  xs = n;
  var s = 0, u = xs === n && n[yi];
  if (u) {
    var o = r.indexOf(u);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[yi] = e;
      return;
    }
    var d = r.indexOf(e);
    if (d === -1)
      return;
    o <= d && (s = o);
  }
  if (a = /** @type {Element} */
  r[s] || n.target, a !== e) {
    Qs(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = Le, v = De;
    on(null), Dn(null);
    try {
      for (var f, p = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = (C = a[yi]) == null ? void 0 : C[i];
          m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a) && m.call(a, n);
        } catch (O) {
          f ? p.push(O) : f = O;
        }
        if (n.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let O of p)
          queueMicrotask(() => {
            throw O;
          });
        throw f;
      }
    } finally {
      n[yi] = e, delete n.currentTarget, on(c), Dn(v);
    }
  }
}
var Ks;
const ca = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ks = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ks.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function Du(n) {
  return (
    /** @type {string} */
    (ca == null ? void 0 : ca.createHTML(n)) ?? n
  );
}
function zl(n) {
  var e = Ll("template");
  return e.innerHTML = Du(n.replaceAll("<!>", "<!---->")), e.content;
}
function nr(n, e) {
  var t = (
    /** @type {Effect} */
    De
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function se(n, e) {
  var t = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !n.startsWith("<!>");
  return () => {
    r === void 0 && (r = zl(a ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ er(r)));
    var s = (
      /** @type {TemplateNode} */
      i || Cl ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      nr(u, o);
    } else
      nr(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ru(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        zl(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ er(s)
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
function _u(n, e) {
  return /* @__PURE__ */ Ru(n, e, "svg");
}
function pt(n = "") {
  {
    var e = wn(n + "");
    return nr(e, e), e;
  }
}
function ve() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = wn();
  return n.append(e, t), nr(e, t), n;
}
function M(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Pu(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const ku = [
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
function Fu(n) {
  return ku.includes(n);
}
const Bu = {
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
function Uu(n) {
  return n = n.toLowerCase(), Bu[n] ?? n;
}
const Nu = ["touchstart", "touchmove"];
function Hu(n) {
  return Nu.includes(n);
}
function Te(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = `${t}`);
}
function Vu(n, e) {
  return ju(n, e);
}
const kr = /* @__PURE__ */ new Map();
function ju(n, { target: e, anchor: t, props: i = {}, events: r, context: a, intro: s = !0, transformError: u }) {
  mu();
  var o = void 0, d = Cu(() => {
    var c = t ?? e.appendChild(wn());
    au(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Ke({});
        var h = (
          /** @type {ComponentContext} */
          ot
        );
        a && (h.c = a), r && (i.$$events = r), o = n(p, i) || {}, qe();
      },
      u
    );
    var v = /* @__PURE__ */ new Set(), f = (p) => {
      for (var h = 0; h < p.length; h++) {
        var m = p[h];
        if (!v.has(m)) {
          v.add(m);
          var g = Hu(m);
          for (const x of [e, document]) {
            var C = kr.get(x);
            C === void 0 && (C = /* @__PURE__ */ new Map(), kr.set(x, C));
            var O = C.get(m);
            O === void 0 ? (x.addEventListener(m, Fa, { passive: g }), C.set(m, 1)) : C.set(m, O + 1);
          }
        }
      }
    };
    return f(ea(jl)), ka.add(f), () => {
      var g;
      for (var p of v)
        for (const C of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            kr.get(C)
          ), m = (
            /** @type {number} */
            h.get(p)
          );
          --m == 0 ? (C.removeEventListener(p, Fa), h.delete(p), h.size === 0 && kr.delete(C)) : h.set(p, m);
        }
      ka.delete(f), c !== t && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return Gu.set(o, d), o;
}
let Gu = /* @__PURE__ */ new WeakMap();
var hn, Cn, qt, xi, Tr, Lr, $r;
class sa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    cn(this, "anchor");
    /** @type {Map<Batch, Key>} */
    ye(this, hn, /* @__PURE__ */ new Map());
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
    ye(this, Cn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    ye(this, qt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    ye(this, xi, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    ye(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    ye(this, Lr, (e) => {
      if (A(this, hn).has(e)) {
        var t = (
          /** @type {Key} */
          A(this, hn).get(e)
        ), i = A(this, Cn).get(t);
        if (i)
          ns(i), A(this, xi).delete(t);
        else {
          var r = A(this, qt).get(t);
          r && (A(this, Cn).set(t, r.effect), A(this, qt).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, s] of A(this, hn)) {
          if (A(this, hn).delete(a), a === e)
            break;
          const u = A(this, qt).get(s);
          u && (xt(u.effect), A(this, qt).delete(s));
        }
        for (const [a, s] of A(this, Cn)) {
          if (a === t || A(this, xi).has(a)) continue;
          const u = () => {
            if (Array.from(A(this, hn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              is(s, d), d.append(wn()), A(this, qt).set(a, { effect: s, fragment: d });
            } else
              xt(s);
            A(this, xi).delete(a), A(this, Cn).delete(a);
          };
          A(this, Tr) || !i ? (A(this, xi).add(a), Li(s, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    ye(this, $r, (e) => {
      A(this, hn).delete(e);
      const t = Array.from(A(this, hn).values());
      for (const [i, r] of A(this, qt))
        t.includes(i) || (xt(r.effect), A(this, qt).delete(i));
    });
    this.anchor = e, Ce(this, Tr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      oe
    ), r = Tl();
    if (t && !A(this, Cn).has(e) && !A(this, qt).has(e))
      if (r) {
        var a = document.createDocumentFragment(), s = wn();
        a.append(s), A(this, qt).set(e, {
          effect: jt(() => t(s)),
          fragment: a
        });
      } else
        A(this, Cn).set(
          e,
          jt(() => t(this.anchor))
        );
    if (A(this, hn).set(i, e), r) {
      for (const [u, o] of A(this, Cn))
        u === e ? i.unskip_effect(o) : i.skip_effect(o);
      for (const [u, o] of A(this, qt))
        u === e ? i.unskip_effect(o.effect) : i.skip_effect(o.effect);
      i.oncommit(A(this, Lr)), i.ondiscard(A(this, $r));
    } else
      A(this, Lr).call(this, i);
  }
}
hn = new WeakMap(), Cn = new WeakMap(), qt = new WeakMap(), xi = new WeakMap(), Tr = new WeakMap(), Lr = new WeakMap(), $r = new WeakMap();
function Se(n, e, ...t) {
  var i = new sa(n);
  rr(() => {
    const r = e() ?? null;
    i.ensure(r, r && ((a) => r(a, ...t)));
  }, Wn);
}
function _t(n) {
  ot === null && Ka(), Pe(() => {
    const e = li(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function oi(n) {
  ot === null && Ka(), _t(() => () => li(n));
}
function de(n, e, t = !1) {
  var i = new sa(n), r = t ? Wn : 0;
  function a(s, u) {
    i.ensure(s, u);
  }
  rr(() => {
    var s = !1;
    e((u, o = 0) => {
      s = !0, a(o, u);
    }), s || a(-1, null);
  }, r);
}
function fa(n, e) {
  return e;
}
function zu(n, e, t) {
  for (var i = [], r = e.length, a, s = e.length, u = 0; u < r; u++) {
    let v = e[u];
    Li(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ba(n, ea(a.done)), f.delete(a), f.size === 0 && (n.outrogroups = null);
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
      gu(c), c.append(d), n.items.clear();
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
      a.f |= xn;
      const s = document.createDocumentFragment();
      is(a, s);
    } else
      xt(e[r], t);
  }
}
var Ts;
function pr(n, e, t, i, r, a = null) {
  var s = n, u = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      n
    );
    s = d.appendChild(wn());
  }
  var c = null, v = /* @__PURE__ */ ml(() => {
    var x = t();
    return za(x) ? x : x == null ? [] : ea(x);
  }), f, p = /* @__PURE__ */ new Map(), h = !0;
  function m(x) {
    O.effect.f & Yt || (O.pending.delete(x), O.fallback = c, Xu(O, f, s, e, i), c !== null && (f.length === 0 ? c.f & xn ? (c.f ^= xn, mr(c, null, s)) : ns(c) : Li(c, () => {
      c = null;
    })));
  }
  function g(x) {
    O.pending.delete(x);
  }
  var C = rr(() => {
    f = /** @type {V[]} */
    l(v);
    for (var x = f.length, S = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      oe
    ), L = Tl(), D = 0; D < x; D += 1) {
      var b = f[D], T = i(b, D), V = h ? null : u.get(T);
      V ? (V.v && $i(V.v, b), V.i && $i(V.i, D), L && w.unskip_effect(V.e)) : (V = Wu(
        u,
        h ? s : Ts ?? (Ts = wn()),
        b,
        T,
        D,
        r,
        e,
        t
      ), h || (V.e.f |= xn), u.set(T, V)), S.add(T);
    }
    if (x === 0 && a && !c && (h ? c = jt(() => a(s)) : (c = jt(() => a(Ts ?? (Ts = wn()))), c.f |= xn)), x > S.size && _o(), !h)
      if (p.set(w, S), L) {
        for (const [ne, P] of u)
          S.has(ne) || w.skip_effect(P.e);
        w.oncommit(m), w.ondiscard(g);
      } else
        m(w);
    l(v);
  }), O = { effect: C, items: u, pending: p, outrogroups: null, fallback: c };
  h = !1;
}
function cr(n) {
  for (; n !== null && !(n.f & gn); )
    n = n.next;
  return n;
}
function Xu(n, e, t, i, r) {
  var V, ne, P, B, Re, K, k, U, ee;
  var a = (i & 8) !== 0, s = e.length, u = n.items, o = cr(n.effect.first), d, c = null, v, f = [], p = [], h, m, g, C;
  if (a)
    for (C = 0; C < s; C += 1)
      h = e[C], m = r(h, C), g = /** @type {EachItem} */
      u.get(m).e, g.f & xn || ((ne = (V = g.nodes) == null ? void 0 : V.a) == null || ne.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(g));
  for (C = 0; C < s; C += 1) {
    if (h = e[C], m = r(h, C), g = /** @type {EachItem} */
    u.get(m).e, n.outrogroups !== null)
      for (const ue of n.outrogroups)
        ue.pending.delete(g), ue.done.delete(g);
    if (g.f & Rt && (ns(g), a && ((B = (P = g.nodes) == null ? void 0 : P.a) == null || B.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(g))), g.f & xn)
      if (g.f ^= xn, g === o)
        mr(g, null, t);
      else {
        var O = c ? c.next : o;
        g === n.effect.last && (n.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Jn(n, c, g), Jn(n, g, O), mr(g, O, t), c = g, f = [], p = [], o = cr(c.next);
        continue;
      }
    if (g !== o) {
      if (d !== void 0 && d.has(g)) {
        if (f.length < p.length) {
          var x = p[0], S;
          c = x.prev;
          var w = f[0], L = f[f.length - 1];
          for (S = 0; S < f.length; S += 1)
            mr(f[S], x, t);
          for (S = 0; S < p.length; S += 1)
            d.delete(p[S]);
          Jn(n, w.prev, L.next), Jn(n, c, w), Jn(n, L, x), o = x, c = L, C -= 1, f = [], p = [];
        } else
          d.delete(g), mr(g, o, t), Jn(n, g.prev, g.next), Jn(n, g, c === null ? n.effect.first : c.next), Jn(n, c, g), c = g;
        continue;
      }
      for (f = [], p = []; o !== null && o !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), p.push(o), o = cr(o.next);
      if (o === null)
        continue;
    }
    g.f & xn || f.push(g), c = g, o = cr(g.next);
  }
  if (n.outrogroups !== null) {
    for (const ue of n.outrogroups)
      ue.pending.size === 0 && (Ba(n, ea(ue.done)), (Re = n.outrogroups) == null || Re.delete(ue));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var D = [];
    if (d !== void 0)
      for (g of d)
        g.f & Rt || D.push(g);
    for (; o !== null; )
      !(o.f & Rt) && o !== n.fallback && D.push(o), o = cr(o.next);
    var b = D.length;
    if (b > 0) {
      var T = i & 4 && s === 0 ? t : null;
      if (a) {
        for (C = 0; C < b; C += 1)
          (k = (K = D[C].nodes) == null ? void 0 : K.a) == null || k.measure();
        for (C = 0; C < b; C += 1)
          (ee = (U = D[C].nodes) == null ? void 0 : U.a) == null || ee.fix();
      }
      zu(n, D, T);
    }
  }
  a && Xn(() => {
    var ue, N;
    if (v !== void 0)
      for (g of v)
        (N = (ue = g.nodes) == null ? void 0 : ue.a) == null || N.apply();
  });
}
function Wu(n, e, t, i, r, a, s, u) {
  var o = s & 1 ? s & 16 ? _i(t) : /* @__PURE__ */ yl(t, !1, !1) : null, d = s & 2 ? _i(r) : null;
  return {
    v: o,
    i: d,
    e: jt(() => (a(e, o ?? t, d ?? r, u), () => {
      n.delete(i);
    }))
  };
}
function mr(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, a = e && !(e.f & xn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wr(i)
      );
      if (a.before(i), i === r)
        return;
      i = s;
    }
}
function Jn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function ss(n, e, t) {
  var i = new sa(n);
  rr(() => {
    var r = e() ?? null;
    i.ensure(r, r && ((a) => t(a, r)));
  }, Wn);
}
function Ls(n, e, t, i, r, a) {
  var s = null, u = (
    /** @type {TemplateNode} */
    n
  ), o = new sa(u, !1);
  rr(() => {
    const d = e() || null;
    var c = d === "svg" ? Eo : void 0;
    if (d === null) {
      o.ensure(null, null);
      return;
    }
    return o.ensure(d, (v) => {
      if (d) {
        if (s = Ll(d, c), nr(s, s), i) {
          var f = s.appendChild(wn());
          i(s, f);
        }
        De.nodes.end = s, v.before(s);
      }
    }), () => {
    };
  }, Wn), Mr(() => {
  });
}
function Ze(n, e, t) {
  Or(() => {
    var i = li(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      aa(() => {
        var s = t();
        Mu(s), r && qa(a, s) && (a = s, i.update(s));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Ku(n, e) {
  var t = void 0, i;
  Ml(() => {
    t !== (t = e()) && (i && (xt(i), i = null), t && (i = jt(() => {
      Or(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Xl(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (e = 0; e < r; e++) n[e] && (t = Xl(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function qu() {
  for (var n, e, t = 0, i = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (e = Xl(n)) && (i && (i += " "), i += e);
  return i;
}
function Wl(n) {
  return typeof n == "object" ? qu(n) : n ?? "";
}
const ws = [...` 	
\r\f \v\uFEFF`];
function Yu(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r of Object.keys(t))
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, s = 0; (s = i.indexOf(r, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || ws.includes(i[s - 1])) && (u === i.length || ws.includes(i[u])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(u + 1) : s = u;
        }
  }
  return i === "" ? null : i;
}
function Ms(n, e = !1) {
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
function Qu(n, e) {
  if (e) {
    var t = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, o = [];
      i && o.push(...Object.keys(i).map(ha)), r && o.push(...Object.keys(r).map(ha));
      var d = 0, c = -1;
      const m = n.length;
      for (var v = 0; v < m; v++) {
        var f = n[v];
        if (u ? f === "/" && n[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = v;
          else if (f === ";" || v === m - 1) {
            if (c !== -1) {
              var p = ha(n.substring(d, c).trim());
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
    return i && (t += Ms(i)), r && (t += Ms(r, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function zn(n, e, t, i, r, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = Yu(t, i, a);
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
function Kl(n, e, t, i) {
  var r = n.__style;
  if (r !== e) {
    var a = Qu(e, i);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else i && (Array.isArray(i) ? (va(n, t == null ? void 0 : t[0], i[0]), va(n, t == null ? void 0 : t[1], i[1], "important")) : va(n, t, i));
  return i;
}
function Ua(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!za(e))
      return zo();
    for (var i of n.options)
      i.selected = e.includes(Os(i));
    return;
  }
  for (i of n.options) {
    var r = Os(i);
    if (pu(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Zu(n) {
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
function Os(n) {
  return "__value" in n ? n.__value : n.value;
}
const fr = Symbol("class"), hr = Symbol("style"), ql = Symbol("is custom element"), Yl = Symbol("is html"), Ju = el ? "option" : "OPTION", $u = el ? "select" : "SELECT";
function ed(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Mn(n, e, t, i) {
  var r = Ql(n);
  r[e] !== (r[e] = t) && (e === "loading" && (n[Do] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Zl(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function td(n, e, t, i, r = !1, a = !1) {
  var s = Ql(n), u = s[ql], o = !s[Yl], d = e || {}, c = n.nodeName === Ju;
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Wl(t.class) : t[fr] && (t.class = null), t[hr] && (t.style ?? (t.style = null));
  var f = Zl(n);
  for (const x in t) {
    let S = t[x];
    if (c && x === "value" && S == null) {
      n.value = n.__value = "", d[x] = S;
      continue;
    }
    if (x === "class") {
      var p = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      zn(n, p, S, i, e == null ? void 0 : e[fr], t[fr]), d[x] = S, d[fr] = t[fr];
      continue;
    }
    if (x === "style") {
      Kl(n, S, e == null ? void 0 : e[hr], t[hr]), d[x] = S, d[hr] = t[hr];
      continue;
    }
    var h = d[x];
    if (!(S === h && !(S === void 0 && n.hasAttribute(x)))) {
      d[x] = S;
      var m = x[0] + x[1];
      if (m !== "$$")
        if (m === "on") {
          const w = {}, L = "$$" + x;
          let D = x.slice(2);
          var g = Fu(D);
          if (Pu(D) && (D = D.slice(0, -7), w.capture = !0), !g && h) {
            if (S != null) continue;
            n.removeEventListener(D, d[L], w), d[L] = null;
          }
          if (g)
            vn(D, n, S), as([D]);
          else if (S != null) {
            let b = function(T) {
              d[x].call(this, T);
            };
            d[L] = rs(D, n, b, w);
          }
        } else if (x === "style")
          Mn(n, x, S);
        else if (x === "autofocus")
          Iu(
            /** @type {HTMLElement} */
            n,
            !!S
          );
        else if (!u && (x === "__value" || x === "value" && S != null))
          n.value = n.__value = S;
        else if (x === "selected" && c)
          ed(
            /** @type {HTMLOptionElement} */
            n,
            S
          );
        else {
          var C = x;
          o || (C = Uu(C));
          var O = C === "defaultValue" || C === "defaultChecked";
          if (S == null && !u && !O)
            if (s[x] = null, C === "value" || C === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                n
              );
              const L = e === void 0;
              if (C === "value") {
                let D = w.defaultValue;
                w.removeAttribute(C), w.defaultValue = D, w.value = w.__value = L ? D : null;
              } else {
                let D = w.defaultChecked;
                w.removeAttribute(C), w.defaultChecked = D, w.checked = L ? D : !1;
              }
            } else
              n.removeAttribute(x);
          else O || f.includes(C) && (u || typeof S != "string") ? (n[C] = S, C in s && (s[C] = ht)) : typeof S != "function" && Mn(n, C, S);
        }
    }
  }
  return d;
}
function lt(n, e, t = [], i = [], r = [], a, s = !1, u = !1) {
  vl(r, t, i, (o) => {
    var d = void 0, c = {}, v = n.nodeName === $u, f = !1;
    if (Ml(() => {
      var h = e(...o.map(l)), m = td(
        n,
        d,
        h,
        a,
        s,
        u
      );
      f && v && "value" in h && Ua(
        /** @type {HTMLSelectElement} */
        n,
        h.value
      );
      for (let C of Object.getOwnPropertySymbols(c))
        h[C] || xt(c[C]);
      for (let C of Object.getOwnPropertySymbols(h)) {
        var g = h[C];
        C.description === Co && (!d || g !== d[C]) && (c[C] && xt(c[C]), c[C] = jt(() => Ku(n, () => g))), m[C] = g;
      }
      d = m;
    }), v) {
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
        ), Zu(p);
      });
    }
    f = !0;
  });
}
function Ql(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [ql]: n.nodeName.includes("-"),
      [Yl]: n.namespaceURI === Ys
    })
  );
}
var Ds = /* @__PURE__ */ new Map();
function Zl(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ds.get(e);
  if (t) return t;
  Ds.set(e, t = []);
  for (var i, r = n, a = Element.prototype; a !== r; ) {
    i = Zs(r);
    for (var s in i)
      i[s].set && t.push(s);
    r = Xa(r);
  }
  return t;
}
function nd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  yu(n, "input", async (r) => {
    var a = r ? n.defaultValue : n.value;
    if (a = pa(n) ? ma(a) : a, t(a), oe !== null && i.add(oe), await Nl(), a !== (a = e())) {
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
  li(e) == null && n.value && (t(pa(n) ? ma(n.value) : n.value), oe !== null && i.add(oe)), aa(() => {
    var r = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        oe
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
function Rs(n, e) {
  return n === e || (n == null ? void 0 : n[Ln]) === e;
}
function we(n = {}, e, t, i) {
  var r = (
    /** @type {ComponentContext} */
    ot.r
  ), a = (
    /** @type {Effect} */
    De
  );
  return Or(() => {
    var s, u;
    return aa(() => {
      s = u, u = [], li(() => {
        n !== t(...u) && (e(n, ...u), s && Rs(t(...s), n) && e(null, ...s));
      });
    }), () => {
      let o = a;
      for (; o !== r && o.parent !== null && o.parent.f & Ea; )
        o = o.parent;
      const d = () => {
        u && Rs(t(...u), n) && e(null, ...u);
      }, c = o.teardown;
      o.teardown = () => {
        d(), c == null || c();
      };
    };
  }), n;
}
const id = {
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
function gt(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    id
  );
}
const rd = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (dr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let r = n.props[i];
      dr(r) && (r = r());
      const a = ri(r, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (dr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = ri(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(n, e) {
    if (e === Ln || e === $s) return !1;
    for (let t of n.props)
      if (dr(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (dr(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function $e(...n) {
  return new Proxy({ props: n }, rd);
}
function y(n, e, t, i) {
  var O;
  var r = (t & 8) !== 0, a = (t & 16) !== 0, s = (
    /** @type {V} */
    i
  ), u = !0, o = () => (u && (u = !1, s = a ? li(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), s);
  let d;
  if (r) {
    var c = Ln in n || $s in n;
    d = ((O = ri(n, e)) == null ? void 0 : O.set) ?? (c && e in n ? (x) => n[e] = x : void 0);
  }
  var v, f = !1;
  r ? [v, f] = Jo(() => (
    /** @type {V} */
    n[e]
  )) : v = /** @type {V} */
  n[e], v === void 0 && i !== void 0 && (v = o(), d && (Uo(), d(v)));
  var p;
  if (p = () => {
    var x = (
      /** @type {V} */
      n[e]
    );
    return x === void 0 ? o() : (u = !0, x);
  }, !(t & 4))
    return p;
  if (d) {
    var h = n.$$legacy;
    return (
      /** @type {() => V} */
      function(x, S) {
        return arguments.length > 0 ? ((!S || h || f) && d(S ? p() : x), x) : p();
      }
    );
  }
  var m = !1, g = (t & 1 ? ia : ml)(() => (m = !1, p()));
  r && l(g);
  var C = (
    /** @type {Effect} */
    De
  );
  return (
    /** @type {() => V} */
    function(x, S) {
      if (arguments.length > 0) {
        const w = S ? l(g) : r ? Oe(x) : x;
        return G(g, w), m = !0, s !== void 0 && (s = w), x;
      }
      return Kn && m || C.f & Yt ? g.v : l(g);
    }
  );
}
const ad = "5";
var qs;
typeof window < "u" && ((qs = window.__svelte ?? (window.__svelte = {})).v ?? (qs.v = /* @__PURE__ */ new Set())).add(ad);
var Na = function(n, e) {
  return Na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Na(n, e);
};
function In(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Na(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, We.apply(this, arguments);
};
function mn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _s(n, e) {
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
function sd(n, e, t) {
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
var bn = (
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
function ld(n) {
  return n === void 0 && (n = window), od(n) ? { passive: !0 } : !1;
}
function od(n) {
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
const Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ld
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
function ud(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if ($l(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function $l(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
const ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: ud,
  matches: $l
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
var dd = {
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
var cd = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dd;
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
  }(bn)
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
var fd = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vi;
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
      this.adapter.removeClass(vi.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(vi.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(vi.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(vi.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(vi.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(vi.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(bn)
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
var hd = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ps = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, vd = {
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
var pd = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ps;
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
      t > 0 && (t += Ps.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(bn)
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
var md = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, gd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ks = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Fr;
function Id(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = Fr;
  if (typeof Fr == "boolean" && !e)
    return Fr;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || s, e || (Fr = i), i;
}
function bd(n, e, t) {
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
var Fs = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Bs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Br = [], yd = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return md;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ks;
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
          for (var a = mn(Fs), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = mn(Bs), s = a.next(); !s.done; s = a.next()) {
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
        for (var r = mn(Fs), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = mn(Bs), a = r.next(); !a.done; a = r.next()) {
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
            var u = t !== void 0 && Br.length > 0 && Br.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Br.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Br = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
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
      r ? a = bd(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, ks.FG_DEACTIVATION_MS));
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
        var r = We({}, i);
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
  }(bn)
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
}, Ad = {
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
}, Us = {
  LABEL_SCALE: 0.75
}, Ed = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Cd = [
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
var Ns = ["mousedown", "touchstart"], Hs = ["click", "keydown"], Sd = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return Ad;
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
        return Us;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Cd.indexOf(t) >= 0;
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
        for (var s = mn(Ns), u = s.next(); !u.done; u = s.next()) {
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
        for (var d = mn(Hs), c = d.next(); !c.done; c = d.next()) {
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
        for (var s = mn(Ns), u = s.next(); !u.done; u = s.next()) {
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
        for (var d = mn(Hs), c = d.next(); !c.done; c = d.next()) {
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
        return Ed.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Us.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(ga.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(ga.ARIA_DESCRIBEDBY);
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
  }(bn)
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
var Vs = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, xd = {
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
var js = ["click", "keydown"], Td = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Vs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xd;
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
        for (var r = mn(js), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = mn(js), a = r.next(); !a.done; a = r.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Vs.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(bn)
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
var Ae = {
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
}, Pt = /* @__PURE__ */ new Set();
Pt.add(Ae.BACKSPACE);
Pt.add(Ae.ENTER);
Pt.add(Ae.SPACEBAR);
Pt.add(Ae.PAGE_UP);
Pt.add(Ae.PAGE_DOWN);
Pt.add(Ae.END);
Pt.add(Ae.HOME);
Pt.add(Ae.ARROW_LEFT);
Pt.add(Ae.ARROW_UP);
Pt.add(Ae.ARROW_RIGHT);
Pt.add(Ae.ARROW_DOWN);
Pt.add(Ae.DELETE);
Pt.add(Ae.ESCAPE);
Pt.add(Ae.TAB);
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
}, kt = /* @__PURE__ */ new Map();
kt.set(Gt.BACKSPACE, Ae.BACKSPACE);
kt.set(Gt.ENTER, Ae.ENTER);
kt.set(Gt.SPACEBAR, Ae.SPACEBAR);
kt.set(Gt.PAGE_UP, Ae.PAGE_UP);
kt.set(Gt.PAGE_DOWN, Ae.PAGE_DOWN);
kt.set(Gt.END, Ae.END);
kt.set(Gt.HOME, Ae.HOME);
kt.set(Gt.ARROW_LEFT, Ae.ARROW_LEFT);
kt.set(Gt.ARROW_UP, Ae.ARROW_UP);
kt.set(Gt.ARROW_RIGHT, Ae.ARROW_RIGHT);
kt.set(Gt.ARROW_DOWN, Ae.ARROW_DOWN);
kt.set(Gt.DELETE, Ae.DELETE);
kt.set(Gt.ESCAPE, Ae.ESCAPE);
kt.set(Gt.TAB, Ae.TAB);
var ui = /* @__PURE__ */ new Set();
ui.add(Ae.PAGE_UP);
ui.add(Ae.PAGE_DOWN);
ui.add(Ae.END);
ui.add(Ae.HOME);
ui.add(Ae.ARROW_LEFT);
ui.add(Ae.ARROW_UP);
ui.add(Ae.ARROW_RIGHT);
ui.add(Ae.ARROW_DOWN);
function st(n) {
  var e = n.key;
  if (Pt.has(e))
    return e;
  var t = kt.get(n.keyCode);
  return t || Ae.UNKNOWN;
}
function et(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ct(n, e, t, i = { bubbles: !0 }) {
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
    const a = t[r], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
function vt(n, e) {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(i, Ou(e, t, i, r));
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
function ie(n, e) {
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
var Ld = /* @__PURE__ */ _u("<svg><!></svg>");
function os(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "tag", 3, "div"), r = /* @__PURE__ */ gt(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ae(() => [
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
    var v = (h) => {
      var m = Ld();
      lt(m, () => ({ ...r }));
      var g = J(m);
      Se(g, () => e.children ?? Ee), we(m, (C) => s = C, () => s), Ze(m, (C, O) => ie == null ? void 0 : ie(C, O), t), M(h, m);
    }, f = (h) => {
      var m = ve(), g = re(m);
      Ls(g, i, !1, (C, O) => {
        we(C, (x) => s = x, () => s), Ze(C, (x, S) => ie == null ? void 0 : ie(x, S), t), lt(C, () => ({ ...r }));
      }), M(h, m);
    }, p = (h) => {
      var m = ve(), g = re(m);
      Ls(g, i, !1, (C, O) => {
        we(C, (w) => s = w, () => s), Ze(C, (w, L) => ie == null ? void 0 : ie(w, L), t), lt(C, () => ({ ...r }));
        var x = ve(), S = re(x);
        Se(S, () => e.children ?? Ee), M(O, x);
      }), M(h, m);
    };
    de(c, (h) => {
      i() === "svg" ? h(v) : l(a) ? h(f, 1) : h(p, -1);
    });
  }
  return M(n, d), qe(o);
}
function Ur(n, e) {
  Ke(e, !0);
  const [t, i] = na(), r = xa(e.value);
  me(e.key, r), Pe(() => {
    Wr(r, e.value);
  }), oi(() => {
    r.set(void 0);
  });
  var a = ve(), s = re(a);
  Se(s, () => e.children ?? Ee), M(n, a), qe(), i();
}
const { applyPassive: Gs } = Jl, { matches: wd } = ls;
function Sn(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: a, active: s, rippleElement: u, eventTarget: o, activeTarget: d, addClass: c = (h) => n.classList.add(h), removeClass: v = (h) => n.classList.remove(h), addStyle: f = (h, m) => n.style.setProperty(h, m), initPromise: p = Promise.resolve() } = {}) {
  let h, m = new Rr(), g = Me("SMUI:addLayoutListener"), C, O = s, x = o, S = d;
  function w() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && O !== s && (O = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new yd({
      addClass: c,
      browserSupportsCssVars: () => Id(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (D) => n.contains(D),
      deregisterDocumentInteractionHandler: (D, b) => m.off(document.documentElement, D, b),
      deregisterInteractionHandler: (D, b) => m.off(o || n, D, b),
      deregisterResizeHandler: (D) => window.removeEventListener("resize", D),
      getWindowPageOffset: () => {
        var D, b;
        return {
          x: (D = window.pageXOffset) !== null && D !== void 0 ? D : window.scrollX,
          y: (b = window.pageYOffset) !== null && b !== void 0 ? b : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? wd(d || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (D, b) => {
        const T = Gs();
        m.on(document.documentElement, D, b, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (D, b) => {
        const T = Gs();
        m.on(o || n, D, b, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (D) => m.on(window, "resize", D),
      removeClass: v,
      updateCssVariable: f
    }), p.then(() => {
      h && (h.init(), h.setUnbounded(i));
    })) : h && !e && p.then(() => {
      h && (h.destroy(), h = void 0, m.clear());
    }), h && (x !== o || S !== d) && (x = o, S = d, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  w(), g && (C = g(L));
  function L() {
    h && h.layout();
  }
  return {
    update(D) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => n.classList.add(b), removeClass: (b) => n.classList.remove(b), addStyle: (b, T) => n.style.setProperty(b, T), initPromise: Promise.resolve() }, D)), w();
    },
    destroy() {
      h && (h.destroy(), h = void 0, m.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), C && C();
    }
  };
}
var Md = /* @__PURE__ */ se("<span><!></span>"), Od = /* @__PURE__ */ se("<label><!></label>");
function qr(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "style", 3, ""), a = y(e, "floatAbove", 15, !1), s = y(e, "required", 15, !1), u = y(e, "wrapped", 3, !1), o = /* @__PURE__ */ gt(e, [
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
  ]), d, c = /* @__PURE__ */ fe(void 0), v = new Rr(), f = Oe({}), p = Oe({}), h = Me("SMUI:generic:input:props") ?? {}, m = a();
  Pe(() => {
    l(c) && m !== a() && (m = a(), l(c).float(a()));
  });
  let g = s();
  Pe(() => {
    l(c) && g !== s() && (g = s(), l(c).setRequired(s()));
  });
  const C = Me("SMUI:floating-label:mount"), O = Me("SMUI:floating-label:unmount");
  _t(() => {
    G(
      c,
      new cd({
        addClass: x,
        removeClass: S,
        getWidth: () => {
          var z, te;
          const ee = ne(), ue = ee.cloneNode(!0);
          (z = ee.parentNode) == null || z.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const N = ue.scrollWidth;
          return (te = ee.parentNode) == null || te.removeChild(ue), N;
        },
        registerInteractionHandler: (ee, ue) => v.on(ne(), ee, ue),
        deregisterInteractionHandler: (ee, ue) => v.off(ne(), ee, ue)
      }),
      !0
    );
    const U = {
      get element() {
        return ne();
      },
      addStyle: w,
      removeStyle: L
    };
    return C && C(U), l(c).init(), () => {
      var ee;
      O && O(U), (ee = l(c)) == null || ee.destroy(), v.clear();
    };
  });
  function x(U) {
    f[U] || (f[U] = !0);
  }
  function S(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function w(U, ee) {
    p[U] != ee && (ee === "" || ee == null ? delete p[U] : p[U] = ee);
  }
  function L(U) {
    U in p && delete p[U];
  }
  function D(U) {
    var ee;
    (ee = l(c)) == null || ee.shake(U);
  }
  function b(U) {
    a(U);
  }
  function T(U) {
    s(U);
  }
  function V() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getWidth();
  }
  function ne() {
    return d;
  }
  var P = { shake: D, float: b, setRequired: T, getWidth: V, getElement: ne }, B = ve(), Re = re(B);
  {
    var K = (U) => {
      var ee = Md();
      lt(ee, (N, z) => ({ class: N, style: z, ...o }), [
        () => et({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(p).map(([N, z]) => `${N}: ${z};`).concat([r()]).join(" ")
      ]);
      var ue = J(ee);
      Se(ue, () => e.children ?? Ee), we(ee, (N) => d = N, () => d), Ze(ee, (N, z) => ie == null ? void 0 : ie(N, z), t), M(U, ee);
    }, k = (U) => {
      var ee = Od();
      lt(
        ee,
        (N, z) => ({
          class: N,
          style: z,
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
          () => Object.entries(p).map(([N, z]) => `${N}: ${z};`).concat([r()]).join(" ")
        ]
      );
      var ue = J(ee);
      Se(ue, () => e.children ?? Ee), we(ee, (N) => d = N, () => d), Ze(ee, (N, z) => ie == null ? void 0 : ie(N, z), t), M(U, ee);
    };
    de(Re, (U) => {
      u() ? U(K) : U(k, -1);
    });
  }
  return M(n, B), qe(P);
}
var Dd = /* @__PURE__ */ se("<div></div>");
function eo(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "style", 3, ""), a = y(e, "active", 3, !1), s = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = new Rr(), c = Oe({}), v = Oe({});
  _t(() => (G(
    o,
    new fd({
      addClass: p,
      removeClass: h,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (L, D) => d.on(x(), L, D),
      deregisterEventHandler: (L, D) => d.off(x(), L, D)
    }),
    !0
  ), l(o).init(), () => {
    var L;
    (L = l(o)) == null || L.destroy(), d.clear();
  }));
  function f(L) {
    return L in c ? c[L] : x().classList.contains(L);
  }
  function p(L) {
    c[L] || (c[L] = !0);
  }
  function h(L) {
    (!(L in c) || c[L]) && (c[L] = !1);
  }
  function m(L, D) {
    v[L] != D && (D === "" || D == null ? delete v[L] : v[L] = D);
  }
  function g() {
    var L;
    (L = l(o)) == null || L.activate();
  }
  function C() {
    var L;
    (L = l(o)) == null || L.deactivate();
  }
  function O(L) {
    var D;
    (D = l(o)) == null || D.setRippleCenter(L);
  }
  function x() {
    return u;
  }
  var S = { activate: g, deactivate: C, setRippleCenter: O, getElement: x }, w = Dd();
  return lt(w, (L, D) => ({ class: L, style: D, ...s }), [
    () => et({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [i()]: !0
    }),
    () => Object.entries(v).map(([L, D]) => `${L}: ${D};`).concat([r()]).join(" ")
  ]), we(w, (L) => u = L, () => u), Ze(w, (L, D) => ie == null ? void 0 : ie(L, D), t), M(n, w), qe(S);
}
var Rd = /* @__PURE__ */ se('<div class="mdc-notched-outline__notch"><!></div>'), _d = /* @__PURE__ */ se('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function to(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "notched", 3, !1), a = y(e, "noLabel", 3, !1), s = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = /* @__PURE__ */ fe(void 0), c = Oe({}), v = Oe({}), f;
  Pe(() => {
    l(d) !== f && (l(d) ? (l(d).addStyle("transition-duration", "0s"), p("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      l(d) && l(d).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = l(d));
  }), me("SMUI:floating-label:mount", (b) => {
    G(d, b, !0);
  }), me("SMUI:floating-label:unmount", () => {
    G(d, void 0);
  }), _t(() => (G(
    o,
    new pd({
      addClass: p,
      removeClass: h,
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
  function h(b) {
    (!(b in c) || c[b]) && (c[b] = !1);
  }
  function m(b, T) {
    v[b] != T && (T === "" || T == null ? delete v[b] : v[b] = T);
  }
  function g(b) {
    b in v && delete v[b];
  }
  function C(b) {
    var T;
    (T = l(o)) == null || T.notch(b);
  }
  function O() {
    var b;
    (b = l(o)) == null || b.closeNotch();
  }
  function x() {
    return u;
  }
  var S = { notch: C, closeNotch: O, getElement: x }, w = _d();
  lt(w, (b) => ({ class: b, ...s }), [
    () => et({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [i()]: !0
    })
  ]);
  var L = Y(J(w), 2);
  {
    var D = (b) => {
      var T = Rd(), V = J(T);
      Se(V, () => e.children ?? Ee), He((ne) => Kl(T, ne), [
        () => Object.entries(v).map(([ne, P]) => `${ne}: ${P};`).join(" ")
      ]), M(b, T);
    };
    de(L, (b) => {
      a() || b(D);
    });
  }
  return we(w, (b) => u = b, () => u), Ze(w, (b, T) => ie == null ? void 0 : ie(b, T), t), M(n, w), qe(S);
}
function us(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "component", 3, os), a = y(e, "tag", 3, "div"), s = y(e, "_smuiClass", 3, ""), u = y(e, "_smuiClassMap", 23, () => ({})), o = y(e, "_smuiContexts", 19, () => ({})), d = y(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ gt(e, [
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
  Object.entries(u()).forEach(([C, O]) => {
    const x = Me(O);
    x && "subscribe" in x && f.push(x.subscribe((S) => {
      u()[C] = S;
    }));
  });
  for (let C in o())
    o().hasOwnProperty(C) && me(C, o()[C]);
  oi(() => {
    for (const C of f)
      C();
  });
  function p() {
    return v.getElement();
  }
  var h = { getElement: p }, m = ve(), g = re(m);
  {
    let C = /* @__PURE__ */ ae(() => et({
      [s()]: !0,
      ...u(),
      [i()]: !0
    }));
    ss(g, r, (O, x) => {
      we(
        x(O, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return l(C);
            }
          },
          d,
          () => c,
          {
            children: (S, w) => {
              var L = ve(), D = re(L);
              Se(D, () => e.children ?? Ee), M(S, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => v = S,
        () => v
      );
    });
  }
  return M(n, m), qe(h);
}
function Pd(n, e) {
  Ke(e, !0);
  let t = /* @__PURE__ */ gt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return we(
    us(n, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var o = ve(), d = re(o);
        Se(d, () => e.children ?? Ee), M(s, o);
      },
      $$slots: { default: !0 }
    })),
    (s) => i = s,
    () => i
  ), qe(a);
}
function kd(n, e) {
  Ke(e, !0);
  let t = /* @__PURE__ */ gt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return we(
    us(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = re(o);
          Se(d, () => e.children ?? Ee), M(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), qe(a);
}
function Fd(n, e) {
  Ke(e, !0);
  let t = /* @__PURE__ */ gt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return we(
    us(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = re(o);
          Se(d, () => e.children ?? Ee), M(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), qe(a);
}
var Bd = /* @__PURE__ */ se("<input/>");
function Ud(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "type", 3, "text"), a = y(e, "placeholder", 3, " "), s = y(e, "value", 15), u = y(e, "files", 15, null), o = y(e, "dirty", 15, !1), d = y(e, "invalid", 15, !1), c = y(e, "updateInvalid", 3, !0), v = y(e, "initialInvalid", 3, !1), f = y(e, "emptyValueNull", 19, () => s() === null), p = y(e, "emptyValueUndefined", 19, () => s() === void 0), h = /* @__PURE__ */ gt(e, [
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
  ]), m, g = Oe({}), C = Oe({});
  Pe(() => {
    r() === "file" ? delete C.value : C.value = s() == null ? "" : s();
  }), _t(() => {
    c() && v() && d(V().matches(":invalid"));
  });
  function O(K) {
    return K === "" ? Number.NaN : +K;
  }
  function x(K) {
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
        s(O(K.currentTarget.value));
        break;
      default:
        s(K.currentTarget.value);
        break;
    }
  }
  function S(K) {
    (r() === "file" || r() === "range") && x(K), o(!0), c() && d(V().matches(":invalid"));
  }
  function w(K) {
    return K in g ? g[K] ?? null : V().getAttribute(K);
  }
  function L(K, k) {
    g[K] !== k && (g[K] = k);
  }
  function D(K) {
    (!(K in g) || g[K] != null) && (g[K] = void 0);
  }
  function b() {
    V().focus();
  }
  function T() {
    V().blur();
  }
  function V() {
    return m;
  }
  var ne = { getAttr: w, addAttr: L, removeAttr: D, focus: b, blur: T, getElement: V }, P = Bd(), B = (K) => {
    var k;
    r() !== "file" && x(K), (k = e.oninput) == null || k.call(e, K);
  }, Re = (K) => {
    var k;
    S(K), (k = e.onchange) == null || k.call(e, K);
  };
  return lt(
    P,
    (K) => ({
      class: K,
      type: r(),
      placeholder: a(),
      ...C,
      ...g,
      ...h,
      oninput: B,
      onchange: Re
    }),
    [
      () => et({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), we(P, (K) => m = K, () => m), Ze(P, (K, k) => ie == null ? void 0 : ie(K, k), t), M(n, P), qe(ne);
}
var Nd = /* @__PURE__ */ se("<textarea></textarea>");
function Hd(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "style", 3, ""), a = y(e, "value", 15, ""), s = y(e, "dirty", 15, !1), u = y(e, "invalid", 15, !1), o = y(e, "updateInvalid", 3, !0), d = y(e, "initialInvalid", 3, !1), c = y(e, "resizable", 3, !0), v = /* @__PURE__ */ gt(e, [
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
  _t(() => {
    o() && d() && u(S().matches(":invalid"));
  });
  function h() {
    s(!0), o() && u(S().matches(":invalid"));
  }
  function m(b) {
    return b in p ? p[b] ?? null : S().getAttribute(b);
  }
  function g(b, T) {
    p[b] !== T && (p[b] = T);
  }
  function C(b) {
    (!(b in p) || p[b] != null) && (p[b] = void 0);
  }
  function O() {
    S().focus();
  }
  function x() {
    S().blur();
  }
  function S() {
    return f;
  }
  var w = { getAttr: m, addAttr: g, removeAttr: C, focus: O, blur: x, getElement: S }, L = Nd(), D = (b) => {
    var T;
    h(), (T = e.onchange) == null || T.call(e, b);
  };
  return lt(
    L,
    (b) => ({
      class: b,
      style: `${c() ? "" : "resize: none; "}${r()}`,
      ...p,
      ...v,
      onchange: D
    }),
    [
      () => et({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), we(L, (b) => f = b, () => f), Ze(L, (b, T) => ie == null ? void 0 : ie(b, T), t), Or(() => nd(L, a)), M(n, L), qe(w);
}
var Vd = /* @__PURE__ */ se('<span class="mdc-text-field__ripple"></span>'), jd = /* @__PURE__ */ se("<!> <!>", 1), Gd = /* @__PURE__ */ se("<span><!> <!></span>"), zd = /* @__PURE__ */ se("<!> <!> <!>", 1), Xd = /* @__PURE__ */ se("<label><!> <!> <!> <!> <!> <!> <!></label>"), Wd = /* @__PURE__ */ se("<div><!> <!> <!> <!> <!></div>"), Kd = /* @__PURE__ */ se("<!> <!>", 1);
function qd(n, e) {
  Ke(e, !0);
  const { applyPassive: t } = Jl;
  let i = () => {
  };
  function r(R) {
    return R === i;
  }
  let a = y(e, "use", 19, () => []), s = y(e, "class", 3, ""), u = y(e, "style", 3, ""), o = y(e, "ripple", 3, !0), d = y(e, "disabled", 3, !1), c = y(e, "required", 3, !1), v = y(e, "textarea", 3, !1), f = y(e, "variant", 19, () => v() ? "outlined" : "standard"), p = y(e, "noLabel", 3, !1), h = y(e, "type", 3, "text"), m = y(e, "value", 15), g = y(e, "files", 15, i), C = y(e, "invalid", 15, i), O = y(e, "updateInvalid", 19, () => r(C())), x = y(e, "initialInvalid", 3, !1), S = y(e, "dirty", 15, !1), w = y(e, "validateOnValueChange", 19, O), L = y(e, "useNativeValidation", 19, O), D = y(e, "withLeadingIcon", 3, i), b = y(e, "withTrailingIcon", 3, i), T = y(e, "input", 7), V = y(e, "floatingLabel", 7), ne = y(e, "lineRipple", 7), P = y(e, "notchedOutline", 7), B = /* @__PURE__ */ gt(e, [
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
  const Re = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !r(g());
  r(g()) && g(null), r(C()) && C(!1);
  let K, k = /* @__PURE__ */ fe(void 0), U = new Rr(), ee = Oe({}), ue = Oe({}), N = /* @__PURE__ */ fe(void 0), z = /* @__PURE__ */ fe(!1), te = /* @__PURE__ */ fe(Oe(x())), Ve = Me("SMUI:addLayoutListener"), Fe, ke, Ft = new Promise((R) => ke = R), j, le, I, _;
  const q = /* @__PURE__ */ ae(() => T() && T().getElement());
  Pe(() => {
    (S() || l(te) || !O()) && l(k) && l(k).isValid() !== !C() && (O() ? C(!l(k).isValid()) : l(k).setValid(!C()));
  }), Pe(() => {
    l(k) && l(k).getValidateOnValueChange() !== w() && l(k).setValidateOnValueChange(r(w()) ? !1 : w());
  }), Pe(() => {
    l(k) && l(k).setUseNativeValidation(r(L()) ? !0 : L());
  }), Pe(() => {
    l(k) && l(k).setDisabled(d());
  });
  let ge = m();
  Pe(() => {
    if (l(k) && Re && ge !== m()) {
      ge = m();
      const R = `${m() == null ? "" : m()}`;
      l(k).getValue() !== R && l(k).setValue(R);
    }
  }), Ve && (Fe = Ve(he)), me("SMUI:textfield:leading-icon:mount", (R) => {
    j = R;
  }), me("SMUI:textfield:leading-icon:unmount", () => {
    j = void 0;
  }), me("SMUI:textfield:trailing-icon:mount", (R) => {
    le = R;
  }), me("SMUI:textfield:trailing-icon:unmount", () => {
    le = void 0;
  }), me("SMUI:textfield:helper-text:id", (R) => {
    G(N, R, !0);
  }), me("SMUI:textfield:helper-text:mount", (R) => {
    I = R;
  }), me("SMUI:textfield:helper-text:unmount", () => {
    G(N, void 0), I = void 0;
  }), me("SMUI:textfield:character-counter:mount", (R) => {
    _ = R;
  }), me("SMUI:textfield:character-counter:unmount", () => {
    _ = void 0;
  }), _t(() => {
    var R;
    if (G(
      k,
      new Sd(
        {
          // getRootAdapterMethods_
          addClass: H,
          removeClass: Q,
          hasClass: X,
          registerTextFieldInteractionHandler: (F, be) => U.on(Be(), F, be),
          deregisterTextFieldInteractionHandler: (F, be) => U.off(Be(), F, be),
          registerValidationAttributeChangeHandler: (F) => {
            const be = (Tt) => Tt.map((Bt) => Bt.attributeName).filter((Bt) => Bt), Ye = new MutationObserver((Tt) => {
              L() && F(be(Tt));
            }), at = { attributes: !0 };
            return T() && Ye.observe(T().getElement(), at), Ye;
          },
          deregisterValidationAttributeChangeHandler: (F) => {
            F.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var F;
            return ((F = T()) == null ? void 0 : F.getElement()) ?? null;
          },
          setInputAttr: (F, be) => {
            var Ye;
            (Ye = T()) == null || Ye.addAttr(F, be);
          },
          removeInputAttr: (F) => {
            var be;
            (be = T()) == null || be.removeAttr(F);
          },
          isFocused: () => {
            var F;
            return document.activeElement === ((F = T()) == null ? void 0 : F.getElement());
          },
          registerInputInteractionHandler: (F, be) => {
            var at;
            const Ye = (at = T()) == null ? void 0 : at.getElement();
            if (Ye) {
              const Tt = t();
              U.on(Ye, F, be, typeof Tt == "boolean" ? { capture: Tt } : Tt);
            }
          },
          deregisterInputInteractionHandler: (F, be) => {
            var at;
            const Ye = (at = T()) == null ? void 0 : at.getElement();
            Ye && U.off(Ye, F, be);
          },
          // getLabelAdapterMethods_
          floatLabel: (F) => V() && V().float(F),
          getLabelWidth: () => V() ? V().getWidth() : 0,
          hasLabel: () => !!V(),
          shakeLabel: (F) => V() && V().shake(F),
          setLabelRequired: (F) => V() && V().setRequired(F),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => ne() && ne().activate(),
          deactivateLineRipple: () => ne() && ne().deactivate(),
          setLineRippleTransformOrigin: (F) => ne() && ne().setRippleCenter(F),
          // getOutlineAdapterMethods_
          closeOutline: () => P() && P().closeNotch(),
          hasOutline: () => !!P(),
          notchOutline: (F) => P() && P().notch(F)
        },
        {
          get helperText() {
            return I;
          },
          get characterCounter() {
            return _;
          },
          get leadingIcon() {
            return j;
          },
          get trailingIcon() {
            return le;
          }
        }
      ),
      !0
    ), Re) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (R = l(k)) == null || R.init();
    } else
      Nl().then(() => {
        var F;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (F = l(k)) == null || F.init();
      });
    return ke(), () => {
      var F;
      (F = l(k)) == null || F.destroy(), U.clear();
    };
  }), oi(() => {
    Fe && Fe();
  });
  function X(R) {
    return R in ee ? ee[R] ?? null : Be().classList.contains(R);
  }
  function H(R) {
    ee[R] || (ee[R] = !0);
  }
  function Q(R) {
    (!(R in ee) || ee[R]) && (ee[R] = !1);
  }
  function ce(R, F) {
    ue[R] != F && (F === "" || F == null ? delete ue[R] : ue[R] = F);
  }
  function Ie() {
    var R;
    (R = T()) == null || R.focus();
  }
  function pe() {
    var R;
    (R = T()) == null || R.blur();
  }
  function he() {
    if (l(k)) {
      const R = l(k).shouldFloat;
      l(k).notchOutline(R);
    }
  }
  function Be() {
    return K;
  }
  var It = { focus: Ie, blur: pe, layout: he, getElement: Be }, bt = Kd(), di = re(bt);
  {
    var qn = (R) => {
      var F = Xd();
      lt(F, (_e, je, Ne) => ({ class: _e, style: je, for: void 0, ...Ne }), [
        () => et({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--label-floating": l(z) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": r(D()) ? e.leadingIcon : D(),
          "mdc-text-field--with-trailing-icon": r(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": C(),
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([_e, je]) => `${_e}: ${je};`).concat([u()]).join(" "),
        () => Ha(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var be = J(F);
      {
        var Ye = (_e) => {
          var je = jd(), Ne = re(je);
          {
            var wt = (dt) => {
              var yt = Vd();
              M(dt, yt);
            };
            de(Ne, (dt) => {
              f() === "filled" && dt(wt);
            });
          }
          var un = Y(Ne, 2);
          {
            var Ge = (dt) => {
              {
                let yt = /* @__PURE__ */ ae(() => l(z) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ue = /* @__PURE__ */ ae(() => vt(B, "label$"));
                we(
                  qr(dt, $e(
                    {
                      get floatAbove() {
                        return l(yt);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => l(Ue),
                    {
                      children: (At, _n) => {
                        var Qt = ve(), ct = re(Qt);
                        {
                          var Mt = (zt) => {
                          }, Zt = (zt) => {
                            var Jt = pt();
                            He(() => Te(Jt, e.label)), M(zt, Jt);
                          }, dn = (zt) => {
                            var Jt = ve(), Nt = re(Jt);
                            Se(Nt, () => e.label), M(zt, Jt);
                          };
                          de(ct, (zt) => {
                            e.label == null ? zt(Mt) : typeof e.label == "string" ? zt(Zt, 1) : zt(dn, -1);
                          });
                        }
                        M(At, Qt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (At) => V(At),
                  () => V()
                );
              }
            };
            de(un, (dt) => {
              !p() && e.label != null && dt(Ge);
            });
          }
          M(_e, je);
        };
        de(be, (_e) => {
          !v() && f() !== "outlined" && _e(Ye);
        });
      }
      var at = Y(be, 2);
      {
        var Tt = (_e) => {
          {
            let je = /* @__PURE__ */ ae(() => p() || e.label == null), Ne = /* @__PURE__ */ ae(() => vt(B, "outline$"));
            we(
              to(_e, $e(
                {
                  get noLabel() {
                    return l(je);
                  }
                },
                () => l(Ne),
                {
                  children: (wt, un) => {
                    var Ge = ve(), dt = re(Ge);
                    {
                      var yt = (Ue) => {
                        {
                          let At = /* @__PURE__ */ ae(() => l(z) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), _n = /* @__PURE__ */ ae(() => vt(B, "label$"));
                          we(
                            qr(Ue, $e(
                              {
                                get floatAbove() {
                                  return l(At);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => l(_n),
                              {
                                children: (Qt, ct) => {
                                  var Mt = ve(), Zt = re(Mt);
                                  {
                                    var dn = (Nt) => {
                                    }, zt = (Nt) => {
                                      var ci = pt();
                                      He(() => Te(ci, e.label)), M(Nt, ci);
                                    }, Jt = (Nt) => {
                                      var ci = ve(), lr = re(ci);
                                      Se(lr, () => e.label), M(Nt, ci);
                                    };
                                    de(Zt, (Nt) => {
                                      e.label == null ? Nt(dn) : typeof e.label == "string" ? Nt(zt, 1) : Nt(Jt, -1);
                                    });
                                  }
                                  M(Qt, Mt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Qt) => V(Qt),
                            () => V()
                          );
                        }
                      };
                      de(dt, (Ue) => {
                        !p() && e.label != null && Ue(yt);
                      });
                    }
                    M(wt, Ge);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (wt) => P(wt),
              () => P()
            );
          }
        };
        de(at, (_e) => {
          (v() || f() === "outlined") && _e(Tt);
        });
      }
      var Bt = Y(at, 2);
      Ur(Bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (_e, je) => {
          var Ne = ve(), wt = re(Ne);
          Se(wt, () => e.leadingIcon ?? Ee), M(_e, Ne);
        },
        $$slots: { default: !0 }
      });
      var ki = Y(Bt, 2);
      Se(ki, () => e.children ?? Ee);
      var Je = Y(ki, 2);
      {
        var Lt = (_e) => {
          var je = Gd(), Ne = J(je);
          {
            let un = /* @__PURE__ */ ae(() => vt(B, "input$"));
            we(
              Hd(Ne, $e(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return O();
                  },
                  get initialInvalid() {
                    return l(te);
                  },
                  get "aria-controls"() {
                    return l(N);
                  },
                  get "aria-describedby"() {
                    return l(N);
                  }
                },
                () => l(un),
                {
                  onblur: (Ge) => {
                    var dt;
                    G(z, !1), G(te, !0), Ct(Be(), "blur", Ge), (dt = e.input$onblur) == null || dt.call(e, Ge);
                  },
                  onfocus: (Ge) => {
                    var dt;
                    G(z, !0), Ct(Be(), "focus", Ge), (dt = e.input$onfocus) == null || dt.call(e, Ge);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ge) {
                    m(Ge);
                  },
                  get dirty() {
                    return S();
                  },
                  set dirty(Ge) {
                    S(Ge);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(Ge) {
                    C(Ge);
                  }
                }
              )),
              (Ge) => T(Ge),
              () => T()
            );
          }
          var wt = Y(Ne, 2);
          Se(wt, () => e.internalCounter ?? Ee), He((un) => zn(je, 1, un), [
            () => Wl(et({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), M(_e, je);
        }, Ut = (_e) => {
          var je = zd(), Ne = re(je);
          {
            var wt = (yt) => {
              var Ue = ve(), At = re(Ue);
              {
                var _n = (ct) => {
                  kd(ct, {
                    children: (Mt, Zt) => {
                      var dn = pt();
                      He(() => Te(dn, e.prefix)), M(Mt, dn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Qt = (ct) => {
                  var Mt = ve(), Zt = re(Mt);
                  Se(Zt, () => e.prefix ?? Ee), M(ct, Mt);
                };
                de(At, (ct) => {
                  typeof e.prefix == "string" ? ct(_n) : ct(Qt, -1);
                });
              }
              M(yt, Ue);
            };
            de(Ne, (yt) => {
              e.prefix != null && yt(wt);
            });
          }
          var un = Y(Ne, 2);
          {
            let yt = /* @__PURE__ */ ae(() => vt(B, "input$"));
            we(
              Ud(un, $e(
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
                    return O();
                  },
                  get initialInvalid() {
                    return l(te);
                  },
                  get "aria-controls"() {
                    return l(N);
                  },
                  get "aria-describedby"() {
                    return l(N);
                  }
                },
                () => p() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => l(yt),
                {
                  onblur: (Ue) => {
                    var At;
                    G(z, !1), G(te, !0), Ct(Be(), "blur", Ue), (At = e.input$onblur) == null || At.call(e, Ue);
                  },
                  onfocus: (Ue) => {
                    var At;
                    G(z, !0), Ct(Be(), "focus", Ue), (At = e.input$onfocus) == null || At.call(e, Ue);
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
                    return S();
                  },
                  set dirty(Ue) {
                    S(Ue);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(Ue) {
                    C(Ue);
                  }
                }
              )),
              (Ue) => T(Ue),
              () => T()
            );
          }
          var Ge = Y(un, 2);
          {
            var dt = (yt) => {
              var Ue = ve(), At = re(Ue);
              {
                var _n = (ct) => {
                  Fd(ct, {
                    children: (Mt, Zt) => {
                      var dn = pt();
                      He(() => Te(dn, e.suffix)), M(Mt, dn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Qt = (ct) => {
                  var Mt = ve(), Zt = re(Mt);
                  Se(Zt, () => e.suffix ?? Ee), M(ct, Mt);
                };
                de(At, (ct) => {
                  typeof e.suffix == "string" ? ct(_n) : ct(Qt, -1);
                });
              }
              M(yt, Ue);
            };
            de(Ge, (yt) => {
              e.suffix != null && yt(dt);
            });
          }
          M(_e, je);
        };
        de(Je, (_e) => {
          v() && typeof m() == "string" ? _e(Lt) : _e(Ut, -1);
        });
      }
      var Yn = Y(Je, 2);
      Ur(Yn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (_e, je) => {
          var Ne = ve(), wt = re(Ne);
          Se(wt, () => e.trailingIcon ?? Ee), M(_e, Ne);
        },
        $$slots: { default: !0 }
      });
      var _r = Y(Yn, 2);
      {
        var Qn = (_e) => {
          {
            let je = /* @__PURE__ */ ae(() => vt(B, "ripple$"));
            we(eo(_e, $e(() => l(je))), (Ne) => ne(Ne), () => ne());
          }
        };
        de(_r, (_e) => {
          !v() && f() !== "outlined" && o() && _e(Qn);
        });
      }
      we(F, (_e) => K = _e, () => K), Ze(F, (_e, je) => Sn == null ? void 0 : Sn(_e, je), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: H,
        removeClass: Q,
        addStyle: ce,
        eventTarget: l(q),
        activeTarget: l(q),
        initPromise: Ft
      })), Ze(F, (_e, je) => ie == null ? void 0 : ie(_e, je), a), M(R, F);
    }, sr = (R) => {
      var F = Wd();
      lt(F, (Je, Lt, Ut) => ({ class: Je, style: Lt, ...Ut }), [
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
          "mdc-text-field--invalid": C(),
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([Je, Lt]) => `${Je}: ${Lt};`).concat([u()]).join(" "),
        () => Ha(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var be = J(F);
      {
        var Ye = (Je) => {
          var Lt = ve(), Ut = re(Lt);
          Se(Ut, () => e.label ?? Ee), M(Je, Lt);
        };
        de(be, (Je) => {
          typeof e.label != "string" && Je(Ye);
        });
      }
      var at = Y(be, 2);
      Ur(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Je, Lt) => {
          var Ut = ve(), Yn = re(Ut);
          Se(Yn, () => e.leadingIcon ?? Ee), M(Je, Ut);
        },
        $$slots: { default: !0 }
      });
      var Tt = Y(at, 2);
      Se(Tt, () => e.children ?? Ee);
      var Bt = Y(Tt, 2);
      Ur(Bt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Je, Lt) => {
          var Ut = ve(), Yn = re(Ut);
          Se(Yn, () => e.trailingIcon ?? Ee), M(Je, Ut);
        },
        $$slots: { default: !0 }
      });
      var ki = Y(Bt, 2);
      Se(ki, () => e.line ?? Ee), we(F, (Je) => K = Je, () => K), Ze(F, (Je, Lt) => Sn == null ? void 0 : Sn(Je, Lt), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: H,
        removeClass: Q,
        addStyle: ce
      })), Ze(F, (Je, Lt) => ie == null ? void 0 : ie(Je, Lt), a), M(R, F);
    };
    de(di, (R) => {
      Re ? R(qn) : R(sr, -1);
    });
  }
  var Z = Y(di, 2);
  {
    var $ = (R) => {
      {
        let F = /* @__PURE__ */ ae(() => vt(B, "helperLine$"));
        Pd(R, $e(() => l(F), {
          children: (be, Ye) => {
            var at = ve(), Tt = re(at);
            Se(Tt, () => e.helper ?? Ee), M(be, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    de(Z, (R) => {
      e.helper && R($);
    });
  }
  return M(n, bt), qe(It);
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
var Yd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Qd = {
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
}, vr = {
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
}, it;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(it || (it = {}));
var Mi;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Mi || (Mi = {}));
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
var $n, Bn, xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
$n = {}, $n["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", $n["" + xe.LIST_ITEM_CLASS] = "mdc-list-item", $n["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", $n["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", $n["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", $n["" + xe.ROOT] = "mdc-list";
var Ui = (Bn = {}, Bn["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Bn["" + xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Bn["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Bn["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Bn["" + xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Bn["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Bn["" + xe.ROOT] = "mdc-deprecated-list", Bn), ei = {
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
    .` + Ui[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ui[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[xe.LIST_ITEM_CLASS] + ` a,
    .` + Ui[xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ui[xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, nt = {
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
var Zd = ["input", "button", "textarea", "select"], en = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Zd.indexOf(t) === -1 && n.preventDefault();
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
function Jd() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function $d(n, e) {
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
function Va(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    io(e);
  }, nt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = ec(r, a, u, e) : o = tc(r, u, e), o !== -1 && !s && i(o), o;
}
function ec(n, e, t, i) {
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
function tc(n, e, t) {
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
function no(n) {
  return n.typeaheadBuffer.length > 0;
}
function io(n) {
  n.typeaheadBuffer = "";
}
function zs(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, o = st(t) === "ArrowLeft", d = st(t) === "ArrowUp", c = st(t) === "ArrowRight", v = st(t) === "ArrowDown", f = st(t) === "Home", p = st(t) === "End", h = st(t) === "Enter", m = st(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || d || c || v || f || p || h)
    return -1;
  var g = !m && t.key.length === 1;
  if (g) {
    en(t);
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(C, e);
  }
  if (!m)
    return -1;
  i && en(t);
  var O = i && no(e);
  if (O) {
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(C, e);
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
function nc(n) {
  return n instanceof Array;
}
var ic = ["Alt", "Control", "Meta", "Shift"];
function Xs(n) {
  var e = new Set(n ? ic.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var rc = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = nt.UNSET_INDEX, i.focusedItemIndex = nt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Jd(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ei;
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
        return nt;
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
      if (t !== nt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, xe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = nt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
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
      return this.hasTypeahead && no(this.typeaheadState);
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
      var a = this, s, u = st(t) === "ArrowLeft", o = st(t) === "ArrowUp", d = st(t) === "ArrowRight", c = st(t) === "ArrowDown", v = st(t) === "Home", f = st(t) === "End", p = st(t) === "Enter", h = st(t) === "Spacebar", m = this.isVertical && c || !this.isVertical && d, g = this.isVertical && o || !this.isVertical && u, C = t.key === "A" || t.key === "a", O = Xs(t);
      if (this.adapter.isRootFocused()) {
        if ((g || f) && O([]))
          t.preventDefault(), this.focusLastElement();
        else if ((m || v) && O([]))
          t.preventDefault(), this.focusFirstElement();
        else if (g && O(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var x = this.focusLastElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (m && O(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var x = this.focusFirstElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        }
        if (this.hasTypeahead) {
          var S = {
            event: t,
            focusItemAtIndex: function(D) {
              a.focusItemAtIndex(D);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(D) {
              return a.isIndexDisabled(D);
            }
          };
          zs(S, this.typeaheadState);
        }
        return;
      }
      var w = this.adapter.getFocusedElementIndex();
      if (!(w === -1 && (w = r, w < 0))) {
        if (m && O([]))
          en(t), this.focusNextElement(w);
        else if (g && O([]))
          en(t), this.focusPrevElement(w);
        else if (m && O(["Shift"]) && this.isCheckboxList) {
          en(t);
          var x = this.focusNextElement(w);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (g && O(["Shift"]) && this.isCheckboxList) {
          en(t);
          var x = this.focusPrevElement(w);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (v && O([]))
          en(t), this.focusFirstElement();
        else if (f && O([]))
          en(t), this.focusLastElement();
        else if (v && O(["Control", "Shift"]) && this.isCheckboxList) {
          if (en(t), this.isIndexDisabled(w))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, w, w);
        } else if (f && O(["Control", "Shift"]) && this.isCheckboxList) {
          if (en(t), this.isIndexDisabled(w))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(w, this.adapter.getListItemCount() - 1, w);
        } else if (C && O(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === nt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((p || h) && O([])) {
          if (i) {
            var L = t.target;
            if (L && L.tagName === "A" && p || (en(t), this.isIndexDisabled(w)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(w, !1), this.adapter.notifyAction(w));
          }
        } else if ((p || h) && O(["Shift"]) && this.isCheckboxList) {
          var L = t.target;
          if (L && L.tagName === "A" && p || (en(t), this.isIndexDisabled(w)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : w, w, w), this.adapter.notifyAction(w));
        }
        if (this.hasTypeahead) {
          var S = {
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
          zs(S, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var a, s = Xs(r);
      t !== nt.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ei.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ei.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== nt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== nt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === nt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, ei.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? ei.ARIA_CURRENT : ei.ARIA_SELECTED;
      if (this.selectedIndex !== nt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== nt.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? ei.ARIA_SELECTED : ei.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== nt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === nt.UNSET_INDEX ? [] : r) : null, s = this.getSelectionAttribute(), u = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var d = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== d && u.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, s, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === nt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(r)), u = _s([t, i].sort(), 2), o = u[0], d = u[1], c = this.getSelectionAttribute(), v = [], f = o; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var p = a.has(f);
          s !== p && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, c, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = sd([], _s(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === nt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== nt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== nt.UNSET_INDEX ? this.selectedIndex : nc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === nt.UNSET_INDEX;
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
      var u = this.selectedIndex === nt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Va(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return $d(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      io(this.typeaheadState);
    }, e;
  }(bn)
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
var ro = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Mi.TOP_START, i.originCorner = Mi.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Mi;
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
      this.originCorner = this.originCorner ^ it.RIGHT;
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
        }, vr.TRANSITION_OPEN_DURATION);
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
          }, vr.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, it.BOTTOM) ? "bottom" : "top", s = this.hasBit(i, it.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), d = this.measurements, c = d.anchorSize, v = d.surfaceSize, f = (t = {}, t[s] = u, t[a] = o, t);
      c.width / v.width > vr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, it.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, s = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, it.BOTTOM), d, c;
      o ? (d = r.top - u + this.anchorMargin.bottom, c = r.bottom - u - this.anchorMargin.bottom) : (d = r.top - u + this.anchorMargin.top, c = r.bottom - u + a.height - this.anchorMargin.top);
      var v = c - s.height > 0;
      !v && d > c + this.openBottomBias && (t = this.setBit(t, it.BOTTOM));
      var f = this.adapter.isRtl(), p = this.hasBit(this.anchorCorner, it.FLIP_RTL), h = this.hasBit(this.anchorCorner, it.RIGHT) || this.hasBit(t, it.RIGHT), m = !1;
      f && p ? m = !h : m = h;
      var g, C;
      m ? (g = r.left + a.width + this.anchorMargin.right, C = r.right - this.anchorMargin.right) : (g = r.left + this.anchorMargin.left, C = r.right + a.width - this.anchorMargin.left);
      var O = g - s.width > 0, x = C - s.width > 0, S = this.hasBit(t, it.FLIP_RTL) && this.hasBit(t, it.RIGHT);
      return x && S && f || !O && S ? t = this.unsetBit(t, it.RIGHT) : (O && m && f || O && !m && h || !x && g >= C) && (t = this.setBit(t, it.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(t, it.BOTTOM), s = this.hasBit(this.anchorCorner, it.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, s || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, it.RIGHT), a = this.hasBit(this.anchorCorner, it.RIGHT);
      if (r) {
        var s = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, it.BOTTOM), a = this.hasBit(this.anchorCorner, it.BOTTOM), s = 0;
      return r ? s = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, o = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var v = mn(c), f = v.next(); !f.done; f = v.next()) {
          var p = f.value, h = t[p] || 0;
          if (this.isHorizontallyCenteredOnViewport && (p === "left" || p === "right")) {
            t[p] = (d.width - o.width) / 2;
            continue;
          }
          h += u[p], this.isFixedPosition || (p === "top" ? h += s.y : p === "bottom" ? h -= s.y : p === "left" ? h += s.x : h -= s.x), t[p] = h;
        }
      } catch (m) {
        i = { error: m };
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
      }, vr.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(bn)
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
}, ac = {
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
var sc = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return ac;
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
          var s = i.adapter.getElementIndex(t);
          s >= 0 && i.adapter.isSelectableItemAtIndex(s) && i.setSelectedIndex(s);
        }, ro.numbers.TRANSITION_CLOSE_DURATION);
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
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(bn)
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
var Qe = {
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
}, pi = {
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
var lc = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = pi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pi;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === pi.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== pi.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(Qe.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Qe.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(Qe.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(Qe.FOCUSED), r = t || i, a = this.adapter.hasClass(Qe.REQUIRED);
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
      this.adapter.removeClass(Qe.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(Qe.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(Qe.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(Qe.FOCUSED))) {
        var i = st(t) === Ae.ENTER, r = st(t) === Ae.SPACEBAR, a = st(t) === Ae.ARROW_UP, s = st(t) === Ae.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, d = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !i && !r && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(Qe.FOCUSED);
        if (t) {
          var r = pi.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(Qe.INVALID), this.adapter.removeMenuClass(Qe.MENU_INVALID)) : (this.adapter.addClass(Qe.INVALID), this.adapter.addMenuClass(Qe.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(Qe.REQUIRED) && !this.adapter.hasClass(Qe.DISABLED) ? this.getSelectedIndex() !== pi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(Qe.REQUIRED) : this.adapter.removeClass(Qe.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Mi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Qe.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Qe.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(Qe.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(Qe.REQUIRED);
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
      }, pi.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(bn)
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
var mi = {
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
var oc = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mi;
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
      return this.adapter.getAttr(mi.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), t ? this.adapter.removeAttr(mi.ROLE) : this.adapter.setAttr(mi.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(mi.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(mi.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(mi.ARIA_HIDDEN, "true");
    }, e;
  }(bn)
), uc = /* @__PURE__ */ se("<div><!></div>");
function dc(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "style", 3, ""), a = y(e, "static", 3, !1), s = y(e, "anchor", 3, !0), u = y(e, "fixed", 3, !1), o = y(e, "open", 31, () => Oe(a())), d = y(e, "managed", 3, !1), c = y(e, "fullWidth", 3, !1), v = y(e, "quickOpen", 3, !1), f = y(e, "anchorElement", 15), p = y(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = y(e, "maxHeight", 3, 0), m = y(e, "horizontallyCenteredOnViewport", 3, !1), g = y(e, "openBottomBias", 3, 0), C = y(e, "neverRestoreFocus", 3, !1), O = /* @__PURE__ */ gt(e, [
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
  ]), x, S = /* @__PURE__ */ fe(void 0), w = Oe({}), L = Oe({}), D = /* @__PURE__ */ fe(void 0);
  me("SMUI:list:role", "menu"), me("SMUI:list:item:role", "menuitem"), Pe(() => {
    var j, le;
    x && s() && !((j = x.parentElement) != null && j.classList.contains("mdc-menu-surface--anchor")) && ((le = x.parentElement) == null || le.classList.add("mdc-menu-surface--anchor"), f(x.parentElement ?? void 0));
  }), Pe(() => {
    l(S) && l(S).isOpen() !== o() && (o() ? l(S).open() : l(S).close());
  }), Pe(() => {
    l(S) && l(S).setQuickOpen(v());
  }), Pe(() => {
    l(S) && l(S).setFixedPosition(u());
  }), Pe(() => {
    l(S) && l(S).setMaxHeight(h());
  }), Pe(() => {
    l(S) && l(S).setIsHorizontallyCenteredOnViewport(m());
  });
  const b = Mi;
  Pe(() => {
    l(S) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? l(S).setAnchorCorner(b[e.anchorCorner]) : l(S).setAnchorCorner(e.anchorCorner));
  }), Pe(() => {
    l(S) && l(S).setAnchorMargin(p());
  }), Pe(() => {
    l(S) && l(S).setOpenBottomBias(g());
  });
  const T = Me("SMUI:menu-surface:mount"), V = Me("SMUI:menu-surface:unmount");
  _t(() => {
    G(
      S,
      new ro({
        addClass: P,
        removeClass: B,
        hasClass: ne,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || o(a()), o() || Ct(te(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || o(a()), o() || Ct(te(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || o(!0), o() && Ct(te(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          o() || Ct(te(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (le) => te().contains(le),
        isRtl: () => getComputedStyle(te()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (le) => {
          L["transform-origin"] = le;
        },
        isFocused: () => document.activeElement === te(),
        saveFocus: () => {
          G(D, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !C() && (!x || te().contains(document.activeElement)) && l(D) && document.contains(l(D)) && "focus" in l(D) && l(D).focus();
        },
        getInnerDimensions: () => ({
          width: te().offsetWidth,
          height: te().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (le) => {
          L.left = "left" in le ? `${le.left}px` : "", L.right = "right" in le ? `${le.right}px` : "", L.top = "top" in le ? `${le.top}px` : "", L.bottom = "bottom" in le ? `${le.bottom}px` : "";
        },
        setMaxHeight: (le) => {
          L["max-height"] = le;
        }
      }),
      !0
    );
    const j = {
      get open() {
        return o();
      },
      set open(le) {
        o(le);
      },
      closeProgrammatic: Re
    };
    return T && T(j), l(S).init(), () => {
      var I, _;
      V && V(j);
      const le = l(S).isHoistedElement;
      (I = l(S)) == null || I.destroy(), le && ((_ = te().parentNode) == null || _.removeChild(te()));
    };
  }), oi(() => {
    var j;
    s() && te() && ((j = te().parentElement) == null || j.classList.remove("mdc-menu-surface--anchor"));
  });
  function ne(j) {
    return j in w ? w[j] : te().classList.contains(j);
  }
  function P(j) {
    w[j] || (w[j] = !0);
  }
  function B(j) {
    (!(j in w) || w[j]) && (w[j] = !1);
  }
  function Re(j) {
    var le;
    (le = l(S)) == null || le.close(j), o(!1);
  }
  function K(j) {
    l(S) && o() && !d() && l(S).handleBodyClick(j);
  }
  function k() {
    return o();
  }
  function U(j) {
    o(j);
  }
  function ee(j, le) {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).setAbsolutePosition(j, le);
  }
  function ue(j) {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).setIsHoisted(j);
  }
  function N() {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).isFixed();
  }
  function z() {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).flipCornerHorizontally();
  }
  function te() {
    return x;
  }
  var Ve = {
    isOpen: k,
    setOpen: U,
    setAbsolutePosition: ee,
    setIsHoisted: ue,
    isFixed: N,
    flipCornerHorizontally: z,
    getElement: te
  }, Fe = uc();
  Gl("click", El.body, K, !0);
  var ke = (j) => {
    var le;
    l(S) && !d() && l(S).handleKeydown(j), (le = e.onkeydown) == null || le.call(e, j);
  };
  lt(
    Fe,
    (j, le) => ({
      class: j,
      style: le,
      role: "dialog",
      ...O,
      onkeydown: ke
    }),
    [
      () => et({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...w,
        [i()]: !0
      }),
      () => Object.entries(L).map(([j, le]) => `${j}: ${le};`).concat([r()]).join(" ")
    ]
  );
  var Ft = J(Fe);
  return Se(Ft, () => e.children ?? Ee), we(Fe, (j) => x = j, () => x), Ze(Fe, (j, le) => ie == null ? void 0 : ie(j, le), t), M(n, Fe), qe(Ve);
}
function ba(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function cc(n, e) {
  Ke(e, !0);
  const { closest: t } = ls;
  let i = y(e, "use", 19, () => []), r = y(e, "class", 3, ""), a = y(e, "open", 15, !1), s = y(e, "anchorElement", 15), u = y(e, "managed", 3, !1), o = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ fe(void 0), v = /* @__PURE__ */ fe(void 0), f = /* @__PURE__ */ fe(void 0);
  me("SMUI:menu-surface:mount", (b) => {
    l(v) || G(v, b, !0);
  });
  const p = Me("SMUI:list:mount");
  me("SMUI:list:mount", (b) => {
    l(f) || G(f, b, !0), p && p(b);
  });
  const h = Me("SMUI:menu:mount"), m = Me("SMUI:menu:unmount");
  _t(() => (G(
    c,
    new sc({
      addClassToElementAtIndex: (b, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).addClassForElementIndex(b, T);
      },
      removeClassFromElementAtIndex: (b, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeClassForElementIndex(b, T);
      },
      addAttributeToElementAtIndex: (b, T, V) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).setAttributeForElementIndex(b, T, V);
      },
      removeAttributeFromElementAtIndex: (b, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeAttributeForElementIndex(b, T);
      },
      getAttributeFromElementAtIndex: (b, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getAttributeFromElementIndex(b, T);
      },
      elementContainsClass: (b, T) => b.classList.contains(T),
      closeSurface: (b) => {
        var T;
        u() || ((T = l(v)) == null || T.closeProgrammatic(b), Ct(L(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getOrderedList().map((T) => T.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        Ct(L(), "SMUIMenuSelected", {
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
        return !!t(l(f).getOrderedList()[b].element, `.${Gi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        const T = l(f).getOrderedList(), V = t(T[b].element, `.${Gi.MENU_SELECTION_GROUP}`), ne = V == null ? void 0 : V.querySelector(`.${Gi.MENU_SELECTED_LIST_ITEM}`);
        return ne ? T.map((P) => P.element).indexOf(ne) : -1;
      }
    }),
    !0
  ), h && h(l(c)), l(c).init(), () => {
    var b;
    m && l(c) && m(l(c)), (b = l(c)) == null || b.destroy();
  }));
  function g(b) {
    l(c) && l(c).handleKeydown(b);
  }
  function C() {
    return a();
  }
  function O(b) {
    a(b);
  }
  function x(b) {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    l(c).setDefaultFocusState(b);
  }
  function S() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getSelectedIndex();
  }
  function w() {
    return d;
  }
  function L() {
    return d.getElement();
  }
  var D = {
    isOpen: C,
    setOpen: O,
    setDefaultFocusState: x,
    getSelectedIndex: S,
    getMenuSurface: w,
    getElement: L
  };
  {
    let b = /* @__PURE__ */ ae(() => et({ "mdc-menu": !0, [r()]: !0 }));
    we(
      dc(n, $e(
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
          onkeydown: (T) => {
            var V;
            g(T), (V = e.onkeydown) == null || V.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var V;
            l(c) && l(c).handleMenuSurfaceOpened(), (V = e.onSMUIMenuSurfaceOpened) == null || V.call(e, T);
          },
          onSMUIListAction: (T) => {
            var V;
            l(c) && l(f) && l(c).handleItemAction(l(f).getOrderedList()[T.detail.index].element), (V = e.onSMUIListAction) == null || V.call(e, T);
          },
          get open() {
            return a();
          },
          set open(T) {
            a(T);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(T) {
            s(T);
          },
          children: (T, V) => {
            var ne = ve(), P = re(ne);
            Se(P, () => e.children ?? Ee), M(T, ne);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => d = T,
      () => d
    );
  }
  return qe(D);
}
function fc(n, e) {
  Ke(e, !0);
  const { closest: t, matches: i } = ls;
  let r = Me("SMUI:list:nav"), a = y(e, "use", 19, () => []), s = y(e, "class", 3, ""), u = y(e, "nonInteractive", 3, !1), o = y(e, "dense", 3, !1), d = y(e, "textualList", 3, !1), c = y(e, "avatarList", 3, !1), v = y(e, "iconList", 3, !1), f = y(e, "imageList", 3, !1), p = y(e, "thumbnailList", 3, !1), h = y(e, "videoList", 3, !1), m = y(e, "twoLine", 3, !1), g = y(e, "threeLine", 3, !1), C = y(e, "vertical", 3, !0), O = y(e, "wrapFocus", 19, () => Me("SMUI:list:wrapFocus") ?? !1), x = y(e, "singleSelection", 3, !1), S = y(e, "disabledItemsFocusable", 3, !1), w = y(e, "selectedIndex", 31, () => -1), L = y(e, "radioList", 3, !1), D = y(e, "checkList", 3, !1), b = y(e, "hasTypeahead", 3, !1), T = y(e, "component", 3, os), V = y(e, "tag", 3, r ? "nav" : "ul"), ne = /* @__PURE__ */ gt(e, [
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
  ]), P, B = /* @__PURE__ */ fe(void 0), Re = [], K = Me("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let U = Me("SMUI:dialog:selection"), ee = Me("SMUI:addLayoutListener"), ue;
  me("SMUI:list:nonInteractive", u()), me("SMUI:separator:context", "list"), K || (x() ? (K = "listbox", me("SMUI:list:item:role", "option")) : L() ? (K = "radiogroup", me("SMUI:list:item:role", "radio")) : D() ? (K = "group", me("SMUI:list:item:role", "checkbox")) : (K = "list", me("SMUI:list:item:role", void 0))), Pe(() => {
    l(B) && l(B).setVerticalOrientation(C());
  }), Pe(() => {
    l(B) && l(B).setWrapFocus(O());
  }), Pe(() => {
    l(B) && l(B).setHasTypeahead(b());
  }), Pe(() => {
    l(B) && l(B).setSingleSelection(x());
  }), Pe(() => {
    l(B) && l(B).setDisabledItemsFocusable(S());
  }), Pe(() => {
    l(B) && x() && he() !== w() && l(B).setSelectedIndex(w());
  }), ee && (ue = ee(ce)), me("SMUI:list:item:mount", (Z) => {
    Re.push(Z), k.set(Z.element, Z), x() && Z.selected && w(Q(Z.element));
  }), me("SMUI:list:item:unmount", (Z) => {
    const $ = (Z && Re.findIndex((R) => R === Z)) ?? -1;
    $ !== -1 && (Re.splice($, 1), k.delete(Z.element));
  });
  const N = Me("SMUI:list:mount"), z = Me("SMUI:list:unmount");
  _t(() => {
    G(
      B,
      new rc({
        addClassForElementIndex: I,
        focusItemAtIndex: It,
        getAttributeForElementIndex: ($, R) => {
          var F;
          return ((F = j()[$]) == null ? void 0 : F.getAttr(R)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? j().map(($) => $.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Re.length,
        getPrimaryTextAtIndex: H,
        hasCheckboxAtIndex: ($) => {
          var R;
          return ((R = j()[$]) == null ? void 0 : R.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: ($) => {
          var R;
          return ((R = j()[$]) == null ? void 0 : R.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: ($) => {
          const R = j()[$];
          return ((R == null ? void 0 : R.hasCheckbox) && R.checked) ?? !1;
        },
        isFocusInsideList: () => P != null && bt() !== document.activeElement && bt().contains(document.activeElement),
        isRootFocused: () => P != null && document.activeElement === bt(),
        listItemAtIndexHasClass: le,
        notifyAction: ($) => {
          w($), P != null && Ct(bt(), "SMUIListAction", { index: $ });
        },
        notifySelectionChange: ($) => {
          P != null && Ct(bt(), "SMUIListSelectionChange", { changedIndices: $ });
        },
        removeClassForElementIndex: _,
        setAttributeForElementIndex: q,
        setCheckedCheckboxOrRadioAtIndex: ($, R) => {
          j()[$].checked = R;
        },
        setTabIndexForListItemChildren: ($, R) => {
          const F = j()[$];
          Array.prototype.forEach.call(F.element.querySelectorAll("button:not(:disabled), a"), (Ye) => {
            Ye.setAttribute("tabindex", R);
          });
        }
      }),
      !0
    );
    const Z = {
      get element() {
        return bt();
      },
      get items() {
        return Re;
      },
      get typeaheadInProgress() {
        if (!l(B))
          throw new Error("Instance is undefined.");
        return l(B).isTypeaheadInProgress();
      },
      typeaheadMatchItem($, R) {
        if (!l(B))
          throw new Error("Instance is undefined.");
        return l(B).typeaheadMatchItem(
          $,
          R,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: j,
      focusItemAtIndex: It,
      addClassForElementIndex: I,
      removeClassForElementIndex: _,
      setAttributeForElementIndex: q,
      removeAttributeForElementIndex: ge,
      getAttributeFromElementIndex: X,
      getPrimaryTextAtIndex: H
    };
    return N && N(Z), l(B).init(), l(B).layout(), () => {
      var $;
      z && z(Z), ($ = l(B)) == null || $.destroy();
    };
  }), oi(() => {
    ue && ue();
  });
  function te(Z) {
    l(B) && Z.target && l(B).handleKeydown(Z, Z.target.classList.contains("mdc-deprecated-list-item"), Q(Z.target));
  }
  function Ve(Z) {
    l(B) && Z.target && l(B).handleFocusIn(Q(Z.target));
  }
  function Fe(Z) {
    l(B) && Z.target && l(B).handleFocusOut(Q(Z.target));
  }
  function ke(Z) {
    l(B) && Z.target && l(B).handleClick(Q(Z.target), !i(Z.target, 'input[type="checkbox"], input[type="radio"]'), Z);
  }
  function Ft(Z) {
    if (L() || D()) {
      const $ = Q(Z.target);
      if ($ !== -1) {
        const R = j()[$];
        R && (L() && !R.checked || D()) && (i(Z.detail.target, 'input[type="checkbox"], input[type="radio"]') || (R.checked = !R.checked), R.activateRipple(), window.requestAnimationFrame(() => {
          R.deactivateRipple();
        }));
      }
    }
  }
  function j() {
    return P == null ? [] : [...bt().children].map((Z) => k.get(Z)).filter((Z) => Z && Z._smui_list_item_accessor);
  }
  function le(Z, $) {
    const R = j()[Z];
    return (R && R.hasClass($)) ?? !1;
  }
  function I(Z, $) {
    const R = j()[Z];
    R && R.addClass($);
  }
  function _(Z, $) {
    const R = j()[Z];
    R && R.removeClass($);
  }
  function q(Z, $, R) {
    const F = j()[Z];
    F && F.addAttr($, R);
  }
  function ge(Z, $) {
    const R = j()[Z];
    R && R.removeAttr($);
  }
  function X(Z, $) {
    const R = j()[Z];
    return R ? R.getAttr($) : null;
  }
  function H(Z) {
    const $ = j()[Z];
    return ($ && $.getPrimaryText()) ?? "";
  }
  function Q(Z) {
    const $ = t(Z, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return $ && i($, ".mdc-deprecated-list-item") ? j().map((R) => R == null ? void 0 : R.element).indexOf($) : -1;
  }
  function ce() {
    if (!l(B))
      throw new Error("Instance is undefined.");
    return l(B).layout();
  }
  function Ie(Z, $) {
    if (!l(B))
      throw new Error("Instance is undefined.");
    return l(B).setEnabled(Z, $);
  }
  function pe() {
    if (!l(B))
      throw new Error("Instance is undefined.");
    return l(B).isTypeaheadInProgress();
  }
  function he() {
    if (!l(B))
      throw new Error("Instance is undefined.");
    return l(B).getSelectedIndex();
  }
  function Be() {
    if (!l(B))
      throw new Error("Instance is undefined.");
    return l(B).getFocusedItemIndex();
  }
  function It(Z) {
    const $ = j()[Z];
    $ && "focus" in $.element && $.element.focus();
  }
  function bt() {
    return P.getElement();
  }
  var di = {
    layout: ce,
    setEnabled: Ie,
    getTypeaheadInProgress: pe,
    getSelectedIndex: he,
    getFocusedItemIndex: Be,
    focusItemAtIndex: It,
    getElement: bt
  }, qn = ve(), sr = re(qn);
  {
    let Z = /* @__PURE__ */ ae(() => et({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": o(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": p(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": g() && !m(),
      [s()]: !0
    }));
    ss(sr, T, ($, R) => {
      we(
        R($, $e(
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
          () => ne,
          {
            onkeydown: (F) => {
              var be;
              te(F), (be = e.onkeydown) == null || be.call(e, F);
            },
            onfocusin: (F) => {
              var be;
              Ve(F), (be = e.onfocusin) == null || be.call(e, F);
            },
            onfocusout: (F) => {
              var be;
              Fe(F), (be = e.onfocusout) == null || be.call(e, F);
            },
            onclick: (F) => {
              var be;
              ke(F), (be = e.onclick) == null || be.call(e, F);
            },
            onSMUIAction: (F) => {
              var be;
              Ft(F), (be = e.onSMUIAction) == null || be.call(e, F);
            },
            children: (F, be) => {
              var Ye = ve(), at = re(Ye);
              Se(at, () => e.children ?? Ee), M(F, Ye);
            },
            $$slots: { default: !0 }
          }
        )),
        (F) => P = F,
        () => P
      );
    });
  }
  return M(n, qn), qe(di);
}
let hc = 0;
var vc = /* @__PURE__ */ se('<span class="mdc-deprecated-list-item__ripple"></span>'), pc = /* @__PURE__ */ se("<!><!>", 1);
function mc(n, e) {
  Ke(e, !0);
  let t = () => {
  };
  function i(I) {
    return I === t;
  }
  let r = Me("SMUI:list:item:nav"), a = y(e, "use", 19, () => []), s = y(e, "class", 3, ""), u = y(e, "style", 3, ""), o = y(e, "nonInteractive", 19, () => Me("SMUI:list:nonInteractive") ?? !1), d = y(e, "ripple", 19, () => !o()), c = y(e, "wrapper", 3, !1), v = y(e, "activated", 15, !1), f = y(e, "role", 19, () => c() ? "presentation" : Me("SMUI:list:item:role")), p = y(e, "selected", 15, !1), h = y(e, "disabled", 3, !1), m = y(e, "skipRestoreFocus", 3, !1), g = y(e, "tabindex", 15, t), C = y(e, "inputId", 19, () => "SMUI-form-field-list-" + hc++), O = y(e, "component", 3, os), x = y(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), S = /* @__PURE__ */ gt(e, [
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
  me("SMUI:list:nonInteractive", void 0), me("SMUI:list:item:role", void 0);
  let w, L = Oe({}), D = Oe({}), b = Oe({}), T = /* @__PURE__ */ fe(void 0), V = /* @__PURE__ */ fe(void 0);
  const ne = /* @__PURE__ */ ae(() => i(g()) ? !o() && !h() && (p() || l(T) && l(T).checked) ? 0 : -1 : g());
  me("SMUI:generic:input:props", { id: C() }), me("SMUI:separator:context", void 0), me("SMUI:generic:input:mount", (I) => {
    ("_smui_checkbox_accessor" in I || "_smui_radio_accessor" in I) && G(T, I, !0);
  }), me("SMUI:generic:input:unmount", () => {
    G(T, void 0);
  });
  const P = Me("SMUI:list:item:mount"), B = Me("SMUI:list:item:unmount");
  _t(() => {
    if (!p() && !o()) {
      let _ = !0, q = w.getElement();
      for (; q.previousElementSibling; )
        if (q = q.previousElementSibling, q.nodeType === 1 && q.classList.contains("mdc-deprecated-list-item") && !q.classList.contains("mdc-deprecated-list-item--disabled")) {
          _ = !1;
          break;
        }
      _ && G(V, window.requestAnimationFrame(() => z(q)), !0);
    }
    const I = {
      _smui_list_item_accessor: !0,
      get element() {
        return ke();
      },
      get selected() {
        return p();
      },
      set selected(_) {
        p(_);
      },
      hasClass: Re,
      addClass: K,
      removeClass: k,
      getAttr: ee,
      addAttr: ue,
      removeAttr: N,
      getPrimaryText: Fe,
      // For inputs within item.
      get checked() {
        return (l(T) && l(T).checked) ?? !1;
      },
      set checked(_) {
        l(T) && (l(T).checked = !!_);
      },
      get hasCheckbox() {
        return !!(l(T) && "_smui_checkbox_accessor" in l(T));
      },
      get hasRadio() {
        return !!(l(T) && "_smui_radio_accessor" in l(T));
      },
      activateRipple() {
        l(T) && l(T).activateRipple();
      },
      deactivateRipple() {
        l(T) && l(T).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ve,
      get tabindex() {
        return l(ne);
      },
      set tabindex(_) {
        g(_);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(_) {
        v(_);
      }
    };
    return P && P(I), () => {
      B && B(I);
    };
  }), oi(() => {
    l(V) && window.cancelAnimationFrame(l(V));
  });
  function Re(I) {
    return I in L ? L[I] : ke().classList.contains(I);
  }
  function K(I) {
    L[I] || (L[I] = !0);
  }
  function k(I) {
    (!(I in L) || L[I]) && (L[I] = !1);
  }
  function U(I, _) {
    D[I] != _ && (_ === "" || _ == null ? delete D[I] : D[I] = _);
  }
  function ee(I) {
    return I in b ? b[I] ?? null : ke().getAttribute(I);
  }
  function ue(I, _) {
    b[I] !== _ && (b[I] = _);
  }
  function N(I) {
    (!(I in b) || b[I] != null) && (b[I] = void 0);
  }
  function z(I) {
    let _ = !0;
    for (; I.nextElementSibling; )
      if (I = I.nextElementSibling, I.nodeType === 1 && I.classList.contains("mdc-deprecated-list-item")) {
        const q = I.attributes.getNamedItem("tabindex");
        if (q && q.value === "0") {
          _ = !1;
          break;
        }
      }
    _ && g(0);
  }
  function te(I) {
    const _ = I.key === "Enter", q = I.key === "Space";
    (_ || q) && Ve(I);
  }
  function Ve(I) {
    h() || Ct(ke(), "SMUIAction", I);
  }
  function Fe() {
    const I = ke(), _ = I.querySelector(".mdc-deprecated-list-item__primary-text");
    if (_)
      return _.textContent ?? "";
    const q = I.querySelector(".mdc-deprecated-list-item__text");
    return q ? q.textContent ?? "" : I.textContent ?? "";
  }
  function ke() {
    return w.getElement();
  }
  var Ft = { action: Ve, getPrimaryText: Fe, getElement: ke }, j = ve(), le = re(j);
  {
    let I = /* @__PURE__ */ ae(() => [
      ...o() ? [] : [
        [
          Sn,
          {
            ripple: !l(T),
            unbounded: !1,
            color: (v() || p()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: K,
            removeClass: k,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), _ = /* @__PURE__ */ ae(() => et({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": p(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && p(),
      "smui-menu-item--non-interactive": o(),
      ...L,
      [s()]: !0
    })), q = /* @__PURE__ */ ae(() => Object.entries(D).map(([X, H]) => `${X}: ${H};`).concat([u()]).join(" ")), ge = /* @__PURE__ */ ae(() => m() || void 0);
    ss(le, O, (X, H) => {
      we(
        H(X, $e(
          {
            get tag() {
              return x();
            },
            get use() {
              return l(I);
            },
            get class() {
              return l(_);
            },
            get style() {
              return l(q);
            }
          },
          () => r && v() ? { "aria-current": "page" } : {},
          () => !r || c() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": p() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": l(T) && l(T).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return l(ge);
            },
            get tabindex() {
              return l(ne);
            },
            get href() {
              return e.href;
            }
          },
          () => b,
          () => S,
          {
            onclick: (Q) => {
              var ce;
              Ve(Q), (ce = e.onclick) == null || ce.call(e, Q);
            },
            onkeydown: (Q) => {
              var ce;
              te(Q), (ce = e.onkeydown) == null || ce.call(e, Q);
            },
            children: (Q, ce) => {
              var Ie = pc(), pe = re(Ie);
              {
                var he = (It) => {
                  var bt = vc();
                  M(It, bt);
                };
                de(pe, (It) => {
                  d() && It(he);
                });
              }
              var Be = Y(pe);
              Se(Be, () => e.children ?? Ee), M(Q, Ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (Q) => w = Q,
        () => w
      );
    });
  }
  return M(n, j), qe(Ft);
}
let gc = 0;
var Ic = /* @__PURE__ */ se("<div><!></div>");
function bc(n, e) {
  Ke(e, !0);
  let t = y(e, "use", 19, () => []), i = y(e, "class", 3, ""), r = y(e, "id", 19, () => "SMUI-select-helper-text-" + gc++), a = y(e, "persistent", 3, !1), s = y(e, "validationMsg", 3, !1), u = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), o, d = /* @__PURE__ */ fe(void 0), c = Oe({}), v = Oe({}), f = /* @__PURE__ */ fe(void 0);
  const p = Me("SMUI:select:helper-text:id"), h = Me("SMUI:select:helper-text:mount"), m = Me("SMUI:select:helper-text:unmount");
  _t(() => (G(
    d,
    new oc({
      addClass: C,
      removeClass: O,
      hasClass: g,
      getAttr: x,
      setAttr: S,
      removeAttr: w,
      setContent: (P) => {
        G(f, P, !0);
      }
    }),
    !0
  ), p && p(r()), h && h(l(d)), l(d).init(), () => {
    var P;
    m && l(d) && m(l(d)), (P = l(d)) == null || P.destroy();
  }));
  function g(P) {
    return P in c ? c[P] : L().classList.contains(P);
  }
  function C(P) {
    c[P] || (c[P] = !0);
  }
  function O(P) {
    (!(P in c) || c[P]) && (c[P] = !1);
  }
  function x(P) {
    return P in v ? v[P] ?? null : L().getAttribute(P);
  }
  function S(P, B) {
    v[P] !== B && (v[P] = B);
  }
  function w(P) {
    (!(P in v) || v[P] != null) && (v[P] = void 0);
  }
  function L() {
    return o;
  }
  var D = { getElement: L }, b = Ic();
  lt(
    b,
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
  var T = J(b);
  {
    var V = (P) => {
      var B = ve(), Re = re(B);
      Se(Re, () => e.children ?? Ee), M(P, B);
    }, ne = (P) => {
      var B = pt();
      He(() => Te(B, l(f))), M(P, B);
    };
    de(T, (P) => {
      l(f) == null ? P(V) : P(ne, -1);
    });
  }
  return we(b, (P) => o = P, () => o), Ze(b, (P, B) => ie == null ? void 0 : ie(P, B), t), M(n, b), qe(D);
}
let yc = 0;
var Ac = /* @__PURE__ */ se("<input/>"), Ec = /* @__PURE__ */ se('<span class="mdc-select__ripple"></span>'), Cc = /* @__PURE__ */ se('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function ya(n, e) {
  Ke(e, !0);
  const t = () => Qa(bt, "$selectedTextStore", i), [i, r] = na();
  let a = () => {
  };
  function s(E) {
    return E === a;
  }
  let u = y(e, "use", 19, () => []), o = y(e, "class", 3, ""), d = y(e, "style", 3, ""), c = y(e, "ripple", 3, !0), v = y(e, "disabled", 3, !1), f = y(e, "variant", 3, "standard"), p = y(e, "noLabel", 3, !1), h = y(e, "label", 3, void 0), m = y(e, "value", 15), g = y(e, "key", 3, (E) => E), C = y(e, "dirty", 15, !1), O = y(e, "invalid", 15, a), x = y(e, "updateInvalid", 19, () => s(O())), S = y(e, "required", 3, !1), w = y(e, "inputId", 19, () => "SMUI-select-" + yc++), L = y(e, "hiddenInput", 3, !1), D = y(e, "withLeadingIcon", 3, a), b = y(e, "anchor$use", 19, () => []), T = y(e, "anchor$class", 3, ""), V = y(e, "selectedTextContainer$use", 19, () => []), ne = y(e, "selectedTextContainer$class", 3, ""), P = y(e, "selectedText$use", 19, () => []), B = y(e, "selectedText$class", 3, ""), Re = y(e, "dropdownIcon$use", 19, () => []), K = y(e, "dropdownIcon$class", 3, ""), k = y(e, "menu$class", 3, ""), U = /* @__PURE__ */ gt(e, [
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
  const ee = s(O());
  s(O()) && O(!1);
  let ue, N = /* @__PURE__ */ fe(void 0), z = Oe({}), te = Oe({}), Ve, Fe = Oe({}), ke = /* @__PURE__ */ fe(-1);
  const Ft = /* @__PURE__ */ ae(() => U.menu$id ?? w() + "-menu");
  let j = /* @__PURE__ */ fe(void 0), le = Me("SMUI:addLayoutListener"), I, _ = /* @__PURE__ */ fe(!1), q = Oe({}), ge = /* @__PURE__ */ fe(void 0), X = /* @__PURE__ */ fe(void 0), H = /* @__PURE__ */ fe(!1), Q, ce = Me("SMUI:select:context"), Ie, pe, he, Be, It;
  me("SMUI:list:role", ""), me("SMUI:list:nav", !1);
  const bt = xa("");
  me("SMUI:select:selectedText", bt);
  const di = xa(m());
  Pe(() => {
    Wr(di, m());
  }), me("SMUI:select:value", di), Pe(() => {
    l(N) && l(N).getValue() !== g()(m()) && l(N).setValue(g()(m()));
  });
  let qn = l(ke);
  Pe(() => {
    if (qn !== l(ke))
      if (qn = l(ke), l(N))
        l(N).setSelectedIndex(
          l(ke),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const E = Bt();
        m() !== E[l(ke)] && m(E[l(ke)]);
      }
  }), Pe(() => {
    l(N) && l(N).getDisabled() !== v() && l(N).setDisabled(v());
  }), Pe(() => {
    l(N) && C() && l(N).isValid() !== !O() && (x() ? O(!l(N).isValid()) : l(N).setValid(!O()));
  }), Pe(() => {
    l(N) && l(N).getRequired() !== S() && l(N).setRequired(S());
  }), le && (I = le(_r)), me("SMUI:select:leading-icon:mount", (E) => {
    Ie = E;
  }), me("SMUI:select:leading-icon:unmount", () => {
    Ie = void 0;
  }), me("SMUI:list:mount", (E) => {
    Q = E;
  }), me("SMUI:select:helper-text:id", (E) => {
    G(j, E, !0);
  }), me("SMUI:select:helper-text:mount", (E) => {
    pe = E;
  }), me("SMUI:select:helper-text:unmount", () => {
    G(j, void 0), pe = void 0;
  }), _t(() => (G(
    N,
    new lc(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (E) => {
          Wr(bt, E);
        },
        isSelectAnchorFocused: () => document.activeElement === Ve,
        getSelectAnchorAttr: Ye,
        setSelectAnchorAttr: at,
        removeSelectAnchorAttr: Tt,
        addMenuClass: F,
        removeMenuClass: be,
        openMenu: () => {
          G(_, !0);
        },
        closeMenu: () => {
          G(_, !1);
        },
        getAnchorElement: () => Ve,
        setMenuAnchorElement: (E) => {
          G(ge, E, !0);
        },
        setMenuAnchorCorner: (E) => {
          G(X, E, !0);
        },
        setMenuWrapFocus: (E) => {
          G(H, E, !0);
        },
        getSelectedIndex: () => l(ke),
        setSelectedIndex: (E) => {
          qn = E, G(ke, E, !0), m(Bt()[l(ke)]);
        },
        focusMenuItemAtIndex: (E) => {
          Q.focusItemAtIndex(E);
        },
        getMenuItemCount: () => Q.items.length,
        getMenuItemValues: () => Bt().map(g()),
        getMenuItemTextAtIndex: (E) => Q.getPrimaryTextAtIndex(E),
        isTypeaheadInProgress: () => Q.typeaheadInProgress,
        typeaheadMatchItem: (E, W) => Q.typeaheadMatchItem(E, W),
        // getCommonAdapterMethods
        addClass: Z,
        removeClass: $,
        hasClass: sr,
        setRippleCenter: (E) => Be && Be.setRippleCenter(E),
        activateBottomLine: () => Be && Be.activate(),
        deactivateBottomLine: () => Be && Be.deactivate(),
        notifyChange: (E) => {
          var W;
          C(!0), x() && O(!((W = l(N)) != null && W.isValid())), Ct(Qn(), "SMUISelectChange", { value: m(), index: l(ke) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!It,
        notchOutline: (E) => It && It.notch(E),
        closeOutline: () => It && It.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!he,
        floatLabel: (E) => he && he.float(E),
        getLabelWidth: () => he ? he.getWidth() : 0,
        setLabelRequired: (E) => he && he.setRequired(E)
      },
      {
        get helperText() {
          return pe;
        },
        get leadingIcon() {
          return Ie;
        }
      }
    ),
    !0
  ), G(ke, Bt().indexOf(m()), !0), l(N).init(), Ut(ee), () => {
    var E;
    (E = l(N)) == null || E.destroy();
  })), oi(() => {
    I && I();
  });
  function sr(E) {
    return E in z ? z[E] : Qn().classList.contains(E);
  }
  function Z(E) {
    z[E] || (z[E] = !0);
  }
  function $(E) {
    (!(E in z) || z[E]) && (z[E] = !1);
  }
  function R(E, W) {
    te[E] != W && (W === "" || W == null ? delete te[E] : te[E] = W);
  }
  function F(E) {
    q[E] || (q[E] = !0);
  }
  function be(E) {
    (!(E in q) || q[E]) && (q[E] = !1);
  }
  function Ye(E) {
    return E in Fe ? Fe[E] ?? null : Qn().getAttribute(E);
  }
  function at(E, W) {
    Fe[E] !== W && (Fe[E] = W);
  }
  function Tt(E) {
    (!(E in Fe) || Fe[E] != null) && (Fe[E] = void 0);
  }
  function Bt() {
    return Q.getOrderedList().map((E) => E.getValue());
  }
  function ki(E) {
    const W = E.currentTarget.getBoundingClientRect();
    return (Je(E) ? E.touches[0].clientX : E.clientX) - W.left;
  }
  function Je(E) {
    return "touches" in E;
  }
  function Lt() {
    if (l(N) == null)
      throw new Error("Instance is undefined.");
    return l(N).getUseDefaultValidation();
  }
  function Ut(E) {
    var W;
    (W = l(N)) == null || W.setUseDefaultValidation(E);
  }
  function Yn() {
    Ve.focus();
  }
  function _r() {
    var E;
    (E = l(N)) == null || E.layout();
  }
  function Qn() {
    return ue;
  }
  var _e = {
    getUseDefaultValidation: Lt,
    setUseDefaultValidation: Ut,
    focus: Yn,
    layout: _r,
    getElement: Qn
  }, je = Cc(), Ne = re(je);
  lt(Ne, (E, W, ze) => ({ class: E, style: W, ...ze }), [
    () => et({
      "mdc-select": !0,
      "mdc-select--required": S(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(D()) ? e.leadingIcon : D(),
      "mdc-select--no-label": p() || h() == null,
      "mdc-select--invalid": O(),
      "mdc-select--activated": l(_),
      "mdc-data-table__pagination-rows-per-page-select": ce === "data-table:pagination",
      ...z,
      [o()]: !0
    }),
    () => Object.entries(te).map(([E, W]) => `${E}: ${W};`).concat([d()]).join(" "),
    () => Ha(U, [
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
  var wt = J(Ne);
  {
    var un = (E) => {
      var W = Ac();
      lt(
        W,
        (ze) => ({
          type: "hidden",
          required: S(),
          disabled: v(),
          value: m(),
          ...ze
        }),
        [() => vt(U, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), M(E, W);
    };
    de(wt, (E) => {
      L() && E(un);
    });
  }
  var Ge = Y(wt, 2), dt = (E) => {
    var W;
    Ve.focus(), l(N) && l(N).handleClick(ki(E)), (W = e.anchor$onclick) == null || W.call(e, E);
  }, yt = (E) => {
    var W;
    l(N) && l(N).handleKeydown(E), (W = e.onkeydown) == null || W.call(e, E);
  }, Ue = (E) => {
    var W;
    l(N) && l(N).handleBlur(), Ct(Qn(), "blur", E), (W = e.anchor$onblur) == null || W.call(e, E);
  }, At = (E) => {
    var W;
    l(N) && l(N).handleFocus(), Ct(Qn(), "focus", E), (W = e.anchor$onfocus) == null || W.call(e, E);
  };
  lt(
    Ge,
    (E, W) => ({
      class: E,
      "aria-required": S() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": l(Ft),
      "aria-expanded": l(_) ? "true" : "false",
      "aria-describedby": l(j),
      role: "combobox",
      tabindex: "0",
      ...Fe,
      ...W,
      onclick: dt,
      onkeydown: yt,
      onblur: Ue,
      onfocus: At
    }),
    [
      () => et({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => vt(U, "anchor$")
    ]
  );
  var _n = J(Ge);
  {
    var Qt = (E) => {
      var W = Ec();
      M(E, W);
    };
    de(_n, (E) => {
      f() === "filled" && E(Qt);
    });
  }
  var ct = Y(_n, 2);
  {
    var Mt = (E) => {
      {
        let W = /* @__PURE__ */ ae(() => w() + "-smui-label"), ze = /* @__PURE__ */ ae(() => t() !== ""), ft = /* @__PURE__ */ ae(() => vt(U, "label$"));
        we(
          qr(E, $e(
            {
              get id() {
                return l(W);
              },
              get floatAbove() {
                return l(ze);
              },
              get required() {
                return S();
              }
            },
            () => l(ft),
            {
              children: (Pn, kn) => {
                var or = ve(), Fi = re(or);
                {
                  var fi = (yn) => {
                  }, la = (yn) => {
                    var Fn = pt();
                    He(() => Te(Fn, h())), M(yn, Fn);
                  }, oa = (yn) => {
                    var Fn = ve(), vs = re(Fn);
                    Se(vs, h), M(yn, Fn);
                  };
                  de(Fi, (yn) => {
                    h() == null ? yn(fi) : typeof h() == "string" ? yn(la, 1) : yn(oa, -1);
                  });
                }
                M(Pn, or);
              },
              $$slots: { default: !0 }
            }
          )),
          (Pn) => he = Pn,
          () => he
        );
      }
    };
    de(ct, (E) => {
      f() !== "outlined" && !p() && h() != null && E(Mt);
    });
  }
  var Zt = Y(ct, 2);
  {
    var dn = (E) => {
      {
        let W = /* @__PURE__ */ ae(() => p() || h() == null), ze = /* @__PURE__ */ ae(() => vt(U, "outline$"));
        we(
          to(E, $e(
            {
              get noLabel() {
                return l(W);
              }
            },
            () => l(ze),
            {
              children: (ft, Pn) => {
                var kn = ve(), or = re(kn);
                {
                  var Fi = (fi) => {
                    {
                      let la = /* @__PURE__ */ ae(() => w() + "-smui-label"), oa = /* @__PURE__ */ ae(() => t() !== ""), yn = /* @__PURE__ */ ae(() => vt(U, "label$"));
                      we(
                        qr(fi, $e(
                          {
                            get id() {
                              return l(la);
                            },
                            get floatAbove() {
                              return l(oa);
                            },
                            get required() {
                              return S();
                            }
                          },
                          () => l(yn),
                          {
                            children: (Fn, vs) => {
                              var ps = ve(), po = re(ps);
                              {
                                var mo = (Zn) => {
                                }, go = (Zn) => {
                                  var ur = pt();
                                  He(() => Te(ur, h())), M(Zn, ur);
                                }, Io = (Zn) => {
                                  var ur = ve(), bo = re(ur);
                                  Se(bo, h), M(Zn, ur);
                                };
                                de(po, (Zn) => {
                                  h() == null ? Zn(mo) : typeof h() == "string" ? Zn(go, 1) : Zn(Io, -1);
                                });
                              }
                              M(Fn, ps);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Fn) => he = Fn,
                        () => he
                      );
                    }
                  };
                  de(or, (fi) => {
                    !p() && h() != null && fi(Fi);
                  });
                }
                M(ft, kn);
              },
              $$slots: { default: !0 }
            }
          )),
          (ft) => It = ft,
          () => It
        );
      }
    };
    de(Zt, (E) => {
      f() === "outlined" && E(dn);
    });
  }
  var zt = Y(Zt, 2);
  Se(zt, () => e.leadingIcon ?? Ee);
  var Jt = Y(zt, 2);
  lt(Jt, (E, W) => ({ class: E, ...W }), [
    () => et({
      "mdc-select__selected-text-container": !0,
      [ne()]: !0
    }),
    () => vt(U, "selectedTextContainer$")
  ]);
  var Nt = J(Jt);
  lt(
    Nt,
    (E, W) => ({
      id: w() + "-smui-selected-text",
      class: E,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": w() + "-smui-label",
      ...W
    }),
    [
      () => et({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => vt(U, "selectedText$")
    ]
  );
  var ci = J(Nt);
  Ze(Nt, (E, W) => ie == null ? void 0 : ie(E, W), P), Ze(Jt, (E, W) => ie == null ? void 0 : ie(E, W), V);
  var lr = Y(Jt, 2);
  lt(lr, (E, W) => ({ class: E, ...W }), [
    () => et({
      "mdc-select__dropdown-icon": !0,
      [K()]: !0
    }),
    () => vt(U, "dropdownIcon$")
  ]), Ze(lr, (E, W) => ie == null ? void 0 : ie(E, W), Re);
  var oo = Y(lr, 2);
  {
    var uo = (E) => {
      {
        let W = /* @__PURE__ */ ae(() => vt(U, "ripple$"));
        we(eo(E, $e(() => l(W))), (ze) => Be = ze, () => Be);
      }
    };
    de(oo, (E) => {
      f() !== "outlined" && c() && E(uo);
    });
  }
  we(Ge, (E) => Ve = E, () => Ve), Ze(Ge, (E, W) => ie == null ? void 0 : ie(E, W), b);
  var co = Y(Ge, 2);
  {
    let E = /* @__PURE__ */ ae(() => et({
      "mdc-select__menu": !0,
      ...q,
      [k()]: !0
    })), W = /* @__PURE__ */ ae(() => vt(U, "menu$"));
    cc(co, $e(
      {
        get class() {
          return l(E);
        },
        get id() {
          return l(Ft);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return l(ge);
        },
        get anchorCorner() {
          return l(X);
        }
      },
      () => l(W),
      {
        onSMUIMenuSelected: (ze) => {
          var ft;
          l(N) && l(N).handleMenuItemAction(ze.detail.index), (ft = e.onSMUIMenuSelected) == null || ft.call(e, ze);
        },
        onSMUIMenuSurfaceClosing: (ze) => {
          var ft;
          l(N) && l(N).handleMenuClosing(), (ft = e.onSMUIMenuSurfaceClosing) == null || ft.call(e, ze);
        },
        onSMUIMenuSurfaceClosed: (ze) => {
          var ft;
          l(N) && l(N).handleMenuClosed(), (ft = e.onSMUIMenuSurfaceClosed) == null || ft.call(e, ze);
        },
        onSMUIMenuSurfaceOpened: (ze) => {
          var ft;
          l(N) && l(N).handleMenuOpened(), (ft = e.onSMUIMenuSurfaceOpened) == null || ft.call(e, ze);
        },
        get open() {
          return l(_);
        },
        set open(ze) {
          G(_, ze, !0);
        },
        children: (ze, ft) => {
          {
            let Pn = /* @__PURE__ */ ae(() => vt(U, "list$"));
            fc(ze, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return l(H);
                }
              },
              () => l(Pn),
              {
                get selectedIndex() {
                  return l(ke);
                },
                set selectedIndex(kn) {
                  G(ke, kn, !0);
                },
                children: (kn, or) => {
                  var Fi = ve(), fi = re(Fi);
                  Se(fi, () => e.children ?? Ee), M(kn, Fi);
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
  we(Ne, (E) => ue = E, () => ue), Ze(Ne, (E, W) => Sn == null ? void 0 : Sn(E, W), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: Z,
    removeClass: $,
    addStyle: R
  })), Ze(Ne, (E, W) => ba == null ? void 0 : ba(E, W), () => ({ addClass: Z, removeClass: $ })), Ze(Ne, (E, W) => ie == null ? void 0 : ie(E, W), u);
  var fo = Y(Ne, 2);
  {
    var ho = (E) => {
      {
        let W = /* @__PURE__ */ ae(() => vt(U, "helperText$"));
        bc(E, $e(() => l(W), {
          children: (ze, ft) => {
            var Pn = ve(), kn = re(Pn);
            Se(kn, () => e.helperText ?? Ee), M(ze, Pn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    de(fo, (E) => {
      e.helperText && E(ho);
    });
  }
  He(() => Te(ci, t())), M(n, je);
  var vo = qe(_e);
  return r(), vo;
}
function gi(n, e) {
  Ke(e, !0);
  const t = () => Qa(c, "$selectedValue", i), [i, r] = na();
  let a = y(e, "use", 19, () => []);
  y(e, "class", 3, "");
  let s = y(e, "value", 3, ""), u = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), o;
  const d = Me("SMUI:select:selectedText"), c = Me("SMUI:select:value");
  me("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ ae(() => s() != null && s() !== "" && t() === s());
  _t(f), oi(f);
  function f() {
    l(v) && o && Wr(d, o.getPrimaryText());
  }
  function p() {
    return o.getElement();
  }
  var h = { getElement: p };
  we(
    mc(n, $e(
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
        children: (g, C) => {
          var O = ve(), x = re(O);
          Se(x, () => e.children ?? Ee), M(g, O);
        },
        $$slots: { default: !0 }
      }
    )),
    (g) => o = g,
    () => o
  );
  var m = qe(h);
  return r(), m;
}
var Sc = /* @__PURE__ */ se("<i><!></i>");
function xc(n, e) {
  Ke(e, !0);
  const t = () => Qa(h, "$leadingStore", i), [i, r] = na();
  let a = y(e, "use", 19, () => []), s = y(e, "class", 3, ""), u = y(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = y(e, "disabled", 3, !1), d = /* @__PURE__ */ gt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, v = /* @__PURE__ */ fe(void 0), f = new Rr(), p = Oe({});
  const h = Me("SMUI:textfield:icon:leading"), m = t();
  let g = /* @__PURE__ */ fe(void 0);
  const C = /* @__PURE__ */ ae(() => ({ role: e.role, tabindex: u() })), O = Me("SMUI:textfield:leading-icon:mount"), x = Me("SMUI:textfield:leading-icon:unmount"), S = Me("SMUI:textfield:trailing-icon:mount"), w = Me("SMUI:textfield:trailing-icon:unmount");
  _t(() => (G(
    v,
    new Td({
      getAttr: L,
      setAttr: D,
      removeAttr: b,
      setContent: (k) => {
        G(g, k, !0);
      },
      registerInteractionHandler: (k, U) => f.on(T(), k, U),
      deregisterInteractionHandler: (k, U) => f.off(T(), k, U),
      notifyIconAction: () => Ct(T(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? O && O(l(v)) : S && S(l(v)), l(v).init(), () => {
    var k;
    l(v) && (m ? x && x(l(v)) : w && w(l(v))), (k = l(v)) == null || k.destroy(), f.clear();
  }));
  function L(k) {
    return k in p ? p[k] ?? null : T().getAttribute(k);
  }
  function D(k, U) {
    p[k] !== U && (p[k] = U);
  }
  function b(k) {
    (!(k in p) || p[k] != null) && (p[k] = void 0);
  }
  function T() {
    return c;
  }
  var V = { getElement: T }, ne = Sc();
  lt(
    ne,
    (k) => ({
      class: k,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...l(C),
      ...p,
      ...d
    }),
    [
      () => et({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var P = J(ne);
  {
    var B = (k) => {
      var U = ve(), ee = re(U);
      Se(ee, () => e.children ?? Ee), M(k, U);
    }, Re = (k) => {
      var U = pt();
      He(() => Te(U, l(g))), M(k, U);
    };
    de(P, (k) => {
      l(g) == null ? k(B) : k(Re, -1);
    });
  }
  we(ne, (k) => c = k, () => c), Ze(ne, (k, U) => ie == null ? void 0 : ie(k, U), a), M(n, ne);
  var K = qe(V);
  return r(), K;
}
const ds = ["editor", "menu", "validator"], Tc = {
  editor: "Editor plugin",
  menu: "Navigation plugin",
  validator: "Validation plugin"
}, cs = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder"
};
async function Lc(n) {
  if (n.source === "builtin" || !n.pluginsUrl)
    return {
      provider: n,
      plugins: [],
      error: "Builtin providers must be loaded via loadBuiltinProviders()."
    };
  try {
    const e = await fetch(n.pluginsUrl);
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
    const i = t.plugins, r = i.filter(Mc), a = i.length - r.length;
    return a > 0 && console.warn(
      `[ProviderLoader] Provider "${n.name}": skipped ${a} invalid plugin entries.`
    ), { provider: n, plugins: r };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { provider: n, plugins: [], error: t };
  }
}
async function wc(n) {
  return Promise.all(n.map(Lc));
}
function Mc(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && (!e.author || typeof e.author == "string") && typeof e.src == "string" && (!1 || e.src.startsWith("https://") || e.src.startsWith("/")) && typeof e.kind == "string" && typeof e.icon == "string" && typeof e.description == "string";
}
function ar(n, e) {
  var i;
  const t = (i = n == null ? void 0 : n.prefix) == null ? void 0 : i.trim();
  return t ? `${t} - ${e}` : e;
}
function Yr(n, e) {
  return `${n}\0${e}`;
}
function Qr(n) {
  return Yr(
    ar(n.provider, n.name),
    n.kind
  );
}
function Oi(n) {
  return `${n.provider.name}\0${Qr(n)}`;
}
function Oc(n, e, t) {
  return n.name === e && n.kind === t;
}
function Ar(n, e) {
  return Qr(n) === Qr(e);
}
function $t(n, e) {
  return Oi(n) === Oi(e);
}
function Dc(n) {
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
function Rc(n) {
  return Array.isArray(n) ? Dc(n) : [];
}
function _c(n, e, t) {
  const i = ar(e, n.name);
  return t.find((r) => Oc(r, i, n.kind));
}
function fs(n, e, t, i) {
  const r = (i == null ? void 0 : i.builtin) === !0 || e.source === "builtin", a = _c(n, e, t), s = (i == null ? void 0 : i.activeByDefault) === !0, u = r || a ? "INSTALLED" : "AVAILABLE", o = a ? a.active ? "ACTIVE" : "INACTIVE" : r && s ? "ACTIVE" : "INACTIVE";
  return {
    ...n,
    builtin: r,
    activeByDefault: i == null ? void 0 : i.activeByDefault,
    requireDoc: i == null ? void 0 : i.requireDoc,
    provider: e,
    kindText: Tc[n.kind],
    kindIcon: cs[n.kind],
    installationState: u,
    activationState: o
  };
}
function ao(n) {
  return `A built-in plugin with the name "${n}" already exists.`;
}
function Pc(n) {
  const e = n.filter(
    (i) => {
      var r;
      return i.builtin === !0 && ((r = i.provider) == null ? void 0 : r.source) === "builtin";
    }
  );
  if (e.length === 0) return n;
  const t = /* @__PURE__ */ new Map();
  for (const i of e)
    t.set(Yr(i.name, i.kind), i);
  return n.map((i) => {
    var a;
    if (((a = i.provider) == null ? void 0 : a.source) === "builtin") return i;
    const r = t.get(
      Yr(ar(i.provider, i.name), i.kind)
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
function ja(n) {
  return (n == null ? void 0 : n.builtin) === !0 || (n == null ? void 0 : n.shadowedByHostBuiltin) === !0;
}
function kc(n, e) {
  return n.map((t) => !Ar(t, e) || ja(t) ? t : {
    ...t,
    installationState: "INSTALLED",
    activationState: "INACTIVE"
  });
}
function Fc(n, e) {
  const t = n.find((r) => Ar(r, e));
  return ja(t) || ja(e) ? { updated: n, success: !1 } : { updated: n.map(
    (r) => Ar(r, e) ? {
      ...r,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : r
  ), success: !0 };
}
function Bc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "ACTIVE"
    } : t
  );
}
function Uc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "INACTIVE"
    } : t
  );
}
function hs() {
  return document.querySelector("open-scd");
}
function so() {
  const n = hs();
  return n != null && n.shadowRoot ? n.shadowRoot.querySelector("compas-layout") ?? n.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
function Nc() {
  var t;
  const n = so();
  if ((n == null ? void 0 : n.localName) === "compas-layout") return "compas";
  if ((n == null ? void 0 : n.localName) === "oscd-layout") return "open-scd";
  const e = hs();
  return e ? (t = e.shadowRoot) != null && t.querySelector("compas-session") ? "compas" : "open-scd" : null;
}
function Hc(n = hs) {
  var i;
  const e = n(), t = (i = e == null ? void 0 : e.getBuiltInPlugins) == null ? void 0 : i.call(e);
  return Array.isArray(t) ? t : [];
}
const Vc = "data:image/png;base64,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", jc = "data:image/png;base64,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dVv4Ul1CQGUISG4wOe8QjhT7o9s1nltK5uXlNRp/zzV44qpHt20PfD6dwUh9waP0ecqgqmpkMB3oTtxdpDamuItCEooxJOiq7Tt9+vQEzn2MctvU//ij6+IAXNSUEFA6ApJGyeL67TfRWEai0ZyDwFV1ALziSGsz0iEPkQMgck1temA6yEtVzdFQtqxWrdqfqFQlpSmGb6gVOPcxunaO4/rN5nzkx7lQLkECF31LByGgVQSkMJh6jLB/B3+bUfiCegCB9hMI7IoYIBSFL8oNBKKnSTJkMO3odjQevdEVuxWbihGFaodE9jVBw1kP123uRnfPzrfffrvAhAT4lvsmzoVuRi4s79FpHwjUihDgiQDmURYtSpZbt43GrBf+Fs/i9w342wzgKRbvatycJ74oH8BlZx14N6KKuRAgg5kLjsJP0Fj+HxqPhVjT4RR3hXOTrEbLadOmHcUfUii+1f6X5xajYott3749DF05e1GSFySThhgRAgwiIFaULM5NBuGo8k80ZotQbb7zk/YiVASXna1H4zzMXgJabifK4nY1AopGw/mHH36Yieno+qpRvzw6peC5Ef+K5imnU0JAswjMnTs3ZN68eZxnydFDN2LEiICmTZu2xSCezkispqME7Wnv5ua2FSNve+/bt++WPe212EZNoyTR+q9x48ZFZ8+evQndJG+LxoQtwpQphK3+IGnYQMDTUTEmT57cunnz5uFIp5qjtBxtn5aW1m7q1Klb0avUJDIyMtVRelpoTy7ZQnq5Xr16pefMmfObhoxlIYjQZUJAmwigy9TuaHiMUn0D5ye3oLHchujJbixz9GADHDnvfe211yghSQ5QCvpKLtmCkMFynKusiPN6e9BY+lipRpcIAUJAGwicqVOnji+qauarbmhoaDl0e67DZ4gs+9fylRPr/YWJTVpGR0ffsKGN5qqSwSygyzGjRnWcX+CCXWj/xwIwomJCQGsIHD16tG+fPn24dHRWDxxR+qChHImRtR9hRckTHlgVruCLF3/66acWGACYWHAVbV8hg2mh/z/99NOKw4YNO4qXKNG4BXyoiBDQMAIZx48f79mrV68VljDg9sD97rvvvsXMWkPwuhKnvJLOnj3bolu3bmct6af1MjKYee4AfCv0xknwjRhC/mqeS3RKCBAChMBTBPD5ELN79+4ITBeZgKNIA356hYSENMBAmqZY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";
function Gc(n) {
  return n === "compas" ? {
    name: "CoMPAS Plugins",
    icon: jc,
    description: "Built-in plugins of the CoMPAS OpenSCD host.",
    source: "builtin"
  } : {
    name: "Open-SCD Plugins",
    icon: Vc,
    description: "Built-in plugins of the OpenSCD host.",
    source: "builtin"
  };
}
function zc(n) {
  return typeof n == "string" && ds.includes(n);
}
function Xc(n) {
  return n === "top" || n === "middle" || n === "bottom";
}
function Wc(n, e) {
  if (typeof n.name != "string" || !n.name || typeof n.src != "string" || !n.src || !zc(n.kind)) return null;
  const t = n.kind, i = typeof n.icon == "string" && n.icon ? n.icon : cs[t];
  return {
    name: n.name,
    author: e,
    src: n.src,
    kind: t,
    icon: i,
    description: `Built-in ${t} plugin`,
    position: Xc(n.position) ? n.position : void 0
  };
}
function Kc(n, e) {
  const t = e == null ? void 0 : e.getHost, i = Nc(), r = Hc(t);
  if (r.length === 0)
    return [];
  const a = i ?? "open-scd", s = Gc(a), u = [];
  for (const o of r) {
    const d = Wc(o, s.name);
    d && u.push(
      fs(d, s, n, {
        builtin: !0,
        activeByDefault: o.activeByDefault === !0,
        requireDoc: o.requireDoc === !0
      })
    );
  }
  return u.length === 0 ? [] : [{ provider: s, plugins: u, host: a }];
}
const ji = {
  // no prefix — host registration uses plain stored plugin name
  name: "Custom Plugins",
  icon: "extension",
  description: "Manually configured plugins (not listed by a remote provider)."
};
function qc(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    e.add(Qr(t));
  return e;
}
function lo(n) {
  return typeof n == "string" && ds.includes(n);
}
function Yc(n, e) {
  return typeof n.name != "string" || !n.name || !lo(n.kind) ? !1 : e.has(Yr(n.name, n.kind));
}
function Qc(n, e) {
  const t = [];
  for (const i of n) {
    if (Yc(i, e) || typeof i.name != "string" || !i.name || typeof i.src != "string" || !i.src || !lo(i.kind)) continue;
    const r = i.kind, a = {
      name: i.name,
      author: i.author ?? ji.name,
      src: i.src,
      kind: r,
      icon: typeof i.icon == "string" && i.icon ? i.icon : cs[r],
      // Product: description is the source URL only
      description: i.src,
      position: i.position
    }, s = fs(a, ji, n, {
      activeByDefault: i.activeByDefault === !0,
      requireDoc: i.requireDoc === !0
    });
    t.push({
      ...s,
      installationState: "INSTALLED",
      activationState: i.active ? "ACTIVE" : "INACTIVE"
    });
  }
  return t;
}
const Zc = [
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
], Jc = Zc;
var $c = /* @__PURE__ */ se('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), ef = /* @__PURE__ */ se("<span> </span>"), tf = /* @__PURE__ */ se("<span> </span>"), nf = /* @__PURE__ */ se('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="oscd-icons plugin-icon svelte-1myq0bn"> </span></div> <button type="button"><!></button></div> <div class="plugin-name bp-typo-16-bold svelte-1myq0bn"> </div> <div class="plugin-kind-wrapper svelte-1myq0bn"><div class="badge badge-kind bp-typo-label"><span class="oscd-icons badge-icon"> </span> </div></div> <div class="plugin-description bp-typo-body svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><!> <!></div></div>');
function rf(n, e) {
  Ke(e, !0);
  const t = /* @__PURE__ */ ae(() => e.plugin.builtin === !0), i = /* @__PURE__ */ ae(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ ae(() => e.plugin.installationState === "INSTALLED" || l(t) || l(i)), a = /* @__PURE__ */ ae(() => e.plugin.activationState === "ACTIVE"), s = /* @__PURE__ */ ae(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ ae(() => ao(l(s))), o = /* @__PURE__ */ ae(() => l(i));
  function d(z) {
    z.stopPropagation(), !l(i) && (l(r) ? l(a) ? e.onDisable() : e.onEnable() : e.onInstall());
  }
  var c = nf();
  let v;
  var f = J(c), p = J(f), h = J(p), m = J(h), g = Y(p, 2);
  let C;
  var O = J(g);
  {
    var x = (z) => {
      var te = pt("Install");
      M(z, te);
    }, S = (z) => {
      var te = pt("Disable");
      M(z, te);
    }, w = (z) => {
      var te = pt("Enable");
      M(z, te);
    };
    de(O, (z) => {
      l(r) ? l(a) ? z(S, 1) : z(w, -1) : z(x);
    });
  }
  var L = Y(f, 2), D = J(L), b = Y(L, 2), T = J(b), V = J(T), ne = J(V), P = Y(V), B = Y(b, 2), Re = J(B), K = Y(B, 2), k = J(K);
  {
    var U = (z) => {
      var te = $c();
      M(z, te);
    }, ee = (z) => {
      var te = ef(), Ve = J(te);
      He(
        (Fe) => {
          zn(te, 1, `badge badge-${Fe ?? ""} bp-typo-button`, "svelte-1myq0bn"), Te(Ve, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), M(z, te);
    };
    de(k, (z) => {
      l(t) || l(i) ? z(U) : z(ee, -1);
    });
  }
  var ue = Y(k, 2);
  {
    var N = (z) => {
      var te = tf(), Ve = J(te);
      He(
        (Fe) => {
          zn(te, 1, `badge badge-${Fe ?? ""} bp-typo-button`, "svelte-1myq0bn"), Te(Ve, l(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), M(z, te);
    };
    de(ue, (z) => {
      l(r) && z(N);
    });
  }
  He(() => {
    v = zn(c, 1, "plugin-card svelte-1myq0bn", null, v, { selected: e.selected }), Mn(c, "aria-pressed", e.selected), Te(m, e.plugin.icon), C = zn(g, 1, "action-btn bp-typo-button", null, C, {
      disable: l(r) && l(a),
      enable: l(r) && !l(a),
      install: !l(r) && !l(t) && !l(i)
    }), g.disabled = l(o), Mn(g, "title", l(i) ? l(u) : void 0), Mn(g, "aria-label", l(r) ? l(a) ? "Disable" : "Enable" : "Install"), Te(D, e.plugin.name), Te(ne, e.plugin.kindIcon), Te(P, ` ${e.plugin.kindText ?? ""}`), Te(Re, e.plugin.description);
  }), vn("click", c, function(...z) {
    var te;
    (te = e.onSelect) == null || te.apply(this, z);
  }), vn("keydown", c, (z) => z.key === "Enter" && e.onSelect()), vn("click", g, d), M(n, c), qe();
}
as(["click", "keydown"]);
var af = /* @__PURE__ */ se('<img class="provider-icon svelte-1ttjeex"/>'), sf = /* @__PURE__ */ se('<span class="oscd-icons provider-icon svelte-1ttjeex"> </span>'), lf = /* @__PURE__ */ se('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name bp-typo-h3 svelte-1ttjeex"> </h3> <span class="provider-description bp-typo-body svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function of(n, e) {
  Ke(e, !0);
  var t = lf(), i = J(t), r = J(i), a = J(r), s = J(a), u = Y(a, 2), o = J(u), d = Y(r, 2);
  {
    var c = (h) => {
      var m = af();
      He(() => {
        Mn(m, "src", e.provider.icon), Mn(m, "alt", `${e.provider.name ?? ""} logo`);
      }), Gl("error", m, (g) => g.currentTarget.style.display = "none"), M(h, m);
    }, v = /* @__PURE__ */ ae(() => e.provider.icon.startsWith("http") || e.provider.icon.startsWith("/") || e.provider.icon.startsWith("data:")), f = (h) => {
      var m = sf(), g = J(m);
      He(() => Te(g, e.provider.icon)), M(h, m);
    };
    de(d, (h) => {
      l(v) ? h(c) : h(f, -1);
    });
  }
  var p = Y(i, 2);
  pr(p, 21, () => e.plugins, (h) => Oi(h), (h, m) => {
    {
      let g = /* @__PURE__ */ ae(() => e.selectedPluginKey === Oi(l(m)));
      rf(h, {
        get plugin() {
          return l(m);
        },
        get selected() {
          return l(g);
        },
        onSelect: () => e.onSelectPlugin(l(m)),
        onInstall: () => e.onInstall(l(m)),
        onUninstall: () => e.onUninstall(l(m)),
        onEnable: () => e.onEnable(l(m)),
        onDisable: () => e.onDisable(l(m))
      });
    }
  }), He(() => {
    Te(s, e.provider.name), Te(o, e.provider.description);
  }), M(n, t), qe();
}
var uf = /* @__PURE__ */ se('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), df = /* @__PURE__ */ se("<span> </span>"), cf = /* @__PURE__ */ se("<span> </span>"), ff = /* @__PURE__ */ se('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Active by default</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Requires document</span> <span class="bp-typo-16-regular"> </span></div>', 1), hf = /* @__PURE__ */ se('<p class="details-long-desc bp-typo-body svelte-yr5wcf"> </p>'), vf = /* @__PURE__ */ se('<button type="button" class="action-btn disable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Disable">Disable</button>'), pf = /* @__PURE__ */ se('<button type="button" class="action-btn enable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Enable">Enable</button>'), mf = /* @__PURE__ */ se('<button type="button" class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), gf = /* @__PURE__ */ se('<button type="button" class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), If = /* @__PURE__ */ se('<button type="button" class="action-btn install bp-typo-button svelte-yr5wcf">Install</button>'), bf = /* @__PURE__ */ se('<button type="button" class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), yf = /* @__PURE__ */ se('<button type="button" class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Af = /* @__PURE__ */ se('<button type="button" class="action-btn remove bp-typo-button svelte-yr5wcf">Remove</button> <!>', 1), Ef = /* @__PURE__ */ se('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row bp-typo-h1 svelte-yr5wcf"><span class="oscd-icons details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button type="button" class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <div class="details-kind-wrapper svelte-yr5wcf"><div class="badge badge-kind bp-typo-label"><span class="oscd-icons badge-icon"> </span> </div></div> <p class="details-short-desc bp-typo-body svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Provider</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Author</span> <span class="bp-typo-16-regular"> </span></div> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer"> </a></div> <!> <div class="details-actions svelte-yr5wcf"><div style="flex: 1"></div> <!></div></aside>');
function Cf(n, e) {
  Ke(e, !0);
  const t = /* @__PURE__ */ ae(() => e.plugin.builtin === !0), i = /* @__PURE__ */ ae(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ ae(() => e.plugin.installationState === "INSTALLED" || l(t) || l(i)), a = /* @__PURE__ */ ae(() => e.plugin.activationState === "ACTIVE"), s = /* @__PURE__ */ ae(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ ae(() => ao(l(s)));
  var o = Ef(), d = J(o), c = J(d), v = J(c), f = J(v), p = Y(v, 2), h = J(p), m = Y(p, 2), g = Y(c, 2), C = J(g), O = J(C), x = J(O), S = Y(O), w = Y(g, 2), L = J(w), D = Y(w, 2), b = J(D);
  {
    var T = (X) => {
      var H = uf();
      M(X, H);
    }, V = (X) => {
      var H = df(), Q = J(H);
      He(
        (ce) => {
          zn(H, 1, `badge badge-${ce ?? ""} bp-typo-button`, "svelte-yr5wcf"), Te(Q, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), M(X, H);
    };
    de(b, (X) => {
      l(t) || l(i) ? X(T) : X(V, -1);
    });
  }
  var ne = Y(b, 2);
  {
    var P = (X) => {
      var H = cf(), Q = J(H);
      He(
        (ce) => {
          zn(H, 1, `badge badge-${ce ?? ""} bp-typo-button`, "svelte-yr5wcf"), Te(Q, l(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), M(X, H);
    };
    de(ne, (X) => {
      l(r) && X(P);
    });
  }
  var B = Y(d, 2), Re = J(B), K = Y(J(Re), 2), k = J(K), U = Y(Re, 2), ee = Y(J(U), 2), ue = J(ee), N = Y(U, 2);
  {
    var z = (X) => {
      var H = ff(), Q = re(H), ce = Y(J(Q), 2), Ie = J(ce), pe = Y(Q, 2), he = Y(J(pe), 2), Be = J(he);
      He(() => {
        Te(Ie, e.plugin.activeByDefault ? "Yes" : "No"), Te(Be, e.plugin.requireDoc ? "Yes" : "No");
      }), M(X, H);
    };
    de(N, (X) => {
      l(t) && X(z);
    });
  }
  var te = Y(B, 2), Ve = Y(J(te), 2), Fe = J(Ve), ke = Y(te, 2);
  {
    var Ft = (X) => {
      var H = hf(), Q = J(H);
      He(() => Te(Q, e.plugin.longDescription)), M(X, H);
    };
    de(ke, (X) => {
      e.plugin.longDescription && X(Ft);
    });
  }
  var j = Y(ke, 2), le = Y(J(j), 2);
  {
    var I = (X) => {
      var H = ve(), Q = re(H);
      {
        var ce = (pe) => {
          var he = vf();
          He(() => Mn(he, "title", l(u))), M(pe, he);
        }, Ie = (pe) => {
          var he = pf();
          He(() => Mn(he, "title", l(u))), M(pe, he);
        };
        de(Q, (pe) => {
          l(a) ? pe(ce) : pe(Ie, -1);
        });
      }
      M(X, H);
    }, _ = (X) => {
      var H = ve(), Q = re(H);
      {
        var ce = (pe) => {
          var he = mf();
          vn("click", he, () => e.onDisable(e.plugin)), M(pe, he);
        }, Ie = (pe) => {
          var he = gf();
          vn("click", he, () => e.onEnable(e.plugin)), M(pe, he);
        };
        de(Q, (pe) => {
          l(a) ? pe(ce) : pe(Ie, -1);
        });
      }
      M(X, H);
    }, q = (X) => {
      var H = If();
      vn("click", H, () => e.onInstall(e.plugin)), M(X, H);
    }, ge = (X) => {
      var H = Af(), Q = re(H), ce = Y(Q, 2);
      {
        var Ie = (he) => {
          var Be = bf();
          vn("click", Be, () => e.onDisable(e.plugin)), M(he, Be);
        }, pe = (he) => {
          var Be = yf();
          vn("click", Be, () => e.onEnable(e.plugin)), M(he, Be);
        };
        de(ce, (he) => {
          l(a) ? he(Ie) : he(pe, -1);
        });
      }
      vn("click", Q, () => e.onUninstall(e.plugin)), M(X, H);
    };
    de(le, (X) => {
      l(i) ? X(I) : l(t) ? X(_, 1) : l(r) ? X(ge, -1) : X(q, 2);
    });
  }
  He(() => {
    Te(f, e.plugin.icon), Te(h, l(s)), Te(x, e.plugin.kindIcon), Te(S, ` ${e.plugin.kindText ?? ""}`), Te(L, e.plugin.description), Te(k, e.plugin.provider.name), Te(ue, e.plugin.author), Mn(Ve, "href", e.plugin.src), Te(Fe, e.plugin.src);
  }), vn("click", m, function(...X) {
    var H;
    (H = e.onClose) == null || H.apply(this, X);
  }), M(n, o), qe();
}
as(["click"]);
var Sf = /* @__PURE__ */ se("<!> <!> <!>", 1), xf = /* @__PURE__ */ se("<!> <!>", 1), Tf = /* @__PURE__ */ se("<!> <!>", 1), Lf = /* @__PURE__ */ se('<p class="error-message bp-typo-body svelte-1u53k0h"> </p>'), wf = /* @__PURE__ */ se('<div class="load-errors svelte-1u53k0h"></div>'), Mf = /* @__PURE__ */ se('<div class="loading bp-typo-16-regular svelte-1u53k0h">Loading plugins…</div>'), Of = /* @__PURE__ */ se('<div class="empty-state bp-typo-body svelte-1u53k0h">No plugins match your search.</div>'), Df = /* @__PURE__ */ se('<div class="plugins-hub bp-typo-body svelte-1u53k0h"><div class="hub-toolbar svelte-1u53k0h"><!> <!> <!> <!></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function Rf(n, e) {
  Ke(e, !0);
  let t = /* @__PURE__ */ fe(Oe([])), i = /* @__PURE__ */ fe(Oe([])), r = /* @__PURE__ */ fe(!0), a = /* @__PURE__ */ fe(Oe([])), s = /* @__PURE__ */ fe(null), u = /* @__PURE__ */ fe(""), o = /* @__PURE__ */ fe("all"), d = /* @__PURE__ */ fe("all"), c = /* @__PURE__ */ fe("all"), v;
  const f = Jc;
  let p = [], h = !1, m = null;
  async function g() {
    if (!h) {
      if (m) {
        await m;
        return;
      }
      m = (async () => {
        G(a, [], !0), p = await wc(f);
        for (const I of p)
          I.error && G(
            a,
            [
              ...l(a),
              `Error loading Provider '${I.provider.name}': ${I.error}`
            ],
            !0
          );
        h = !0;
      })(), await m;
    }
  }
  async function C() {
    !h && G(r, !0);
    const _ = Rc(e.plugins);
    await g();
    const q = l(s) ? Oi(l(s)) : null, ge = [], X = [], H = Kc(_);
    for (const Ie of H)
      X.push(Ie.provider), ge.push(...Ie.plugins);
    for (const Ie of p) {
      X.push(Ie.provider);
      for (const pe of Ie.plugins)
        ge.push(fs(pe, Ie.provider, _));
    }
    const Q = qc(ge), ce = Qc(_, Q);
    ce.length >= 1 && (X.push(ji), ge.push(...ce)), G(i, X, !0), G(t, Pc(ge), !0), q && G(s, l(t).find((Ie) => Oi(Ie) === q) ?? null, !0), G(r, !1);
  }
  function O(I) {
    var _;
    return ((_ = I == null ? void 0 : I.provider) == null ? void 0 : _.name) === ji.name;
  }
  Pe(() => {
    e.plugins, C();
  });
  function x(I) {
    return l(S).filter((_) => _.provider.name === I);
  }
  const S = /* @__PURE__ */ ae(() => l(t).filter((I) => {
    var H;
    const _ = !l(u) || I.name.toLowerCase().includes(l(u).toLowerCase()) || I.description.toLowerCase().includes(l(u).toLowerCase()), q = l(o) === "all" || l(o) === "installed" && I.installationState === "INSTALLED" || l(o) === "available" && I.installationState === "AVAILABLE", ge = l(d) === "all" || ((H = I.provider) == null ? void 0 : H.name) === l(d), X = l(c) === "all" || I.kind === l(c);
    return _ && q && ge && X;
  }));
  function w(I) {
    if (I.builtin || I.shadowedByHostBuiltin)
      return;
    G(t, kc(l(t), I), !0);
    const _ = l(t).find((q) => $t(q, I));
    l(s) && $t(l(s), I) && G(s, _ ?? null, !0), _ && ne(_);
  }
  function L(I) {
    const _ = l(t).find((H) => $t(H, I));
    if (_ != null && _.builtin || _ != null && _.shadowedByHostBuiltin)
      return;
    if (O(_)) {
      G(t, l(t).filter((H) => !$t(H, I)), !0), l(t).some((H) => O(H)) || (l(d) === ji.name && G(d, "all"), setTimeout(
        () => {
          G(i, l(i).filter((H) => H.name !== ji.name), !0);
        },
        1
      )), l(s) && $t(l(s), I) && G(s, null), _ && ne(_, !0);
      return;
    }
    const { updated: q, success: ge } = Fc(l(t), I);
    G(t, q, !0);
    const X = l(t).find((H) => $t(H, I));
    l(s) && $t(l(s), I) && G(s, X ?? null, !0), _ && ge && ne(_, !0);
  }
  function D(I) {
    if (I.shadowedByHostBuiltin)
      return;
    G(t, Bc(l(t), I), !0);
    const _ = l(t).find((q) => $t(q, I));
    l(s) && $t(l(s), I) && G(s, _ ?? null, !0), _ && ne(_);
  }
  function b(I) {
    if (I.shadowedByHostBuiltin)
      return;
    G(t, Uc(l(t), I), !0);
    const _ = l(t).find((q) => $t(q, I));
    l(s) && $t(l(s), I) && G(s, _ ?? null, !0), _ && ne(_);
  }
  function T(I) {
    G(s, l(s) && $t(l(s), I) ? null : I, !0);
  }
  function V() {
    G(s, null);
  }
  function ne(I, _ = !1) {
    var ce;
    const q = I.builtin === !0 ? l(t).find((Ie) => {
      var pe;
      return ((pe = Ie.provider) == null ? void 0 : pe.source) === "builtin" && Ie.name === I.name && Ie.kind === I.kind;
    }) : void 0, ge = I.builtin === !0 ? I.name : ar(I.provider, I.name), X = I.builtin === !0 ? (q == null ? void 0 : q.src) ?? I.src : I.src, H = _ ? { name: ge, kind: I.kind, config: null } : {
      name: ge,
      kind: I.kind,
      config: {
        name: ge,
        author: I.author || ((ce = I.provider) == null ? void 0 : ce.name),
        src: X,
        icon: I.icon,
        kind: I.kind,
        description: I.description,
        requireDoc: I.requireDoc ?? !0,
        position: I.position || (I.kind === "menu" ? "middle" : void 0),
        active: I.activationState === "ACTIVE",
        activeByDefault: (q == null ? void 0 : q.activeByDefault) ?? I.activeByDefault,
        installed: I.installationState === "INSTALLED"
      }
    }, Q = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: H });
    v.dispatchEvent(Q);
  }
  var P = Df(), B = J(P), Re = J(B);
  qd(Re, {
    label: "Search plugins",
    placeholder: "Search...",
    variant: "outlined",
    style: "flex: 1; background: var(--bearingpoint-color-surface)",
    get value() {
      return l(u);
    },
    set value(_) {
      G(u, _, !0);
    },
    leadingIcon: (_) => {
      xc(_, {
        children: (q, ge) => {
          var X = pt("search");
          M(q, X);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { leadingIcon: !0 }
  });
  var K = Y(Re, 2);
  ya(K, {
    style: "background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return l(o);
    },
    set value(I) {
      G(o, I, !0);
    },
    children: (I, _) => {
      var q = Sf(), ge = re(q);
      gi(ge, {
        value: "all",
        children: (Q, ce) => {
          var Ie = pt("All status");
          M(Q, Ie);
        },
        $$slots: { default: !0 }
      });
      var X = Y(ge, 2);
      gi(X, {
        value: "installed",
        children: (Q, ce) => {
          var Ie = pt("Installed");
          M(Q, Ie);
        },
        $$slots: { default: !0 }
      });
      var H = Y(X, 2);
      gi(H, {
        value: "available",
        children: (Q, ce) => {
          var Ie = pt("Available");
          M(Q, Ie);
        },
        $$slots: { default: !0 }
      }), M(I, q);
    },
    $$slots: { default: !0 }
  });
  var k = Y(K, 2);
  ya(k, {
    style: "width:300px; background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return l(d);
    },
    set value(I) {
      G(d, I, !0);
    },
    children: (I, _) => {
      var q = xf(), ge = re(q);
      gi(ge, {
        value: "all",
        children: (H, Q) => {
          var ce = pt("All contributors");
          M(H, ce);
        },
        $$slots: { default: !0 }
      });
      var X = Y(ge, 2);
      pr(X, 17, () => l(i), fa, (H, Q) => {
        gi(H, {
          get value() {
            return l(Q).name;
          },
          children: (ce, Ie) => {
            var pe = pt();
            He(() => Te(pe, l(Q).name)), M(ce, pe);
          },
          $$slots: { default: !0 }
        });
      }), M(I, q);
    },
    $$slots: { default: !0 }
  });
  var U = Y(k, 2);
  ya(U, {
    style: "background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return l(c);
    },
    set value(I) {
      G(c, I, !0);
    },
    children: (I, _) => {
      var q = Tf(), ge = re(q);
      gi(ge, {
        value: "all",
        children: (H, Q) => {
          var ce = pt("All kinds");
          M(H, ce);
        },
        $$slots: { default: !0 }
      });
      var X = Y(ge, 2);
      pr(X, 17, () => ds, fa, (H, Q) => {
        gi(H, {
          get value() {
            return l(Q);
          },
          children: (ce, Ie) => {
            var pe = pt();
            He((he) => Te(pe, he), [
              () => l(Q).charAt(0).toUpperCase() + l(Q).slice(1)
            ]), M(ce, pe);
          },
          $$slots: { default: !0 }
        });
      }), M(I, q);
    },
    $$slots: { default: !0 }
  });
  var ee = Y(B, 2);
  {
    var ue = (I) => {
      var _ = wf();
      pr(_, 21, () => l(a), fa, (q, ge) => {
        var X = Lf(), H = J(X);
        He(() => Te(H, `⚠️ ${l(ge) ?? ""}`)), M(q, X);
      }), M(I, _);
    };
    de(ee, (I) => {
      l(a).length > 0 && I(ue);
    });
  }
  var N = Y(ee, 2);
  let z;
  var te = J(N), Ve = J(te);
  {
    var Fe = (I) => {
      var _ = Mf();
      M(I, _);
    }, ke = (I) => {
      var _ = Of();
      M(I, _);
    }, Ft = (I) => {
      var _ = ve(), q = re(_);
      pr(q, 17, () => l(i), (ge) => ge.name, (ge, X) => {
        const H = /* @__PURE__ */ ae(() => x(l(X).name));
        var Q = ve(), ce = re(Q);
        {
          var Ie = (pe) => {
            {
              let he = /* @__PURE__ */ ae(() => l(s) ? Oi(l(s)) : null);
              of(pe, {
                get provider() {
                  return l(X);
                },
                get plugins() {
                  return l(H);
                },
                get selectedPluginKey() {
                  return l(he);
                },
                onSelectPlugin: T,
                onInstall: w,
                onUninstall: L,
                onEnable: D,
                onDisable: b
              });
            }
          };
          de(ce, (pe) => {
            l(H).length > 0 && pe(Ie);
          });
        }
        M(ge, Q);
      }), M(I, _);
    };
    de(Ve, (I) => {
      l(r) ? I(Fe) : l(S).length === 0 ? I(ke, 1) : I(Ft, -1);
    });
  }
  var j = Y(te, 2);
  {
    var le = (I) => {
      Cf(I, {
        get plugin() {
          return l(s);
        },
        onClose: V,
        onInstall: w,
        onUninstall: L,
        onEnable: D,
        onDisable: b
      });
    };
    de(j, (I) => {
      l(s) !== null && I(le);
    });
  }
  we(P, (I) => v = I, () => v), He(() => z = zn(N, 1, "hub-body svelte-1u53k0h", null, z, { "with-details": l(s) !== null })), M(n, P), qe();
}
function _f(n, e) {
  Rf(n, {
    get plugins() {
      return e.plugins;
    }
  });
}
const Pf = "plugins-hub", kf = "0.0.1";
var Yi;
class Hf extends HTMLElement {
  constructor() {
    super();
    ye(this, Yi);
    this.targetDiv = null, this.originalStyles = {}, Ce(this, Yi, /* @__PURE__ */ fe(Oe({ doc: void 0, editCount: void 0, plugins: void 0 })));
  }
  get props() {
    return l(A(this, Yi));
  }
  set props(t) {
    G(A(this, Yi), t, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.plugins = this._plugins;
    const t = this.shadowRoot;
    if (!t)
      throw new Error("ShadowRoot not found");
    t.appendChild(Bf()), Vu(_f, { target: t, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
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
  set plugins(t) {
    this._plugins = t, this.props.plugins = t;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const t = so();
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
const Ff = ".plugin-card.svelte-1myq0bn{background:var(--bearingpoint-color-surface);border:1px solid var(--bearingpoint-color-border);border-radius:6px;padding:12px;cursor:pointer;transition:border-color .15s,box-shadow .15s;display:flex;flex-direction:column;gap:6px;-webkit-user-select:none;user-select:none}.plugin-card.svelte-1myq0bn:hover{border-color:var(--bearingpoint-color-border-hover)}.plugin-card.selected.svelte-1myq0bn{border-color:var(--bearingpoint-color-border-strong);box-shadow:0 0 0 1px var(--bearingpoint-color-border-strong)}.card-top.svelte-1myq0bn{display:flex;align-items:flex-start;justify-content:space-between}.plugin-icon-wrapper.svelte-1myq0bn{margin:auto 0;width:28px;height:28px;display:flex;align-items:center;justify-content:center}.plugin-icon.svelte-1myq0bn{width:28px;height:28px;object-fit:contain}.plugin-name.svelte-1myq0bn{color:var(--bearingpoint-color-text-dark)}.plugin-description.svelte-1myq0bn{display:-webkit-box;line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.plugin-kind-wrapper.svelte-1myq0bn{display:flex;flex-wrap:wrap;gap:4px}.plugin-badges.svelte-1myq0bn{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}.provider-card.svelte-1ttjeex{background:var(--bearingpoint-color-surface);border:none;border-radius:8px;padding:20px 20px 16px;box-shadow:none}.provider-header.svelte-1ttjeex{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.provider-info.svelte-1ttjeex{display:flex;flex-direction:column;gap:2px}.provider-name.svelte-1ttjeex{margin:0}.provider-description.svelte-1ttjeex{color:var(--bearingpoint-color-text-secondary)}.provider-icon.svelte-1ttjeex{height:40px;object-fit:contain;border-radius:4px}.plugins-grid.svelte-1ttjeex{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}.plugin-details.svelte-yr5wcf{width:440px;min-width:280px;border-left:1px solid var(--bearingpoint-color-border);background:var(--bearingpoint-color-surface);display:flex;flex-direction:column;overflow-y:auto;padding:20px;gap:24px}.details-header.svelte-yr5wcf{display:flex;flex-direction:column;gap:4px}.details-title-row.svelte-yr5wcf{display:flex;align-items:center;gap:8px}.details-icon.svelte-yr5wcf{width:24px;height:24px;object-fit:contain}.details-name.svelte-yr5wcf{flex:1;margin:0;color:var(--bearingpoint-color-text-dark)}.close-btn.svelte-yr5wcf{background:none;border:none;font-size:var(--bearingpoint-text-h1-size);cursor:pointer;color:var(--bearingpoint-color-text-secondary);padding:0 2px;line-height:1}.close-btn.svelte-yr5wcf:hover{color:var(--bearingpoint-color-text-dark)}.details-short-desc.svelte-yr5wcf{margin:0}.details-kind-wrapper.svelte-yr5wcf{display:flex;flex-wrap:wrap;gap:4px}.details-badges.svelte-yr5wcf{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}.details-meta.svelte-yr5wcf{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0}.meta-item.svelte-yr5wcf{display:flex;flex-direction:column;gap:2px}.meta-label.svelte-yr5wcf{color:var(--bearingpoint-color-text-secondary)}.details-url.svelte-yr5wcf{display:flex;flex-direction:column;gap:4px}.details-long-desc.svelte-yr5wcf{margin:0}.details-actions.svelte-yr5wcf{display:flex;gap:8px;margin-top:auto;padding-top:16px;border-top:1px solid var(--bearingpoint-color-border)}.action-btn.svelte-yr5wcf{flex:0;padding-right:12px;padding-left:12px}.mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface, #fff)}.mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-banner__content,.mdc-banner__fixed{min-width:344px}@media (max-width: 480px),(max-width: 344px){.mdc-banner__content,.mdc-banner__fixed{min-width:100%}}.mdc-banner__content{max-width:720px}.mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media (max-width: 480px){.mdc-banner .mdc-banner__fixed{left:0;right:0}.mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}[dir=rtl] .mdc-banner .mdc-banner__text,.mdc-banner .mdc-banner__text[dir=rtl]{margin-left:36px;margin-right:16px}}@media (max-width: 480px){.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}[dir=rtl] .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text,.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}.mdc-banner--opening,.mdc-banner--open,.mdc-banner--closing{display:flex}.mdc-banner--open{transition:height .3s ease}.mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}.mdc-banner--closing{transition:height .25s ease}.mdc-banner--closing .mdc-banner__content{transition:transform .25s ease}.mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}.mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}.mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}.mdc-banner__graphic-text-wrapper{display:flex;width:100%}.mdc-banner__graphic{margin:16px 0 16px 16px;flex-shrink:0;text-align:center}[dir=rtl] .mdc-banner__graphic,.mdc-banner__graphic[dir=rtl]{margin-left:0;margin-right:16px}.mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}.mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}[dir=rtl] .mdc-banner__text,.mdc-banner__text[dir=rtl]{margin-left:90px;margin-right:24px}.mdc-banner__actions{padding:8px 8px 8px 0;align-self:flex-end;display:flex;flex-shrink:0}[dir=rtl] .mdc-banner__actions,.mdc-banner__actions[dir=rtl]{padding-left:8px;padding-right:0}.mdc-banner{background-color:#fff;border-bottom-color:#0000001f;border-bottom-width:1px;border-radius:0}.mdc-banner .mdc-banner__text{color:#000}.mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;font-size:.875rem;font-family:Roboto,sans-serif;font-weight:400;line-height:1.25rem}.mdc-banner .mdc-banner__graphic{border-radius:50%}.mdc-banner .mdc-banner__graphic{height:40px;width:40px}.mdc-banner .mdc-banner__fixed{background-color:#fff}.mdc-banner .mdc-banner__fixed{border-bottom-color:#0000001f}.mdc-banner .mdc-banner__fixed{border-bottom-width:1px}.mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, #6200ee)}.mdc-banner .mdc-button .mdc-button__ripple:before,.mdc-banner .mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, #6200ee)}.mdc-banner .mdc-button:hover .mdc-button__ripple:before,.mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, .04)}.mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, .12)}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity, .1)}.mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, .1)}.mdc-banner__secondary-action{margin-left:0;margin-right:8px}[dir=rtl] .mdc-banner__secondary-action,.mdc-banner__secondary-action[dir=rtl]{margin-left:8px;margin-right:0}.smui-banner--force-show{display:flex!important}.mdc-banner--closing,.mdc-banner--opening{overflow-y:hidden}.mdc-banner__actions{align-self:center}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:#0000}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px);display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring:after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring:after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring:after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none)}.mdc-button{padding:0 8px}.mdc-button--unelevated{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);padding:0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);padding:0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border .28s cubic-bezier(.4,0,.2,1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:#0000}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button .mdc-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-button .mdc-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button__ripple{position:absolute;box-sizing:content-box;overflow:hidden;z-index:0;top:0;left:0;bottom:0;right:0}.mdc-button{font-family:Roboto,sans-serif;font-family:var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-text-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #6200ee))}.mdc-button:disabled{color:#00000061;color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-text-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-text-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-text-button-with-icon-icon-size, 1.125rem)}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-button:hover .mdc-button__ripple:before,.mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, .04)}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, .12)}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-pressed-state-layer-opacity, .12)}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, .12)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated{font-family:Roboto,sans-serif;font-family:var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-filled-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--unelevated:disabled{background-color:#0000001f;background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, .12))}.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:disabled{color:#00000061;color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-filled-button-with-icon-icon-size, 1.125rem)}.mdc-button--unelevated .mdc-button__ripple:before,.mdc-button--unelevated .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:hover .mdc-button__ripple:before,.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-filled-button-hover-state-layer-opacity, .08)}.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-filled-button-focus-state-layer-opacity, .24)}.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-filled-button-pressed-state-layer-opacity, .24)}.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-filled-button-pressed-state-layer-opacity, .24)}.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised{font-family:Roboto,sans-serif;font-family:var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-protected-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));--mdc-elevation-box-shadow-for-gss:0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;box-shadow:var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:not(:disabled){background-color:#6200ee;background-color:var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--raised:disabled{background-color:#0000001f;background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, .12))}.mdc-button--raised:not(:disabled){color:#fff;color:var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:disabled{color:#00000061;color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--raised .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-protected-button-with-icon-icon-size, 1.125rem)}.mdc-button--raised .mdc-button__ripple:before,.mdc-button--raised .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:hover .mdc-button__ripple:before,.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-protected-button-hover-state-layer-opacity, .08)}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-protected-button-focus-state-layer-opacity, .24)}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-protected-button-pressed-state-layer-opacity, .24)}.mdc-button--raised.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-protected-button-pressed-state-layer-opacity, .24)}.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised.mdc-ripple-upgraded--background-focused,.mdc-button--raised:not(.mdc-ripple-upgraded):focus{--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;box-shadow:var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:hover{--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;box-shadow:var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:not(:disabled):active{--mdc-elevation-box-shadow-for-gss:0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;box-shadow:var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:disabled{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;box-shadow:var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--outlined{font-family:Roboto,sans-serif;font-family:var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-outlined-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--outlined:disabled{color:#00000061;color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem)}.mdc-button--outlined .mdc-button__ripple:before,.mdc-button--outlined .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--outlined:hover .mdc-button__ripple:before,.mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-outlined-button-hover-state-layer-opacity, .04)}.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-outlined-button-focus-state-layer-opacity, .12)}.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, .12)}.mdc-button--outlined.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, .12)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--outlined:not(:disabled){border-color:#0000001f;border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, .12))}.mdc-button--outlined:disabled{border-color:#0000001f;border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, .12))}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined .mdc-button__touch{left:-1px;left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2px);width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:before,.mdc-ripple-surface:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface:before,.mdc-ripple-surface:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-upgraded--unbounded:before,.mdc-ripple-upgraded--unbounded:after{top:0%;left:0%;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface:before,.mdc-ripple-surface:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover:before,.mdc-ripple-surface.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--primary:before,.smui-ripple-surface--primary:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.smui-ripple-surface--primary:hover:before,.smui-ripple-surface--primary.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--secondary:before,.smui-ripple-surface--secondary:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.smui-ripple-surface--secondary:hover:before,.smui-ripple-surface--secondary.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-ripple-surface--secondary.mdc-ripple-upgraded--background-focused:before,.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button--color-secondary:not(:disabled){color:#018786}.smui-button--color-secondary:not(:disabled) .mdc-button__icon{color:#018786}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#018786}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.smui-button--color-secondary.mdc-button--raised .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-text-primary-on-dark, white))}.smui-button--color-secondary.mdc-button--raised:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff}.smui-button--color-secondary.mdc-button--raised:not(:disabled) .mdc-button__icon,.smui-button--color-secondary.mdc-button--unelevated:not(:disabled) .mdc-button__icon{color:#fff}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#018786}.smui-button--color-secondary .mdc-button__ripple:before,.smui-button--color-secondary .mdc-button__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, #018786)}.smui-button--color-secondary:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-button--color-secondary:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button,.smui-button__group>.smui-button__group-item>.mdc-button{margin-left:0;margin-right:0}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.mdc-button:not(:last-child)>.mdc-button__ripple,.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button,.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button>.mdc-button__ripple{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.mdc-button:not(:first-child)>.mdc-button__ripple,.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button,.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button>.mdc-button__ripple{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{border-radius:4px;border-radius:var(--mdc-shape-small, 4px);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-button__group>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised{border-radius:4px;border-radius:var(--mdc-shape-small, 4px);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised .mdc-button__ripple,.smui-button__group>.smui-button__group-item>.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);position:relative;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card:after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-card:after{border-color:CanvasText}}.mdc-card--outlined{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card--outlined:after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media:before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square:before{margin-top:100%}.mdc-card__media--16-9:before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:#0009;flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:#0009}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-card__primary-action .mdc-card__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-card__primary-action .mdc-card__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded .mdc-card__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation .mdc-card__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation .mdc-card__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-card__primary-action:hover .mdc-card__ripple:before,.mdc-card__primary-action.mdc-ripple-surface--hover .mdc-card__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused .mdc-card__ripple:before,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus .mdc-card__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-card__primary-action:not(.mdc-ripple-upgraded) .mdc-card__ripple:after{transition:opacity .15s linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active .mdc-card__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-card__primary-action .mdc-card__ripple{box-sizing:content-box;height:100%;overflow:hidden;left:0;pointer-events:none;position:absolute;top:0;width:100%}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:after,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:5px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:after,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:after{border-color:CanvasText}}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button:disabled{color:#00000061;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, .38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:#0000;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on,.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button .mdc-icon-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple:before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-icon-button .mdc-icon-button__ripple{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:-1}.mdc-icon-button.smui-icon-button--size-mini{width:48px;height:48px;font-size:24px;width:40px;height:40px;padding:8px}.mdc-icon-button.smui-icon-button--size-mini svg,.mdc-icon-button.smui-icon-button--size-mini img{width:24px;height:24px}.mdc-icon-button.smui-icon-button--size-mini .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:40px;max-width:40px}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin:0}.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button.smui-icon-button--size-mini .mdc-icon-button__touch{position:absolute;top:50%;height:40px;left:50%;width:40px;transform:translate(-50%,-50%)}.mdc-icon-button.smui-icon-button--size-button{font-size:18px;width:36px;height:36px;padding:6px}.mdc-icon-button.smui-icon-button--size-button svg,.mdc-icon-button.smui-icon-button--size-button img{width:18px;height:18px}.mdc-icon-button.smui-icon-button--size-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin:0}.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-icon-button.smui-icon-button--size-button .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%,-50%)}.mdc-icon-button svg{pointer-events:none}.smui-card--padded,.smui-card__content,.smui-card__primary-action--padded{padding:16px}.mdc-checkbox{padding:11px;padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:0;margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:11px;top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:11px;left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:0;top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:0;right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:0;left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}to{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#00000061;border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, .38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:#00000061;background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, .38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}to{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:rotate(0);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(0);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,to{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring:after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring:after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring:after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:#0000;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(.4,0,.6,1),border-color 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity .18s 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset .18s 0ms cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(.4,0,.6,1),transform 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:.18s;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path .18s linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark .3s linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0,0,.2,1),background-color 90ms 0ms cubic-bezier(0,0,.2,1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:4px;margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:-4px;right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:-4px;left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity .18s 0ms cubic-bezier(0,0,.2,1),transform .18s 0ms cubic-bezier(0,0,.2,1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(.4,0,.6,1),transform 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox .mdc-checkbox__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-checkbox .mdc-checkbox__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox{z-index:0}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-unselected-icon-color, GrayText);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:GrayText;background-color:var(--mdc-checkbox-disabled-selected-icon-color, GrayText)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:ButtonText;color:var(--mdc-checkbox-selected-checkmark-color, ButtonText)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:ButtonText;border-color:var(--mdc-checkbox-selected-checkmark-color, ButtonText)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:ButtonFace;color:var(--mdc-checkbox-disabled-selected-checkmark-color, ButtonFace)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:ButtonFace;border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, ButtonFace)}}.mdc-deprecated-chip-trailing-action__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-deprecated-chip-trailing-action{border:none;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;padding:0;outline:none;cursor:pointer;-webkit-appearance:none;background:none}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__touch{width:26px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{fill:currentColor;color:inherit}.mdc-deprecated-chip-trailing-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--unbounded .mdc-deprecated-chip-trailing-action__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-chip-trailing-action__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-chip-trailing-action__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-deprecated-chip-trailing-action:hover .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action.mdc-ripple-surface--hover .mdc-deprecated-chip-trailing-action__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--background-focused .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):focus .mdc-deprecated-chip-trailing-action__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded) .mdc-deprecated-chip-trailing-action__ripple:after{transition:opacity .15s linear}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):active .mdc-deprecated-chip-trailing-action__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-chip__icon--leading{color:#0000008a}.mdc-deprecated-chip-trailing-action{color:#000}.mdc-chip__icon--trailing{color:#0000008a}.mdc-chip__icon--trailing:hover{color:#0000009e}.mdc-chip__icon--trailing:focus{color:#000000de}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-deprecated-chip-trailing-action{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-deprecated-chip-trailing-action,.mdc-deprecated-chip-trailing-action[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-chip__icon--trailing,.mdc-chip__icon--trailing[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;background-color:#e0e0e0;color:#000000de;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);height:32px;position:relative;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip:hover{color:#000000de}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:4px;margin-right:-4px}.mdc-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}.mdc-chip__overflow{text-overflow:ellipsis;overflow:hidden}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset .15s 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__primary-action:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:#6200ee8a}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width .15s cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}.mdc-chip{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-chip .mdc-chip__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-chip .mdc-chip__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-chip:hover .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-surface--hover .mdc-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-surface--hover .mdc-chip__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}@keyframes mdc-chip-entry{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}.smui-chip-set--non-interactive .mdc-chip{cursor:initial;color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-chip-trailing-action{opacity:.7}.mdc-deprecated-chip-trailing-action:focus{opacity:1}.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:#0000}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.5682352941176s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:after{margin-left:1px;margin-right:0;content:\"*\"}[dir=rtl] .mdc-floating-label--required:after,.mdc-floating-label--required[dir=rtl]:after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard .25s 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translate(calc(0 + -0%)) translateY(-106%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-106%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-106%) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-106%) scale(.75)}}.mdc-line-ripple:before,.mdc-line-ripple:after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple:before{border-bottom-width:1px}.mdc-line-ripple:before{z-index:1}.mdc-line-ripple:after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple:after{transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1)}.mdc-line-ripple--active:after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating:after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:#000000de}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:#0009}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#6200eede}.mdc-select.mdc-select--disabled .mdc-floating-label{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#0000008a}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:#00000061}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:#0009}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:#0000008a}.mdc-select.mdc-select--disabled .mdc-select__icon{color:#00000061}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item,[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity .1005s linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-select__selected-text-container{display:flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:#0000;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu:before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option,[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:36px;content:\"\";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end,[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor:before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0;border-top-right-radius:0}.mdc-select--filled.mdc-select--focused.mdc-line-ripple:after{transform:scaleY(2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100%/.75 - 96px/.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports (top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - (max(12px,var(--mdc-shape-small, 4px))*2))}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports (top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#00000061}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#000000de}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:#0000000f}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined .25s 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor:before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:#0000}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translate(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translate(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translate(-32px) scale(.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translate(32px) scale(.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% - 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% - 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% + 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% + 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select__anchor .mdc-select__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-select__anchor:hover .mdc-select__ripple:before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple:before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select-helper-text{margin:0 16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity .18s cubic-bezier(.4,0,.2,1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;flex-shrink:0;align-self:center;background-color:#0000;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon,[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.smui-floating-label--remove-transition{transition:unset!important}.smui-floating-label--force-size{position:absolute!important;transform:unset!important}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list-item__secondary-text{color:#0000008a;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54))}.mdc-deprecated-list-item__graphic{background-color:transparent}.mdc-deprecated-list-item__graphic{color:#00000061;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, .38))}.mdc-deprecated-list-item__meta{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text{opacity:.38}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__secondary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item--selected,.mdc-deprecated-list-item--activated,.mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list-item__wrapper{display:block}.mdc-deprecated-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0 16px;height:48px}.mdc-deprecated-list-item:focus{outline:none}.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus:before,.mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus:before,.mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused:before{border-color:CanvasText}}.mdc-deprecated-list-item.mdc-deprecated-list-item--selected:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-deprecated-list-item.mdc-deprecated-list-item--selected:before{border-color:CanvasText}}[dir=rtl] .mdc-deprecated-list-item,.mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--image-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item{padding-left:0;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--video-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:20px;height:20px}[dir=rtl] .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;object-fit:cover;margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:56px;height:56px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:100px;height:56px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list .mdc-deprecated-list-item__graphic{display:inline-flex}.mdc-deprecated-list-item__meta{margin-left:auto;margin-right:0}.mdc-deprecated-list-item__meta:not(.material-icons){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-deprecated-list-item[dir=rtl] .mdc-deprecated-list-item__meta,[dir=rtl] .mdc-deprecated-list-item .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-deprecated-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:40px}.mdc-deprecated-list--two-line .mdc-deprecated-list-item__text{align-self:flex-start}.mdc-deprecated-list--two-line .mdc-deprecated-list-item{height:64px}.mdc-deprecated-list--two-line.mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{height:72px}.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{align-self:flex-start;margin-top:16px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:36px;height:36px}[dir=rtl] .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{cursor:pointer}a.mdc-deprecated-list-item{color:inherit;text-decoration:none}.mdc-deprecated-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-deprecated-list-divider{border-bottom-color:#0000001f}.mdc-deprecated-list-divider--padded{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list-divider--inset,.mdc-deprecated-list-divider--inset[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading{margin-left:88px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:88px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:88px;margin-right:0;width:calc(100% - 104px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:88px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading{margin-left:116px;margin-right:0;width:calc(100% - 116px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:116px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:116px;margin-right:0;width:calc(100% - 132px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:116px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:0;margin-right:0;width:calc(100% + -0px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:0;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:0}.mdc-deprecated-list-group .mdc-deprecated-list{padding:0}.mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:.75rem 16px}.mdc-list-item__primary-text{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mdc-list-item__secondary-text{color:#0000008a;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54))}.mdc-list-item__overline-text{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{background-color:transparent}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:#00000061;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, .38))}.mdc-list-item__end{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:.38}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text,.mdc-list-item--disabled .mdc-list-item__overline-text,.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--disabled.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--selected .mdc-list-item__primary-text,.mdc-list-item--activated .mdc-list-item__primary-text,.mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-deprecated-list-group__subheader{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-list-divider:after{content:\"\";display:block;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#fff}}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item__wrapper{display:block}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer}.mdc-list-item:focus{outline:none}.mdc-list-item.mdc-list-item--with-one-line{height:48px}.mdc-list-item.mdc-list-item--with-two-lines{height:64px}.mdc-list-item.mdc-list-item--with-three-lines{height:88px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end,.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--disabled,.mdc-list-item.mdc-list-item--non-interactive{cursor:auto}.mdc-list-item:not(.mdc-list-item--selected):focus:before,.mdc-list-item.mdc-ripple-upgraded--background-focused:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item:not(.mdc-list-item--selected):focus:before,.mdc-list-item.mdc-ripple-upgraded--background-focused:before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:focus:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:focus:before{border-color:CanvasText}}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__content[for]{pointer-events:none}.mdc-list-item__primary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item__overline-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-overline-font-size, .75rem);line-height:2rem;line-height:var(--mdc-typography-overline-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-overline-font-weight, 500);letter-spacing:.1666666667em;letter-spacing:var(--mdc-typography-overline-letter-spacing, .1666666667em);text-decoration:none;text-decoration:var(--mdc-typography-overline-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-overline-text-transform, uppercase);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start,.mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{border-radius:50%}.mdc-list-item--with-leading-icon .mdc-list-item__start{width:24px;height:24px}.mdc-list-item--with-leading-icon.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl]{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-thumbnail.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item,.mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start,.mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-image.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item,.mdc-list-item--with-leading-image.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-image .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start,.mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-image .mdc-list-item__start{width:56px;height:56px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-one-line,.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-video.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item,.mdc-list-item--with-leading-video.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{margin-left:0;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start,.mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{width:100px;height:56px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-one-line,.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-checkbox.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-radio.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-radio .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-switch.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item,.mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-switch .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start,.mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-switch .mdc-list-item__start{width:36px;height:20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item,.mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-icon .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-icon .mdc-list-item__end{width:24px;height:24px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item,.mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-radio .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-switch.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item,.mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-switch .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end,.mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-switch .mdc-list-item__end{width:36px;height:20px}.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item,[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list-group .mdc-deprecated-list{padding:0}.mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:.75rem 16px}.mdc-list-divider{background-color:#0000001f}.mdc-list-divider{height:1px}.mdc-list-divider{padding:0;background-clip:content-box}.mdc-list-divider.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset{padding-left:16px;padding-right:auto}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset,.mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset{padding-left:auto;padding-right:16px}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset,.mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl]{padding-left:16px;padding-right:auto}.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-divider,.mdc-list-divider[dir=rtl]{padding:0}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-deprecated-list-item--disabled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-list-item--disabled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list-item--disabled .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-list-item--disabled .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.smui-list--three-line .mdc-deprecated-list-item__text{align-self:flex-start}.smui-list--three-line .mdc-deprecated-list-item{height:88px}.smui-list--three-line.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:76px}.mdc-deprecated-list-item.smui-menu-item--non-interactive{cursor:auto}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px) );max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px) );margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1),height .25s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}.mdc-menu{min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}.mdc-menu .mdc-deprecated-list-item__meta,.mdc-menu .mdc-deprecated-list-item__graphic{color:#000000de}.mdc-menu .mdc-menu-item--submenu-open .mdc-deprecated-list-item__ripple:before{opacity:.04}.mdc-menu .mdc-menu-item--submenu-open .mdc-list-item__ripple:before{opacity:.04}.mdc-menu .mdc-deprecated-list{color:#000000de}.mdc-menu .mdc-deprecated-list,.mdc-menu .mdc-list{position:relative}.mdc-menu .mdc-deprecated-list .mdc-elevation-overlay,.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-deprecated-list-divider{margin:8px 0}.mdc-menu .mdc-deprecated-list-item{-webkit-user-select:none;user-select:none}.mdc-menu .mdc-deprecated-list-item--disabled{cursor:auto}.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__text,.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-deprecated-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-deprecated-list-item,.mdc-menu__selection-group .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-menu__selection-group .mdc-list-item__graphic.mdc-menu__selection-group-icon{display:none}.mdc-menu-item--selected .mdc-list-item__graphic.mdc-menu__selection-group-icon{display:inline}.mdc-select--activated{z-index:8}.smui-select--standard .mdc-select__dropdown-icon{margin-left:26px;margin-right:0}[dir=rtl] .smui-select--standard .mdc-select__dropdown-icon,.smui-select--standard .mdc-select__dropdown-icon[dir=rtl]{margin-left:0;margin-right:26px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{position:relative;margin:0 -24px 0 0;left:-36px;right:initial}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:-24px;margin-right:0}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{left:initial;right:-36px}.smui-select--standard .mdc-select__anchor,[dir=rtl] .smui-select--standard .mdc-select__anchor,.smui-select--standard .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:36px;padding-right:0}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:36px}.smui-select--standard .mdc-select__anchor .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor .mdc-select__ripple:after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.smui-select--standard .mdc-select__anchor:hover .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-select--standard .mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-select--standard .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.smui-select--standard .mdc-select__anchor:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.smui-select--standard.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.smui-select--standard.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.smui-select--standard.mdc-select--no-label .mdc-select__anchor:before{display:none}.smui-select--standard:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.smui-select--standard.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.smui-select--standard:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.smui-select--standard:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.smui-select--standard:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.smui-select--standard.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.smui-select--standard .mdc-floating-label{max-width:calc(100% - 52px)}.smui-select--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 52px/.75)}.smui-select--standard .mdc-menu-surface--is-open-below{border-top-left-radius:0;border-top-right-radius:0}.smui-select--standard.mdc-select--focused.mdc-line-ripple:after{transform:scaleY(2);opacity:1}.smui-select--standard .mdc-floating-label{left:0;right:initial}[dir=rtl] .smui-select--standard .mdc-floating-label,.smui-select--standard .mdc-floating-label[dir=rtl]{left:initial;right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label,.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 72px)}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100%/.75 - 72px/.75)}.smui-select--standard+.mdc-select-helper-text{margin-left:0;margin-right:0}.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:#0000001f;-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:#6200ee0a}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#0000001f}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:#0000001f}.mdc-data-table__pagination{border-top-color:#0000001f}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:#0000000a}.mdc-data-table__header-cell,.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:#000000de}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl],.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(.0001deg);margin-left:4px;margin-right:0;transition:transform .15s 0ms cubic-bezier(.4,0,.2,1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin:0}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%,-50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl],.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:#0009}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple:after{background-color:#0009;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:#000000de}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-24.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-24.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}to{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table--sticky-header>.mdc-data-table__table-container{overflow-x:unset}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim,.mdc-dialog .mdc-dialog__surface-scrim{background-color:#00000052}.mdc-dialog .mdc-dialog__title{color:#000000de}.mdc-dialog .mdc-dialog__content{color:#0009}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:#0000001f}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media (max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media (max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media (max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media (max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media (min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface:before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface:before{content:none}}.mdc-dialog__title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child,[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity .15s linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity .15s linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog.smui-dialog--selection .mdc-dialog__content{padding:0}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed{flex-direction:column-reverse}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed .mdc-dialog__button:not(:last-child){margin-top:12px}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed .mdc-dialog__button:last-child{margin-top:0}.mdc-drawer{border-color:#0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:#000000de}.mdc-drawer .mdc-deprecated-list-group__subheader,.mdc-drawer .mdc-drawer__subtitle,.mdc-drawer .mdc-deprecated-list-item__graphic{color:#0009}.mdc-drawer .mdc-deprecated-list-item{color:#000000de}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:#6200eede}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translate(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translate(100%)}.mdc-drawer--opening{transform:translate(0);transition-duration:.25s}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translate(0)}.mdc-drawer--closing{transform:translate(-100%);transition-duration:.2s}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translate(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title:before{display:inline-block;width:0;height:36px;content:\"\";vertical-align:0}.mdc-drawer__title:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:#00000052}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:.25s;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}.mdc-drawer.smui-drawer__absolute,.mdc-drawer-scrim.smui-drawer-scrim__absolute{position:absolute}.mdc-fab{display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),opacity 15ms linear 30ms,transform .27s 0ms cubic-bezier(0,0,.2,1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mdc-fab.mdc-ripple-upgraded--background-focused,.mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring:after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring:after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring:after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus:active{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-fab:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab:before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform .18s 90ms cubic-bezier(0,0,.2,1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear .15s,transform .18s 0ms cubic-bezier(.4,0,1,1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(.4,0,1,1)}.mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab,.mdc-fab:not(:disabled) .mdc-fab__icon,.mdc-fab:not(:disabled) .mdc-fab__label,.mdc-fab:disabled .mdc-fab__icon,.mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab .mdc-fab__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-fab .mdc-fab__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-fab{z-index:0}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.smui-fab--color-primary{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.smui-fab--color-primary,.smui-fab--color-primary:not(:disabled) .mdc-fab__icon,.smui-fab--color-primary:not(:disabled) .mdc-fab__label,.smui-fab--color-primary:disabled .mdc-fab__icon,.smui-fab--color-primary:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-primary, #fff)}a.mdc-fab,a.mdc-fab:not(:disabled) .mdc-fab__icon,a.mdc-fab:not(:disabled) .mdc-fab__label,a.mdc-fab:disabled .mdc-fab__icon,a.mdc-fab:disabled .mdc-fab__label,a.mdc-fab:visited,a.mdc-fab:visited:not(:disabled) .mdc-fab__icon,a.mdc-fab:visited:not(:disabled) .mdc-fab__label,a.mdc-fab:visited:disabled .mdc-fab__icon,a.mdc-fab:visited:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}a.smui-fab--color-primary,a.smui-fab--color-primary:not(:disabled) .mdc-fab__icon,a.smui-fab--color-primary:not(:disabled) .mdc-fab__label,a.smui-fab--color-primary:disabled .mdc-fab__icon,a.smui-fab--color-primary:disabled .mdc-fab__label,a.smui-fab--color-primary:visited,a.smui-fab--color-primary:visited:not(:disabled) .mdc-fab__icon,a.smui-fab--color-primary:visited:not(:disabled) .mdc-fab__label,a.smui-fab--color-primary:visited:disabled .mdc-fab__icon,a.smui-fab--color-primary:visited:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-secondary, #fff))}.mdc-fab:hover .mdc-fab__ripple:before,.mdc-fab.mdc-ripple-surface--hover .mdc-fab__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple:before,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple:after{transition:opacity .15s linear}.mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-fab--color-primary .mdc-fab__ripple:before,.smui-fab--color-primary .mdc-fab__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.smui-fab--color-primary:hover .mdc-fab__ripple:before,.smui-fab--color-primary.mdc-ripple-surface--hover .mdc-fab__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-fab--color-primary.mdc-ripple-upgraded--background-focused .mdc-fab__ripple:before,.smui-fab--color-primary:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-fab--color-primary:not(.mdc-ripple-upgraded) .mdc-fab__ripple:after{transition:opacity .15s linear}.smui-fab--color-primary:not(.mdc-ripple-upgraded):active .mdc-fab__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-fab--color-primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:100%}.mdc-image-list__image,.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0}.mdc-image-list__supporting{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:#0009;color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media (min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media (max-width: 599px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media (min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12,minmax(0,1fr))}}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8,minmax(0,1fr))}}}@media (max-width: 599px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4,minmax(0,1fr))}}}@media (min-width: 840px){.mdc-layout-grid__cell{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid__cell{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media (max-width: 599px){.mdc-layout-grid__cell{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports (display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports (display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media (min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc(var(--mdc-layout-grid-column-width-desktop, 72px)*12 + var(--mdc-layout-grid-gutter-desktop, 24px)*11 + var(--mdc-layout-grid-margin-desktop, 24px)*2)}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc(var(--mdc-layout-grid-column-width-tablet, 72px)*8 + var(--mdc-layout-grid-gutter-tablet, 16px)*7 + var(--mdc-layout-grid-margin-tablet, 16px)*2)}}@media (max-width: 599px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc(var(--mdc-layout-grid-column-width-phone, 72px)*4 + var(--mdc-layout-grid-gutter-phone, 16px)*3 + var(--mdc-layout-grid-margin-phone, 16px)*2)}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translate(0)}20%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(0)}59.15%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(83.67142%);transform:translate(var(--mdc-linear-progress-primary-half, 83.67142%))}to{transform:translate(200.611057%);transform:translate(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.661479)}to{transform:scaleX(.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.515058,.409685);transform:translate(0)}25%{animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);transform:translate(37.651913%);transform:translate(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);transform:translate(84.386165%);transform:translate(var(--mdc-linear-progress-secondary-half, 84.386165%))}to{transform:translate(160.277782%);transform:translate(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);transform:scaleX(.72796)}to{transform:scaleX(.08)}}@keyframes mdc-linear-progress-buffering{0%{transform:rotate(180deg) translate(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translate(0)}20%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(0)}59.15%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-83.67142%);transform:translate(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}to{transform:translate(-200.611057%);transform:translate(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(.15,0,.515058,.409685);transform:translate(0)}25%{animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);transform:translate(-37.651913%);transform:translate(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);transform:translate(-84.386165%);transform:translate(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}to{transform:translate(-160.277782%);transform:translate(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{0%{transform:translate(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity .25s 0ms cubic-bezier(.4,0,.6,1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering .25s infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse .25s infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}.smui-paper{padding:24px 16px}.smui-paper.smui-paper--raised,.smui-paper.smui-paper--unelevated{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000)}.smui-paper.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.smui-paper.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.smui-paper.smui-paper--rounded{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.smui-paper.smui-paper-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.smui-paper .smui-paper__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit);margin-top:0;margin-bottom:.4rem}.smui-paper .smui-paper__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin-top:-.2rem;margin-bottom:.4rem}.smui-paper .smui-paper__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.smui-paper.smui-paper--color-primary.smui-paper--raised,.smui-paper.smui-paper--color-primary.smui-paper--unelevated{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;color:var(--mdc-theme-on-primary, #fff)}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #6200ee33,0 0 #6200ee24,0 0 #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #6200ee33,0 1px 1px #6200ee24,0 1px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #6200ee33,0 2px 2px #6200ee24,0 1px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #6200ee33,0 3px 4px #6200ee24,0 1px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #6200ee33,0 4px 5px #6200ee24,0 1px 10px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #6200ee33,0 5px 8px #6200ee24,0 1px 14px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #6200ee33,0 6px 10px #6200ee24,0 1px 18px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #6200ee33,0 7px 10px 1px #6200ee24,0 2px 16px 1px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #6200ee33,0 8px 10px 1px #6200ee24,0 3px 14px 2px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #6200ee33,0 9px 12px 1px #6200ee24,0 3px 16px 2px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #6200ee33,0 10px 14px 1px #6200ee24,0 4px 18px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #6200ee33,0 11px 15px 1px #6200ee24,0 4px 20px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #6200ee33,0 12px 17px 2px #6200ee24,0 5px 22px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #6200ee33,0 13px 19px 2px #6200ee24,0 5px 24px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #6200ee33,0 14px 21px 2px #6200ee24,0 5px 26px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #6200ee33,0 15px 22px 2px #6200ee24,0 6px 28px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #6200ee33,0 16px 24px 2px #6200ee24,0 6px 30px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #6200ee33,0 17px 26px 2px #6200ee24,0 6px 32px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #6200ee33,0 18px 28px 2px #6200ee24,0 7px 34px 6px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #6200ee33,0 19px 29px 2px #6200ee24,0 7px 36px 6px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #6200ee33,0 20px 31px 3px #6200ee24,0 8px 38px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #6200ee33,0 21px 33px 3px #6200ee24,0 8px 40px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #6200ee33,0 22px 35px 3px #6200ee24,0 8px 42px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #6200ee33,0 23px 36px 3px #6200ee24,0 9px 44px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #6200ee33,0 24px 38px 3px #6200ee24,0 9px 46px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.smui-paper.smui-paper--color-secondary.smui-paper--raised,.smui-paper.smui-paper--color-secondary.smui-paper--unelevated{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #01878633,0 0 #01878624,0 0 #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #01878633,0 1px 1px #01878624,0 1px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #01878633,0 2px 2px #01878624,0 1px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #01878633,0 3px 4px #01878624,0 1px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #01878633,0 4px 5px #01878624,0 1px 10px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #01878633,0 5px 8px #01878624,0 1px 14px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #01878633,0 6px 10px #01878624,0 1px 18px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #01878633,0 7px 10px 1px #01878624,0 2px 16px 1px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #01878633,0 8px 10px 1px #01878624,0 3px 14px 2px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #01878633,0 9px 12px 1px #01878624,0 3px 16px 2px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #01878633,0 10px 14px 1px #01878624,0 4px 18px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #01878633,0 11px 15px 1px #01878624,0 4px 20px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #01878633,0 12px 17px 2px #01878624,0 5px 22px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #01878633,0 13px 19px 2px #01878624,0 5px 24px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #01878633,0 14px 21px 2px #01878624,0 5px 26px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #01878633,0 15px 22px 2px #01878624,0 6px 28px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #01878633,0 16px 24px 2px #01878624,0 6px 30px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #01878633,0 17px 26px 2px #01878624,0 6px 32px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #01878633,0 18px 28px 2px #01878624,0 7px 34px 6px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #01878633,0 19px 29px 2px #01878624,0 7px 36px 6px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #01878633,0 20px 31px 3px #01878624,0 8px 38px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #01878633,0 21px 33px 3px #01878624,0 8px 40px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #01878633,0 22px 35px 3px #01878624,0 8px 42px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #01878633,0 23px 36px 3px #01878624,0 9px 44px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #01878633,0 24px 38px 3px #01878624,0 9px 46px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio{padding:10px}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#0000008a}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#00000061}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#00000061}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#00000061}.mdc-radio .mdc-radio__background:before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background:before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0;right:0;left:0;width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background:before{position:absolute;transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity .12s 0ms cubic-bezier(.4,0,.6,1),transform .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-width:10px;border-style:solid;border-radius:50%;transition:transform .12s 0ms cubic-bezier(.4,0,.6,1),border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background:before{transform:scale(1);opacity:.12;transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-radio .mdc-radio__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-radio .mdc-radio__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-radio:hover .mdc-radio__ripple:before,.mdc-radio.mdc-ripple-surface--hover .mdc-radio__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple:before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple:after{transition:opacity .15s linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background:before,.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background:before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-segmented-button{display:inline-block;font-size:0}.mdc-segmented-button__segment{border-color:#0000001f;border-color:var(--mdc-segmented-button-outline-color, rgba(0, 0, 0, .12))}.mdc-segmented-button__segment{color:#0009;color:var(--mdc-segmented-button-unselected-ink-color, rgba(0, 0, 0, .6))}.mdc-segmented-button__segment{background-color:#fff;background-color:var(--mdc-segmented-button-unselected-container-fill-color, white)}.mdc-segmented-button__segment--selected{color:#6200ee;color:var(--mdc-segmented-button-selected-ink-color, #6200ee)}.mdc-segmented-button__segment--selected{background-color:#6200ee14;background-color:var(--mdc-segmented-button-selected-container-fill-color, rgba(98, 0, 238, .08))}.mdc-segmented-button__segment{position:relative;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);display:inline-flex;vertical-align:top;align-items:center;height:36px;min-width:48px;padding:0 12px;border-width:1px 0 1px 1px}.mdc-segmented-button__segment .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-segmented-button__segment:hover{cursor:pointer}.mdc-segmented-button__segment:focus{outline-width:0}.mdc-segmented-button__segment:first-child{border-radius:4px 0 0 4px}.mdc-segmented-button__segment:last-child{border-right-width:1px;border-radius:0 4px 4px 0}.mdc-segmented-button__segment .mdc-segmented-button__segment__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-segmented-button__segment .mdc-segmented-button__segment--touch{margin-top:0;margin-bottom:0}.mdc-touch-target-wrapper .mdc-segmented-button__segment{border-radius:0;border-right-width:0}.mdc-touch-target-wrapper:first-child .mdc-segmented-button__segment{border-radius:4px 0 0 4px}.mdc-touch-target-wrapper:last-child .mdc-segmented-button__segment{border-right-width:1px;border-radius:0 4px 4px 0}.mdc-segmented-button__icon{width:24px;font-size:18px}.mdc-segmented-button__icon+.mdc-segmented-button__label{padding-left:6px}.mdc-segmented-button__segment{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;overflow:hidden}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-segmented-button__segment.mdc-ripple-upgraded--unbounded .mdc-segmented-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-activation .mdc-segmented-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-deactivation .mdc-segmented-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, #6200ee)}.mdc-segmented-button__segment:hover .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment.mdc-ripple-surface--hover .mdc-segmented-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-segmented-button__segment.mdc-ripple-upgraded--background-focused .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment.mdc-ripple-upgraded:focus-within .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus-within .mdc-segmented-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-segmented-button__segment:not(.mdc-ripple-upgraded) .mdc-segmented-button__ripple:after{transition:opacity .15s linear}.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):active .mdc-segmented-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-segmented-button__segment.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-segmented-button__segment .mdc-segmented-button__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-slider__thumb{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-slider__thumb:before,.mdc-slider__thumb:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-slider__thumb:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-slider__thumb:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-slider__thumb.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-slider__thumb.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb:before,.mdc-slider__thumb:after{top:0%;left:0%;width:100%;height:100%}.mdc-slider__thumb.mdc-ripple-upgraded:before,.mdc-slider__thumb.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb:before,.mdc-slider__thumb:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider__thumb:hover:before,.mdc-slider__thumb.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-slider__thumb.mdc-ripple-upgraded--background-focused:before,.mdc-slider__thumb:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-slider__thumb:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-slider__thumb:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive:before{border-color:CanvasText}}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translate(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform .1s 0ms cubic-bezier(.4,0,1,1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator:before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translate(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator:after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator:after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform .1s 0ms cubic-bezier(0,0,.2,1);transform:scale(1)}@media (prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator:before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;-webkit-user-select:none;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb:before,.mdc-slider .mdc-slider__thumb:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover:before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused:before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media (prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}.mdc-slider{-webkit-tap-highlight-color:hsla(0,0%,100%,0)}.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:#ffffffde}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface:before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s 0ms cubic-bezier(0,0,.2,1),transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding:14px 8px 14px 16px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#6200ee}.mdc-snackbar__action .mdc-button__ripple:before,.mdc-snackbar__action .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, #6200ee)}.mdc-snackbar__action:hover .mdc-button__ripple:before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-snackbar__dismiss{color:#ffffffde}.mdc-snackbar__dismiss .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss .mdc-icon-button__ripple:after{background-color:#ffffffde;background-color:var(--mdc-ripple-color, rgba(255, 255, 255, .87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin:0}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%,-50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track:before,.mdc-switch__track:after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track:before,.mdc-switch__track:after{border-color:currentColor}}.mdc-switch__track:before{transition:transform 75ms 0ms cubic-bezier(0,0,.2,1);transform:translate(0)}.mdc-switch__track:after{transition:transform 75ms 0ms cubic-bezier(.4,0,.6,1);transform:translate(-100%)}[dir=rtl] .mdc-switch__track:after,.mdc-switch__track[dir=rtl]:after{transform:translate(100%)}.mdc-switch--selected .mdc-switch__track:before{transition:transform 75ms 0ms cubic-bezier(.4,0,.6,1);transform:translate(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track:before,.mdc-switch--selected .mdc-switch__track[dir=rtl]:before{transform:translate(-100%)}.mdc-switch--selected .mdc-switch__track:after{transition:transform 75ms 0ms cubic-bezier(0,0,.2,1);transform:translate(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(.4,0,.2,1);left:0;right:auto;transform:translate(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translate(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translate(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle:before,.mdc-switch__handle:after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:\"\";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(.4,0,.2,1),border-color 75ms 0ms cubic-bezier(.4,0,.2,1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle:before,.mdc-switch__handle:after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(.4,0,1,1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0,0,.2,1)}.mdc-switch{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-switch .mdc-switch__ripple:before,.mdc-switch .mdc-switch__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-switch .mdc-switch__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple:before,.mdc-switch .mdc-switch__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch .mdc-switch__focus-ring-wrapper{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring{border-color:CanvasText}}.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring:after,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring:after,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring:after{border-color:CanvasText}}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle:after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle:after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle:after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle:after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle:before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle:after{opacity:.38;opacity:var(--mdc-switch-disabled-handle-opacity, .38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, .38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, .38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple:before{opacity:.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, .04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, .12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple:after{transition:opacity .15s linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple:before{opacity:.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, .04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, .12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple:after{transition:opacity .15s linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, .1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:.12;opacity:var(--mdc-switch-disabled-track-opacity, .12)}.mdc-switch:enabled .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track:after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track:before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle:after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}.mdc-switch{margin:14px}.mdc-switch.smui-switch--color-secondary{--mdc-switch-disabled-selected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-disabled-unselected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-selected-focus-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-focus-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-focus-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-handle-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-hover-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-hover-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-hover-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-selected-pressed-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-pressed-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-pressed-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-unselected-icon-color:var(--mdc-theme-on-secondary, #fff)}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:#0009}.mdc-tab .mdc-tab__icon{color:#0000008a;fill:currentColor}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% - 12px);width:calc(100% - 8px);margin-top:-2px;z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring:after{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% - 8px);width:calc(100% - 8px);z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring:after{border-color:CanvasText}}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:.15s color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:.15s color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:.1s}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-tab .mdc-tab__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple:before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple:before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple:after{transition:opacity .15s linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:.25s transform cubic-bezier(.4,0,.2,1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:.15s opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:.1s}.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:.25s transform cubic-bezier(.4,0,.2,1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-text-field--filled .mdc-text-field__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:#000000de}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:#0000008a}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:#0000008a}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:#0000008a}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#0000008a}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:#0009}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1);width:100%;min-width:0;border:none;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(.4,0,.2,1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(.4,0,.2,1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:.11s;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:.11s;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports (-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl],.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-text-field--filled:hover .mdc-text-field__ripple:before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple:before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-text-field--filled:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.mdc-text-field--filled .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label:before{display:none}@supports (-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#00000061}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#000000de}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports (top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - (max(12px,var(--mdc-shape-small, 4px))*2))}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports (top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports (top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports (top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports (top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple:before,.mdc-text-field--outlined .mdc-text-field__ripple:after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none!important;background-color:#0000}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled:before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled .25s 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translate(calc(0 + -0%)) translateY(-10.25px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-10.25px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-10.25px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-10.25px) scale(.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined .25s 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-24.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-24.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter:after{display:inline-block;width:0;height:16px;content:\"\";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter:before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translate(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translate(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translate(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translate(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translate(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translate(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translate(-32px) scale(.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translate(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% - 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% - 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% + 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% + 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 96px/.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:#6200eede}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple:after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:#00000061}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:#00000061}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:#00000061}}.mdc-text-field--disabled .mdc-floating-label{color:#00000061}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:#00000061}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:#00000061}.mdc-text-field--disabled .mdc-text-field__icon--leading,.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:#0000004d}.mdc-text-field--disabled .mdc-text-field__affix--prefix,.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:#00000061}.mdc-text-field--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:#0000000f}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}.mdc-text-field--disabled .mdc-floating-label{color:GrayText}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}.mdc-text-field--disabled .mdc-text-field__icon--leading,.mdc-text-field--disabled .mdc-text-field__icon--trailing,.mdc-text-field--disabled .mdc-text-field__affix--prefix,.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}.mdc-text-field--disabled .mdc-line-ripple:before{border-bottom-color:GrayText}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.smui-text-field--standard{height:56px;padding:0}.smui-text-field--standard:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.smui-text-field--standard:not(.mdc-text-field--disabled){background-color:transparent}.smui-text-field--standard:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.smui-text-field--standard:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.smui-text-field--standard .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.smui-text-field--standard .mdc-floating-label{left:0;right:initial}[dir=rtl] .smui-text-field--standard .mdc-floating-label,.smui-text-field--standard .mdc-floating-label[dir=rtl]{left:initial;right:0}.smui-text-field--standard .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.smui-text-field--standard.mdc-text-field--no-label .mdc-text-field__input{height:100%}.smui-text-field--standard.mdc-text-field--no-label .mdc-floating-label{display:none}.smui-text-field--standard.mdc-text-field--no-label:before{display:none}@supports (-webkit-hyphens: none){.smui-text-field--standard.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 32px);left:32px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label,.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label[dir=rtl]{left:initial;right:32px}.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 48px/.75)}.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 36px)}.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 36px/.75)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 68px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 68px/.75)}.mdc-text-field+.mdc-text-field-helper-line{padding-left:0;padding-right:0}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1)}.mdc-text-field-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0;margin-right:0}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0;margin-right:0}.smui-text-field--standard .mdc-text-field__icon--leading{margin-left:0;margin-right:8px}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--leading,.smui-text-field--standard .mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:0}.smui-text-field--standard .mdc-text-field__icon--trailing{padding:12px 0 12px 12px;margin-left:0;margin-right:0}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--trailing,.smui-text-field--standard .mdc-text-field__icon--trailing[dir=rtl]{padding-left:0;padding-right:12px}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--trailing,.smui-text-field--standard .mdc-text-field__icon--trailing[dir=rtl]{margin-left:0;margin-right:0}.mdc-tooltip__surface,.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-tooltip__surface{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-tooltip__surface{background-color:#0009}.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{z-index:9}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity .15s 0ms cubic-bezier(0,0,.2,1),transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-tooltip__title{color:#000000de;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, .87))}.mdc-tooltip__content{color:#0009}.mdc-tooltip__content-link{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tooltip{position:fixed;display:none}.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__surface,.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__caret-surface-top,.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__caret-surface-bottom{background-color:#fff}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface:before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;align-items:flex-start;border-radius:4px;display:flex;flex-direction:column;line-height:20px;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{display:block;line-height:20px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__title:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-tooltip__surface .mdc-tooltip__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);max-width:184px;margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:304px;align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__title,.mdc-tooltip--rich .mdc-tooltip__content{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-tooltip--rich .mdc-tooltip__content-link{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.smui-tooltip--force-show{display:inline-flex!important}.smui-tooltip--force-show.mdc-tooltip--rich{display:inline-block!important}.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width .25s cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding .15s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}.smui-top-app-bar--static{position:static}.smui-top-app-bar--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-secondary, #fff))}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-surface--hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-accordion{display:block;position:relative;z-index:0}.smui-accordion.smui-accordion--with-open-dialog{z-index:auto}.smui-accordion .smui-accordion__panel{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;padding:0;margin-top:0;margin-bottom:0;transition:margin-top .2s 0ms cubic-bezier(.4,0,.2,1),margin-bottom .2s 0ms cubic-bezier(.4,0,.2,1)}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before,.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--unbounded .smui-accordion__header__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--foreground-activation .smui-accordion__header__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--foreground-deactivation .smui-accordion__header__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before,.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.smui-accordion .smui-accordion__panel.smui-accordion__panel--extend{transition:width .2s 0ms cubic-bezier(.4,0,.2,1),left .2s 0ms cubic-bezier(.4,0,.2,1),box-shadow .2s 0ms cubic-bezier(.4,0,.2,1),margin-top .2s 0ms cubic-bezier(.4,0,.2,1),margin-bottom .2s 0ms cubic-bezier(.4,0,.2,1);width:100%;left:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--extend.smui-accordion__panel--open{width:calc(100% + 10px);left:-5px}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised,.smui-accordion .smui-accordion__panel.smui-paper--unelevated{border-top-width:1px;border-top-style:solid;border-top-color:#0000001f}.smui-accordion .smui-accordion__panel.smui-paper.smui-accordion__panel--raised{z-index:auto;will-change:auto}.smui-accordion .smui-accordion__panel.smui-paper.smui-accordion__panel--raised:before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #6200ee33,0 0 #6200ee24,0 0 #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #6200ee33,0 1px 1px #6200ee24,0 1px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #6200ee33,0 2px 2px #6200ee24,0 1px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #6200ee33,0 3px 4px #6200ee24,0 1px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #6200ee33,0 4px 5px #6200ee24,0 1px 10px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #6200ee33,0 5px 8px #6200ee24,0 1px 14px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #6200ee33,0 6px 10px #6200ee24,0 1px 18px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #6200ee33,0 7px 10px 1px #6200ee24,0 2px 16px 1px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #6200ee33,0 8px 10px 1px #6200ee24,0 3px 14px 2px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #6200ee33,0 9px 12px 1px #6200ee24,0 3px 16px 2px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #6200ee33,0 10px 14px 1px #6200ee24,0 4px 18px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #6200ee33,0 11px 15px 1px #6200ee24,0 4px 20px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #6200ee33,0 12px 17px 2px #6200ee24,0 5px 22px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #6200ee33,0 13px 19px 2px #6200ee24,0 5px 24px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #6200ee33,0 14px 21px 2px #6200ee24,0 5px 26px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #6200ee33,0 15px 22px 2px #6200ee24,0 6px 28px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #6200ee33,0 16px 24px 2px #6200ee24,0 6px 30px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #6200ee33,0 17px 26px 2px #6200ee24,0 6px 32px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #6200ee33,0 18px 28px 2px #6200ee24,0 7px 34px 6px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #6200ee33,0 19px 29px 2px #6200ee24,0 7px 36px 6px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #6200ee33,0 20px 31px 3px #6200ee24,0 8px 38px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #6200ee33,0 21px 33px 3px #6200ee24,0 8px 40px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #6200ee33,0 22px 35px 3px #6200ee24,0 8px 42px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #6200ee33,0 23px 36px 3px #6200ee24,0 9px 44px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #6200ee33,0 24px 38px 3px #6200ee24,0 9px 46px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #01878633,0 0 #01878624,0 0 #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #01878633,0 1px 1px #01878624,0 1px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #01878633,0 2px 2px #01878624,0 1px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #01878633,0 3px 4px #01878624,0 1px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #01878633,0 4px 5px #01878624,0 1px 10px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #01878633,0 5px 8px #01878624,0 1px 14px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #01878633,0 6px 10px #01878624,0 1px 18px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #01878633,0 7px 10px 1px #01878624,0 2px 16px 1px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #01878633,0 8px 10px 1px #01878624,0 3px 14px 2px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #01878633,0 9px 12px 1px #01878624,0 3px 16px 2px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #01878633,0 10px 14px 1px #01878624,0 4px 18px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #01878633,0 11px 15px 1px #01878624,0 4px 20px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #01878633,0 12px 17px 2px #01878624,0 5px 22px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #01878633,0 13px 19px 2px #01878624,0 5px 24px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #01878633,0 14px 21px 2px #01878624,0 5px 26px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #01878633,0 15px 22px 2px #01878624,0 6px 28px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #01878633,0 16px 24px 2px #01878624,0 6px 30px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #01878633,0 17px 26px 2px #01878624,0 6px 32px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #01878633,0 18px 28px 2px #01878624,0 7px 34px 6px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #01878633,0 19px 29px 2px #01878624,0 7px 36px 6px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #01878633,0 20px 31px 3px #01878624,0 8px 38px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #01878633,0 21px 33px 3px #01878624,0 8px 40px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #01878633,0 22px 35px 3px #01878624,0 8px 42px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #01878633,0 23px 36px 3px #01878624,0 9px 44px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #01878633,0 24px 38px 3px #01878624,0 9px 46px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised:first-child,.smui-accordion .smui-accordion__panel.smui-paper--unelevated:first-child{border-top-width:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised:last-child,.smui-accordion .smui-accordion__panel.smui-paper--unelevated:last-child{border-top-left-radius:0;border-top-right-radius:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--open+.smui-accordion__panel,.smui-accordion .smui-accordion__panel.smui-paper--unelevated.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-paper--unelevated.smui-accordion__panel--open+.smui-accordion__panel{border-top-width:0}.smui-accordion .smui-accordion__panel.smui-paper--outlined:nth-child(n+2){border-top-width:0}.smui-accordion .smui-accordion__panel.smui-paper--outlined.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-paper--outlined.smui-accordion__panel--open+.smui-accordion__panel{border-top-width:1px}.smui-accordion .smui-accordion__panel.smui-paper--rounded:before{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.smui-accordion .smui-accordion__panel:first-child:not(:last-child),.smui-accordion .smui-accordion__panel:first-child:not(:last-child):before{border-bottom-left-radius:0;border-bottom-right-radius:0}.smui-accordion .smui-accordion__panel:last-child:not(:first-child),.smui-accordion .smui-accordion__panel:last-child:not(:first-child):before{border-top-left-radius:0;border-top-right-radius:0}.smui-accordion .smui-accordion__panel:not(:first-child,:last-child),.smui-accordion .smui-accordion__panel:not(:first-child,:last-child):before{border-radius:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);display:flex;flex-wrap:wrap;cursor:pointer}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__title{padding:16px 24px;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__title.smui-accordion__header__title--with-description{flex-basis:30%;max-width:280px;box-sizing:border-box;padding-inline-end:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__description{opacity:.48;padding:16px 24px;flex-basis:0;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__icon{align-self:center;flex-shrink:1;margin:0 24px;margin-inline-start:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden;z-index:0;pointer-events:none}.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-accordion__header,.smui-accordion .smui-accordion__panel.smui-accordion__panel--non-interactive>.smui-accordion__header{cursor:initial}.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-accordion__header,.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-paper__content{opacity:.38}.smui-accordion .smui-accordion__panel>.smui-paper__content{overflow:hidden;transition:height .3s 0ms cubic-bezier(.4,0,.2,1),padding .3s 0ms cubic-bezier(.4,0,.2,1);box-sizing:border-box;height:0;padding:0 24px}.smui-accordion .smui-accordion__panel>.smui-paper__content.smui-accordion__content--no-transition{transition:none}.smui-accordion .smui-accordion__panel>.smui-paper__content.smui-accordion__content--force-open{height:auto;padding:16px 24px}.smui-accordion .smui-accordion__panel.smui-accordion__panel--opened>.smui-paper__content{overflow:visible}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open{margin-top:1rem;margin-bottom:1rem}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open:first-child{margin-top:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open:last-child{margin-bottom:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open>.smui-paper__content{height:auto;padding:16px 24px}.smui-autocomplete{display:inline-block}.smui-autocomplete__menu{min-width:100%}.smui-badge{min-height:24px;min-width:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);position:absolute;font-size:13.3333333333px;display:flex;justify-content:center;align-content:center;z-index:2;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:4px;padding-right:4px}.smui-badge.smui-badge--rounded{border-radius:24px}.smui-badge.smui-badge--align-top-start.smui-badge--position-inset,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-middle.smui-badge--position-inset,.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-inset,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle{top:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-outset,.smui-badge.smui-badge--align-top-middle.smui-badge--position-outset,.smui-badge.smui-badge--align-top-end.smui-badge--position-outset{bottom:100%}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{bottom:0}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset{top:100%}.smui-badge.smui-badge--align-top-end.smui-badge--position-inset,.smui-badge.smui-badge--align-middle-end.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset{left:initial;right:0}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset,.smui-badge.smui-badge--align-top-end.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset[dir=rtl]{left:0;right:initial}.smui-badge.smui-badge--align-top-end.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{left:initial;right:0}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle[dir=rtl]{left:0;right:initial}.smui-badge.smui-badge--align-top-end.smui-badge--position-outset,.smui-badge.smui-badge--align-middle-end.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset{left:100%;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset,.smui-badge.smui-badge--align-top-end.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset[dir=rtl]{left:initial;right:100%}.smui-badge.smui-badge--align-top-start.smui-badge--position-inset,.smui-badge.smui-badge--align-middle-start.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset{left:0;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset,.smui-badge.smui-badge--align-top-start.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset[dir=rtl]{left:initial;right:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle{left:0;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle[dir=rtl]{left:initial;right:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-outset,.smui-badge.smui-badge--align-middle-start.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset{left:initial;right:100%}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset,.smui-badge.smui-badge--align-top-start.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset[dir=rtl]{left:100%;right:initial}.smui-badge.smui-badge--align-top-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%) translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%) translateY(-50%)}.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle{transform-origin:center;transform:translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle[dir=rtl]{transform:translateY(-50%)}.smui-badge.smui-badge--align-top-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%) translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%) translateY(-50%)}.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%)}[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%)}.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%)}[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%)}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%) translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%) translateY(50%)}.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle{transform-origin:center;transform:translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle[dir=rtl]{transform:translateY(50%)}.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%) translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%) translateY(50%)}.smui-badge.smui-badge--color-primary{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;color:var(--mdc-theme-on-primary, #fff)}.smui-badge.smui-badge--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-bottom-app-bar{display:flex;flex-direction:row;width:100%;--smui-bottom-app-bar--fab-offset: 0px}.smui-bottom-app-bar.smui-bottom-app-bar--fixed,.smui-bottom-app-bar.smui-bottom-app-bar--standard{position:fixed;bottom:0;left:0;right:0}.smui-bottom-app-bar>.smui-bottom-app-bar__section{display:flex;flex-direction:row;justify-content:center;position:relative;padding:16px;height:56px;box-sizing:border-box;flex-grow:1;flex-basis:0;overflow:visible}.smui-bottom-app-bar>.smui-bottom-app-bar__section .mdc-icon-button{margin-top:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section .mdc-fab{position:relative;top:calc(var(--smui-bottom-app-bar--fab-offset, 0px) - 44px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section:first-child{justify-content:start}.smui-bottom-app-bar>.smui-bottom-app-bar__section:first-child .mdc-icon-button:first-child{margin-inline-start:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section:last-child{justify-content:end}.smui-bottom-app-bar>.smui-bottom-app-bar__section:last-child .mdc-icon-button:last-child{margin-inline-end:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset{background:radial-gradient(72px 72px at 50% var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:first-child{background:radial-gradient(72px 72px at 52px var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:first-child .mdc-fab{margin-inline-start:8px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:last-child{background:radial-gradient(72px 72px at calc(100% - 52px) var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:last-child .mdc-fab{margin-inline-end:8px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary{background:radial-gradient(72px 72px at 50% var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary:first-child{background:radial-gradient(72px 72px at 52px var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary:last-child{background:radial-gradient(72px 72px at calc(100% - 52px) var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar--fixed-adjust{padding-bottom:56px}.smui-bottom-app-bar--fixed-adjust .mdc-snackbar,.smui-bottom-app-bar--standard-adjust .mdc-snackbar{transform:translateY(calc(-56px - var(--smui-bottom-app-bar--fab-offset, 0)))}.smui-bottom-app-bar--fixed-adjust.smui-bottom-app-bar--with-fab .mdc-snackbar,.smui-bottom-app-bar--standard-adjust.smui-bottom-app-bar--with-fab .mdc-snackbar{transform:translateY(calc(-84px - var(--smui-bottom-app-bar--fab-offset, 0)))}@supports (-webkit-appearance: none) and (not (overflow: -webkit-marquee)) and (not (-moz-appearance: none)){.smui-bottom-app-bar.smui-bottom-app-bar--standard>.smui-bottom-app-bar__section:after,.smui-bottom-app-bar.smui-bottom-app-bar--fixed>.smui-bottom-app-bar__section:after{display:block;content:\" \";position:absolute;bottom:0;right:0;height:10px;width:10px;pointer-events:none;background-color:#000;opacity:0;animation:60s linear 0s infinite chrome-fix}@keyframes chrome-fix{0%{bottom:0}50%{bottom:46px}to{bottom:0}}}.smui-chip-input{display:flex;flex-wrap:wrap;align-items:center;position:relative;gap:8px}.smui-chip-input.smui-chip-input--disabled .mdc-deprecated-chip-trailing-action{display:none}.smui-chip-input .smui-chip-input__chip-set{padding:0;gap:8px}.smui-chip-input .smui-chip-input__chip-set .mdc-chip{margin:0}.smui-chip-input .smui-chip-input__autocomplete{flex-grow:1}.smui-chip-input .smui-chip-input__textfield{width:100%}.smui-chip-input .smui-chip-input__loading{display:flex;width:100%;justify-content:center;align-items:center}*,:root,:host{--bp-internal-primary: var(--oscd-theme-primary, var(--oscd-primary, #2aa198));--bp-internal-secondary: var(--oscd-theme-secondary, var(--oscd-secondary, #6c71c4));--bp-internal-error: var(--oscd-theme-error, var(--oscd-error, #dc322f));--bp-internal-warning: var(--oscd-theme-warning, var(--oscd-warning, #b58900));--bp-internal-base03: var(--oscd-theme-base03, var(--oscd-base03, light-dark(#002b36, #fdf6e3)));--bp-internal-base02: var(--oscd-theme-base02, var(--oscd-base02, light-dark(#073642, #eee8d5)));--bp-internal-base01: var(--oscd-theme-base01, var(--oscd-base01, light-dark(#586e75, #93a1a1)));--bp-internal-base00: var(--oscd-theme-base00, var(--oscd-base00, light-dark(#657b83, #839496)));--bp-internal-base0: var(--oscd-theme-base0, var(--oscd-base0, light-dark(#839496, #657b83)));--bp-internal-base1: var(--oscd-theme-base1, var(--oscd-base1, light-dark(#93a1a1, #586e75)));--bp-internal-base2: var(--oscd-theme-base2, var(--oscd-base2, light-dark(#eee8d5, #073642)));--bp-internal-base3: var(--oscd-theme-base3, var(--oscd-base3, light-dark(#fdf6e3, #002b36)));--bp-internal-yellow: var(--oscd-theme-yellow, var(--oscd-yellow, #b58900));--bp-internal-orange: var(--oscd-theme-orange, var(--oscd-orange, #cb4b16));--bp-internal-red: var(--oscd-theme-red, var(--oscd-red, #dc322f));--bp-internal-magenta: var(--oscd-theme-magenta, var(--oscd-magenta, #d33682));--bp-internal-violet: var(--oscd-theme-violet, var(--oscd-violet, #6c71c4));--bp-internal-blue: var(--oscd-theme-blue, var(--oscd-blue, #268bd2));--bp-internal-cyan: var(--oscd-theme-cyan, var(--oscd-cyan, #2aa198));--bp-internal-green: var(--oscd-theme-green, var(--oscd-green, #859900));--bp-internal-text-font: var(--oscd-theme-text-font, var(--oscd-text-font, \"Roboto\"));--bp-internal-text-font-mono: var(--oscd-theme-text-font-mono, var(--oscd-text-font-mono, \"Roboto Mono\"));--bp-internal-icon-font: var(--oscd-theme-icon-font, var(--oscd-icon-font, \"Material Symbols Outlined\"));--bp-internal-shape: var(--oscd-theme-shape, var(--oscd-shape, 8px));--bp-internal-shape-none: 0;--bp-internal-shape-extra-small: calc(.5 * var(--bp-internal-shape));--bp-internal-shape-small: var(--bp-internal-shape);--bp-internal-shape-medium: calc(1.5 * var(--bp-internal-shape));--bp-internal-shape-large: calc(2 * var(--bp-internal-shape));--bearingpoint-color-positive: #239c5b;--bearingpoint-color-negative: #ff3d47;--bearingpoint-color-warning: #ffcc17;--bearingpoint-color-warning-text: black;--bearingpoint-color-warning-bg: color-mix(in srgb, white 40%, var(--bearingpoint-color-warning));--bearingpoint-color-bg-page: var(--bp-internal-base2);--bearingpoint-color-surface: var(--bp-internal-base3);--bearingpoint-color-text-primary: var(--bp-internal-base02);--bearingpoint-color-text-dark: var(--bp-internal-base03);--bearingpoint-color-text-secondary: var(--bp-internal-base01);--bearingpoint-color-link: var(--bp-internal-blue);--bearingpoint-color-link-visited: var(--bp-internal-secondary);--bearingpoint-color-border: var(--bp-internal-base01);--bearingpoint-color-border-strong: var(--bp-internal-base03);--bearingpoint-color-border-hover: var(--bp-internal-base02);--bearingpoint-color-divider: color-mix(in oklab, var(--bp-internal-base03) 12%, transparent);--bearingpoint-color-overlay: color-mix(in oklab, var(--bp-internal-base03) 35%, transparent);--bearingpoint-color-action-primary-text: var(--bp-internal-base2);--bearingpoint-color-action-primary-bg: var(--bp-internal-primary);--bearingpoint-color-action-primary-bg-hover: color-mix( in oklab, var(--bp-internal-primary) 80%, var(--bearingpoint-color-surface) );--bearingpoint-color-action-secondary-text: var(--bp-internal-base3);--bearingpoint-color-action-secondary-bg: var(--bp-internal-secondary);--bearingpoint-color-action-secondary-bg-hover: color-mix( in oklab, var(--bp-internal-secondary) 80%, var(--bearingpoint-color-surface) );--bearingpoint-color-action-neutral-text: var(--bp-internal-secondary);--bearingpoint-color-action-neutral-bg: var(--bearingpoint-color-surface);--bearingpoint-color-action-neutral-bg-hover: color-mix( in oklab, var(--bearingpoint-color-surface) 80%, var(--bp-internal-base2) );--bearingpoint-color-action-danger-text: var(--bp-internal-base2);--bearingpoint-color-action-danger-bg: var(--bp-internal-red);--bearingpoint-color-action-danger-bg-hover: color-mix( in oklab, var(--bp-internal-red) 82%, var(--bearingpoint-color-surface) );--bearingpoint-font-oscd: var(--bp-internal-text-font), system-ui, sans-serif}@container style(--oscd-warning: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--bp-internal-primary: #330000;--bp-internal-secondary: #990000;--bp-internal-base03: #5a473e;--bp-internal-base02: #665247;--bp-internal-base01: #735c50;--bp-internal-base00: #806659;--bp-internal-base0: #b2a59f;--bp-internal-base1: #ccc1bc;--bp-internal-base2: #e6deda;--bp-internal-base3: #faf8f7}}@container style(--oscd-warning: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--bp-internal-primary: #ffecec;--bp-internal-secondary: #ee8585;--bp-internal-base03: #faf8f7;--bp-internal-base02: #e6deda;--bp-internal-base01: #ccc1bc;--bp-internal-base00: #b2a59f;--bp-internal-base0: #806659;--bp-internal-base1: #735c50;--bp-internal-base2: #665247;--bp-internal-base3: #5a473e}}@container style(--oscd-warning: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--bp-internal-primary: #004552}}@container style(--oscd-warning: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--bp-internal-primary: #81c3cf}}:root,:host{--mdc-theme-primary: var(--bp-internal-primary);--mdc-theme-surface: var(--bp-internal-base3);--mdc-theme-on-surface: var(--bp-internal-base03);--mdc-shape-none: var(--bp-internal-shape-none);--mdc-shape-extra-small: var(--bp-internal-shape-extra-small);--mdc-shape-small: var(--bp-internal-shape-small);--mdc-shape-medium: var(--bp-internal-shape-medium);--mdc-shape-large: var(--bp-internal-shape-large);--mdc-icon-font: var(--bp-internal-icon-font)}.mdc-text-field--outlined,.mdc-select--outlined,.mdc-select--outlined .mdc-select__anchor{border-radius:var(--bp-internal-shape-small)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:color-mix(in srgb,var(--bp-internal-base02) 60%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:color-mix(in srgb,var(--bp-internal-base02) 87%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:color-mix(in srgb,var(--bp-internal-base02) 54%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:color-mix(in srgb,var(--bp-internal-base02) 87%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:color-mix(in srgb,var(--bp-internal-base02) 54%,transparent)}.mdc-menu .mdc-deprecated-list{color:color-mix(in srgb,var(--bp-internal-base02) 87%,transparent)}.oscd-icons,.material-icons,.material-icons-outlined,.material-symbols-outlined,.mdc-text-field__icon,.mdc-select__icon{font-family:var(--oscd-icon-font, \"Material Symbols Outlined\");font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}a{color:var(--bearingpoint-color-link);text-decoration:none}a:hover{text-decoration:underline}a:visited{color:var(--bearingpoint-color-link-visited)}label{display:block}button{height:32px;opacity:1;border:none;border-radius:4px;gap:6px;padding:0 8px;cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}:root,:host{--bearingpoint-text-h1-size: 20px;--bearingpoint-text-h1-line: 24px;--bearingpoint-text-h1-weight: 500;--bearingpoint-text-h2-size: 16px;--bearingpoint-text-h2-line: 22px;--bearingpoint-text-h2-weight: 500;--bearingpoint-text-h3-size: 18px;--bearingpoint-text-h3-line: 24px;--bearingpoint-text-h3-weight: 500;--bearingpoint-text-16-size: 16px;--bearingpoint-text-16-line: 22px;--bearingpoint-text-16-bold-weight: 500;--bearingpoint-text-body-size: 14px;--bearingpoint-text-body-line: 22px;--bearingpoint-text-body-weight: 400;--bearingpoint-text-14-bold-size: 14px;--bearingpoint-text-14-bold-line: 20px;--bearingpoint-text-14-bold-weight: 500;--bearingpoint-text-caption-size: 12px;--bearingpoint-text-caption-line: 16px;--bearingpoint-text-caption-weight: 400;--bearingpoint-text-label-size: 12px;--bearingpoint-text-label-line: 16px;--bearingpoint-text-label-weight: 500;--bearingpoint-text-tag-size: 12px;--bearingpoint-text-tag-line: 16px;--bearingpoint-text-tag-weight: 500;--bearingpoint-text-button-size: 14px;--bearingpoint-text-button-line: 20px;--bearingpoint-text-button-weight: 500}h1,.bp-typo-h1{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h1-size);font-weight:var(--bearingpoint-text-h1-weight);line-height:var(--bearingpoint-text-h1-line);letter-spacing:normal;font-style:normal}h2,.bp-typo-h2{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h2-size);font-weight:var(--bearingpoint-text-h2-weight);line-height:var(--bearingpoint-text-h2-line);letter-spacing:normal;font-style:normal}h3,.bp-typo-h3{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h3-size);font-weight:var(--bearingpoint-text-h3-weight);line-height:var(--bearingpoint-text-h3-line);letter-spacing:normal;font-style:normal}.bp-typo-body{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-body-size);font-weight:var(--bearingpoint-text-body-weight);line-height:var(--bearingpoint-text-body-line);letter-spacing:normal;font-style:normal}.bp-typo-16-regular{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-16-size);font-weight:var(--bearingpoint-text-body-weight);line-height:var(--bearingpoint-text-16-line);letter-spacing:normal;font-style:normal}.bp-typo-16-bold{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-16-size);font-weight:var(--bearingpoint-text-16-bold-weight);line-height:var(--bearingpoint-text-16-line);letter-spacing:normal;font-style:normal}.bp-typo-14-bold{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-14-bold-size);font-weight:var(--bearingpoint-text-14-bold-weight);line-height:var(--bearingpoint-text-14-bold-line);letter-spacing:normal;font-style:normal}.bp-typo-caption{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-caption-size);font-weight:var(--bearingpoint-text-caption-weight);line-height:var(--bearingpoint-text-caption-line);letter-spacing:normal;font-style:normal}.bp-typo-label{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-label-size);font-weight:var(--bearingpoint-text-label-weight);line-height:var(--bearingpoint-text-label-line);letter-spacing:normal;font-style:normal}.bp-typo-tag{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-tag-size);font-weight:var(--bearingpoint-text-tag-weight);line-height:var(--bearingpoint-text-tag-line);letter-spacing:normal;font-style:normal}button,.bp-typo-button{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-button-size);font-weight:var(--bearingpoint-text-button-weight);line-height:var(--bearingpoint-text-button-line);letter-spacing:normal;font-style:normal}.bp-font-oscd{font-family:var(--bearingpoint-font-oscd)}.badge{padding:2px 8px;border-radius:12px;border:1px solid currentColor;--badge-installed: #02a75d;--badge-builtin: #5b21b6;--badge-available: #1d4ed8;--badge-active: #0d3d4a;--badge-inactive: #004552;--badge-kind: #6b9197;color:color-mix(in oklab,var(--badge-color) 14%,#fff);border-color:color-mix(in oklab,var(--bp-internal-base03),var(--bp-internal-color) 50%);background:var(--badge-color)}.badge-icon{font-size:var(--bearingpoint-text-label-size);padding:0 2px 0 0;transform:translateY(2px)}.badge.badge-installed{--badge-color: var(--badge-installed)}.badge.badge-builtin{--badge-color: var(--badge-builtin)}.badge.badge-available{--badge-color: var(--badge-available)}.badge.badge-active{--badge-color: var(--badge-active)}.badge.badge-inactive{--badge-color: var(--badge-inactive)}.badge.badge-kind{--badge-color: var(--badge-kind);color:color-mix(in oklab,var(--badge-color),var(--bp-internal-base03));border-color:color-mix(in oklab,var(--badge-color) 50%,var(--bp-internal-base3));background:color-mix(in oklab,var(--badge-color) 10%,var(--bp-internal-base3));padding:2px 6px 2px 4px;border-radius:2px}.action-btn.install{background:var(--bearingpoint-color-action-primary-bg);color:var(--bearingpoint-color-action-primary-text)}.action-btn.install:hover:not(:disabled){background:var(--bearingpoint-color-action-primary-bg-hover)}.action-btn.enable{background:var(--bearingpoint-color-action-secondary-bg);color:var(--bearingpoint-color-action-secondary-text)}.action-btn.enable:hover:not(:disabled){background:var(--bearingpoint-color-action-secondary-bg-hover)}.action-btn.disable{background:var(--bearingpoint-color-action-neutral-bg);color:var(--bearingpoint-color-action-neutral-text)}.action-btn.disable:hover:not(:disabled){background:var(--bearingpoint-color-action-neutral-bg-hover)}.action-btn:disabled{opacity:.5;cursor:not-allowed}.action-btn.remove{background:var(--bearingpoint-color-action-danger-bg);color:var(--bearingpoint-color-action-danger-text)}.action-btn.remove:hover{background:var(--bearingpoint-color-action-danger-bg-hover)}.plugins-hub.svelte-1u53k0h{display:flex;flex-direction:column;width:100%;height:100%;min-height:400px;background:var(--bearingpoint-color-bg-page);color:var(--bearingpoint-color-text-primary);overflow:hidden}.hub-toolbar.svelte-1u53k0h{display:flex;align-items:center;gap:12px;padding:16px 24px;background:var(--bearingpoint-color-bg-page);border-bottom:1px solid var(--bearingpoint-color-border);flex-wrap:wrap}.hub-toolbar.svelte-1u53k0h .mdc-select__anchor,.hub-toolbar.svelte-1u53k0h .mdc-text-field{height:42px!important}.load-errors.svelte-1u53k0h{padding:8px 24px;background:var(--bearingpoint-color-warning-bg);border-bottom:1px solid var(--bearingpoint-color-border)}.error-message.svelte-1u53k0h{margin:4px 0;color:var(--bearingpoint-color-warning-text)}.hub-body.svelte-1u53k0h{display:flex;flex:1;overflow:hidden;background:var(--bearingpoint-color-bg-page);border-bottom:1px solid var(--bearingpoint-color-border)}.hub-body.with-details.svelte-1u53k0h .providers-list:where(.svelte-1u53k0h){flex:1}.providers-list.svelte-1u53k0h{flex:1;overflow-y:auto;padding:24px;display:flex;flex-direction:column;gap:24px}.loading.svelte-1u53k0h,.empty-state.svelte-1u53k0h{text-align:center;color:var(--bearingpoint-color-text-secondary);padding:40px}:host{min-height:0;height:100%}\n";
function Bf() {
  const n = document.createElement("style");
  return n.id = `${Pf}-v${kf}-style`, n.textContent = Ff, n;
}
export {
  Hf as default
};
