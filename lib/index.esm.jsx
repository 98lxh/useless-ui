import { defineComponent, computed as computed$1, provide, h, inject, getCurrentInstance, unref, Transition, watch, reactive as reactive$1, ref, onMounted, onUnmounted, nextTick, createVNode, render } from 'vue';

const Button = defineComponent({
    name: 'UButton',
    props: {
        type: {
            type: String,
            default: 'primary',
        },
        status: {
            type: String,
            default: "normal"
        },
        size: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        circle: {
            type: Boolean
        }
    },
    emits: ['click'],
    setup(props, { slots, emit }) {
        const classes = computed$1(() => {
            const { type, size, disabled, loading, circle, status } = props;
            return {
                'u-button': true,
                'is-disabled': disabled,
                'is-loading': loading,
                'is-circle': circle,
                [`u-button--${type}`]: type,
                [`u-button--${status}`]: status,
                [`u-button--${size}`]: size,
            };
        });
        const handleClick = (e) => {
            if (!props.disabled && props.loading)
                return;
            emit('click', e);
        };
        return () => (<button class={classes.value} onClick={handleClick}>
      {props.loading ? <i class={`u-icon-loading`}/> : ''}
      {props.icon && !props.loading ? <i class={`u-icon-${props.icon}`}/> : ''}
      {slots.default ? <span>{slots.default()}</span> : ''}
    </button>);
    }
});

const withIntall$7 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UButton = withIntall$7(Button);

const Icon = defineComponent({
    name: "UIcon",
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        return () => (<i class={`u-icon-${props.name}`}></i>);
    }
});

const withIntall$6 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UIcon = withIntall$6(Icon);

const ButtonGroup = defineComponent({
    name: 'UButtonGroup',
    setup(_, { slots }) {
        return () => (<div class="u-button-group">
        {slots.default && slots.default()}
      </div>);
    }
});

const withIntall$5 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UButtonGroup = withIntall$5(ButtonGroup);

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _PatchFlagNames, _slotFlagsText;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


(_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

(_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);

process.env.NODE_ENV !== 'production' ? Object.freeze({}) : {};
process.env.NODE_ENV !== 'production' ? Object.freeze([]) : [];

var NOOP = function NOOP() {};

var extend = Object.assign;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

var hasChanged = function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
};

var activeEffectScope;

function recordEffectScope(effect) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

var createDep = function createDep(effects) {
  var dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

var wasTracked = function wasTracked(dep) {
  return (dep.w & trackOpBit) > 0;
};

var newTracked = function newTracked(dep) {
  return (dep.n & trackOpBit) > 0;
};

var initDepMarkers = function initDepMarkers(_ref) {
  var deps = _ref.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

var finalizeDepMarkers = function finalizeDepMarkers(effect) {
  var deps = effect.deps;

  if (deps.length) {
    var ptr = 0;

    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep["delete"](effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

var targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

var effectTrackDepth = 0;
var trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

var maxMarkerBits = 30;
var activeEffect;
var ITERATE_KEY = Symbol(process.env.NODE_ENV !== 'production' ? 'iterate' : '');
var MAP_KEY_ITERATE_KEY = Symbol(process.env.NODE_ENV !== 'production' ? 'Map key iterate' : '');

var ReactiveEffect = /*#__PURE__*/function () {
  function ReactiveEffect(fn) {
    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var scope = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ReactiveEffect);

    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    recordEffectScope(this, scope);
  }

  _createClass(ReactiveEffect, [{
    key: "run",
    value: function run() {
      if (!this.active) {
        return this.fn();
      }

      var parent = activeEffect;
      var lastShouldTrack = shouldTrack;

      while (parent) {
        if (parent === this) {
          return;
        }

        parent = parent.parent;
      }

      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;

        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }

        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }

        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = undefined;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.active) {
        cleanupEffect(this);

        if (this.onStop) {
          this.onStop();
        }

        this.active = false;
      }
    }
  }]);

  return ReactiveEffect;
}();

function cleanupEffect(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    var depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    var dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = createDep());
    }

    var eventInfo = process.env.NODE_ENV !== 'production' ? {
      effect: activeEffect,
      target: target,
      type: type,
      key: key
    } : undefined;
    trackEffects(dep, eventInfo);
  }
}

function trackEffects(dep, debuggerEventExtraInfo) {
  var shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if (process.env.NODE_ENV !== 'production' && activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var deps = [];

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = _toConsumableArray(depsMap.values());
  } else if (key === 'length' && isArray(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var eventInfo = process.env.NODE_ENV !== 'production' ? {
    target: target,
    type: type,
    key: key,
    newValue: newValue,
    oldValue: oldValue,
    oldTarget: oldTarget
  } : undefined;

  if (deps.length === 1) {
    if (deps[0]) {
      if (process.env.NODE_ENV !== 'production') {
        triggerEffects(deps[0], eventInfo);
      } else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    var effects = [];

    var _iterator = _createForOfIteratorHelper(deps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;

        if (dep) {
          effects.push.apply(effects, _toConsumableArray(dep));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (process.env.NODE_ENV !== 'production') {
      triggerEffects(createDep(effects), eventInfo);
    } else {
      triggerEffects(createDep(effects));
    }
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  var _iterator2 = _createForOfIteratorHelper(isArray(dep) ? dep : _toConsumableArray(dep)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _effect2 = _step2.value;

      if (_effect2 !== activeEffect || _effect2.allowRecurse) {
        if (process.env.NODE_ENV !== 'production' && _effect2.onTrigger) {
          _effect2.onTrigger(extend({
            effect: _effect2
          }, debuggerEventExtraInfo));
        }

        if (_effect2.scheduler) {
          _effect2.scheduler();
        } else {
          _effect2.run();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var isNonTrackableKeys = /*#__PURE__*/makeMap("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(isSymbol));
var get = /*#__PURE__*/createGetter();
var readonlyGet = /*#__PURE__*/createGetter(true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = arr[key].apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, _toConsumableArray(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();

      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_isShallow"
    /* IS_SHALLOW */
    ) {
      return shallow;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = isArray(target);

    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }

    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }

    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }

      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = hasOwn(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , isArray(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (process.env.NODE_ENV !== 'production') {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (process.env.NODE_ENV !== 'production') {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget = process.env.NODE_ENV !== 'production' ? isMap(target) ? new Map(target) : new Set(target) : undefined; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = isMap(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (process.env.NODE_ENV !== 'production') {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = toRawType(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap(toRawType(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function toRaw(observed) {
  var raw = observed && observed["__v_raw"
  /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

var toReactive = function toReactive(value) {
  return isObject(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return isObject(value) ? readonly(value) : value;
};

function trackRefValue(ref) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref);

    if (process.env.NODE_ENV !== 'production') {
      trackEffects(ref.dep || (ref.dep = createDep()), {
        target: ref,
        type: "get"
        /* GET */
        ,
        key: 'value'
      });
    } else {
      trackEffects(ref.dep || (ref.dep = createDep()));
    }
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (process.env.NODE_ENV !== 'production') {
      triggerEffects(ref.dep, {
        target: ref,
        type: "set"
        /* SET */
        ,
        key: 'value',
        newValue: newVal
      });
    } else {
      triggerEffects(ref.dep);
    }
  }
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, function () {
      if (!_this2._dirty) {
        _this2._dirty = true;
        triggerRefValue(_this2);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);
      trackRefValue(self);

      if (self._dirty || !self._cacheable) {
        self._dirty = false;
        self._value = self.effect.run();
      }

      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = isFunction(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter = process.env.NODE_ENV !== 'production' ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if (process.env.NODE_ENV !== 'production' && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef;
}

Promise.resolve();

const Row = defineComponent({
    name: 'URow',
    props: {
        tag: {
            type: String,
            default: 'p'
        },
        gutter: {
            type: Number,
            default: 24
        },
        justify: {
            type: String,
            default: 'start'
        }
    },
    setup(props, { slots }) {
        provide('gutter', props.gutter);
        const classes = computed(() => [
            'u-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ''
        ]);
        const styles = computed(() => {
            const ret = {
                marginLeft: '',
                marginRight: ''
            };
            if (props.gutter > 0) {
                ret.marginLeft = `-${props.gutter / 2}px`;
                ret.marginRight = `-${props.gutter / 2}px`;
            }
            return ret;
        });
        return () => h(props.tag, {
            class: classes.value,
            style: styles.value,
        }, slots.default?.());
    }
});

Row.install = (app) => {
    app.component(Row.name, Row);
};

const Col = defineComponent({
    name: 'UCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        xs: {
            type: Number,
            default: 0
        },
        sm: {
            type: Number,
            default: 0
        },
        md: {
            type: Number,
            default: 0
        },
        lg: {
            type: Number,
            default: 0
        },
        xl: {
            type: Number,
            default: 0
        }
    },
    setup(props, { slots }) {
        const gutter = inject('gutter', 0);
        const classes = computed(() => {
            const ret = [];
            const pos = ['span', 'offset'];
            pos.forEach(item => {
                const size = props[item];
                if (typeof size === 'number' && size > 0) {
                    ret.push(`u-col-${item}-${props[item]}`);
                }
            });
            const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
            sizes.forEach(size => {
                if (typeof props[size] === 'number' && props[size] > 0) {
                    ret.push(`u-col-${size}-${props[size]}`);
                }
            });
            return ['u-col', ...ret];
        });
        const styles = computed(() => {
            if (gutter > 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px',
                };
            }
            return {};
        });
        return () => h(props.tag, {
            class: classes.value,
            style: styles.value
        }, slots.default?.());
    }
});

Col.install = (app) => {
    app.component(Col.name, Col);
};

const useCheckboxGroup = () => {
    const checkboxGroup = inject('UCheckboxGroup', {});
    const isGroup = checkboxGroup.name === 'u-checkbox-group';
    return {
        isGroup,
        checkboxGroup
    };
};
const useModel = (props) => {
    const emit = getCurrentInstance().emit;
    const { isGroup, checkboxGroup } = useCheckboxGroup();
    const store = computed$1(() => checkboxGroup ? checkboxGroup.modelValue.value : props.modelValue);
    return computed$1({
        get() {
            return isGroup ? store.value : props.modelValue;
        },
        set(newValue) {
            emit(`update:modelValue`, newValue);
        }
    });
};
const useCheckboxStatus = (props, model) => {
    const isChecked = computed$1(() => {
        const value = model.value;
        if (Array.isArray(value)) {
            return value.includes(props.label);
        }
        else {
            return value;
        }
    });
    return isChecked;
};
const useEvent = (props, model) => {
    if (props.disabled)
        return;
    const emit = getCurrentInstance().emit;
    const { checkboxGroup } = useCheckboxGroup();
    const value = model.value;
    const handleCheck = () => {
        if (Array.isArray(value)) {
            //触发组的更新
            const groupValue = unref(checkboxGroup.modelValue);
            const index = groupValue.findIndex(m => m === props.label);
            if (index < 0) {
                groupValue.push(props.label);
            }
            else {
                groupValue.splice(index, 1);
            }
            checkboxGroup.changeEvent(groupValue);
        }
        else {
            model.value = !model.value;
            emit('update:modelValue', !model.value);
            emit('change', !model.value);
        }
    };
    return handleCheck;
};
const useCheckbox = (props) => {
    const model = useModel(props);
    const isChecked = useCheckboxStatus(props, model);
    const handleCheck = useEvent(props, model);
    return {
        isChecked,
        handleCheck
    };
};

const Checkbox$1 = defineComponent({
    name: 'UCheckbox',
    props: {
        indeterminate: Boolean,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean],
    },
    emits: ['change', 'update:modelValue'],
    setup(props, { slots }) {
        const { isChecked, handleCheck } = useCheckbox(props);
        const classes = computed$1(() => ({
            'u-checkbox__input': true,
            'is-checked': isChecked.value,
            'is-indeterminate': props.indeterminate && !isChecked.value,
        }));
        const checkboxIcon = computed$1(() => {
            const { indeterminate } = props;
            if (!isChecked.value && !indeterminate)
                return '';
            return <i class={isChecked.value ? 'u-icon-success' : 'u-icon-jianhao'}/>;
        });
        return () => (<div class={['u-checkbox', props.disabled && 'is-disabled']}>
        <span class={classes.value} onClick={handleCheck}>
          {checkboxIcon.value}
        </span>
        <span class="u-checkbox__label">
          {slots.default?.() || props.label}
        </span>
      </div>);
    }
});

Checkbox$1.install = (app) => {
    app.component(Checkbox$1.name, Checkbox$1);
};

const Checkbox = defineComponent({
    name: 'UCheckboxGroup',
    props: {
        modelValue: Array
    },
    emits: ['change', 'update:modelValue'],
    setup(props, { emit, slots }) {
        const modelValue = computed$1({
            get() {
                return props.modelValue;
            },
            set(newV) {
                emit('update:modelValue', newV);
            }
        });
        const changeEvent = (value) => {
            emit('change', value);
            emit('update:modelValue', value);
        };
        provide('UCheckboxGroup', {
            modelValue,
            changeEvent,
            name: 'u-checkbox-group'
        });
        return () => (<div class="u-checkbox-group">
        {slots?.default()}
      </div>);
    }
});

Checkbox.install = function (app) {
    app.component(Checkbox.name, Checkbox);
};

const TransitionHook = (delay) => ({
    onBeforeEnter(el) {
        el.style.transition = `${delay}s height ease-in-out`;
        el.style.height = '0';
    },
    onEnter(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = `${el.scrollHeight}px`;
        }
        else {
            el.style.height = '';
        }
        el.style.overflow = 'hidden';
    },
    onAfterEnter(el) {
        el.style.transition = '';
        el.style.height = '';
    },
    onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
    },
    onLeave(el) {
        if (el.scrollHeight !== 0) {
            el.style.transition = `${delay}s height ease-in-out`;
            el.style.height = '0';
        }
    },
    onAfterLeave(el) {
        el.style.transition = '';
        el.style.height = '';
    }
});
const CollapseTransition = defineComponent({
    name: 'UCollapseTransition',
    props: {
        delay: {
            type: Number,
            default: 0.3
        }
    },
    setup(props, { slots }) {
        return () => h(Transition, TransitionHook(props.delay), {
            default: () => slots.default()
        });
    }
});

const withIntall$4 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UCollapseTransition = withIntall$4(CollapseTransition);

const useCheck = (props, panelState) => {
    const labelProps = computed$1(() => props.props.label);
    const keyProps = computed$1(() => props.props.key);
    const disabledProps = computed$1(() => props.props.disabled);
    const emit = getCurrentInstance().emit;
    const checkableData = computed$1(() => {
        return props.data.filter(item => !item[disabledProps.value]);
    });
    const handleCheckedAllChange = (val) => {
        if (panelState.indeterminate)
            return panelState.checked = [];
        panelState.allChecked = val;
        panelState.checked = val ? checkableData.value.map(item => item[keyProps.value]) : [];
    };
    watch(() => panelState.checked, () => {
        const checkKeys = checkableData.value.map(item => item[keyProps.value]);
        panelState.allChecked = checkKeys.every(item => panelState.checked.includes(item)) && checkableData.value.length > 0;
        panelState.indeterminate = checkKeys.some(item => panelState.checked.includes(item)) && !panelState.allChecked;
        emit('checkedChange', panelState.checked);
    }, {
        deep: true
    });
    watch(() => props.data, () => {
        panelState.checked = [];
    });
    return {
        labelProps,
        keyProps,
        disabledProps,
        handleCheckedAllChange
    };
};

const TransferPanel = defineComponent({
    name: 'UTransferPanel',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        props: {
            type: Object
        },
        target: {
            type: Boolean
        }
    },
    emits: ['checkedChange'],
    components: {
        UCheckbox: Checkbox$1,
        UCheckboxGroup: Checkbox
    },
    setup(props) {
        const panelState = reactive$1({
            checked: [],
            allChecked: false,
            indeterminate: false
        });
        const { keyProps, disabledProps, labelProps, handleCheckedAllChange } = useCheck(props, panelState);
        return () => (<div class="u-transfer__panel">
        <div class="u-transfer__panel__header">
          <UCheckbox v-model={panelState.allChecked} indeterminate={panelState.indeterminate} onChange={handleCheckedAllChange}>
            <span>{props.target ? '目标项' : '源项'}</span>
          </UCheckbox>
          <span>{props.data.length + '/' + panelState.checked.length}</span>
        </div>
        <div class="u-transfer__panel__checkbox">
          <UCheckboxGroup v-model={panelState.checked}>
            {props.data.map((item) => (<UCheckbox key={item[keyProps.value]} label={item[keyProps.value]} disabled={item[disabledProps.value]}>
                  {item[labelProps.value]}
                </UCheckbox>))}
          </UCheckboxGroup>
        </div>
      </div>);
    }
});

const useComputedData = (props) => {
    //calc left right data
    const propsKey = computed$1(() => props.props.key);
    const data = computed$1(() => {
        return props.data.reduce((memo, current) => {
            memo[current[propsKey.value]] = current;
            return memo;
        }, {});
    });
    const sourceData = computed$1(() => {
        return props.data.filter(item => !props.modelValue.includes(item[propsKey.value]));
    });
    const targetData = computed$1(() => {
        return props.modelValue.reduce((memo, key) => {
            memo.push(data.value[key]);
            return memo;
        }, []);
    });
    return {
        targetData,
        sourceData,
        propsKey
    };
};

const Transfer = defineComponent({
    name: 'UTransfer',
    props: {
        data: {
            type: Array,
        },
        modelValue: {
            type: Array
        },
        props: {
            type: Object,
            default: () => ({
                label: 'label',
                key: 'key',
                disabled: 'disabled'
            })
        }
    },
    components: {
        TransferPanel,
        UButton
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        let { targetData, sourceData } = useComputedData(props);
        const checkedState = reactive$1({
            leftChecked: [],
            rightChecked: []
        });
        const onSourceChange = (leftValue) => {
            checkedState.leftChecked = leftValue;
        };
        const onTargetChange = (rigthValue) => {
            checkedState.rightChecked = rigthValue;
        };
        const addToLeft = () => {
            const currentValue = props.modelValue.splice(0);
            checkedState.rightChecked.forEach(item => {
                let index = currentValue.indexOf(item);
                if (index > -1) {
                    currentValue.splice(index, 1);
                }
            });
            emit("update:modelValue", currentValue);
        };
        const addToRight = () => {
            const leftChckedKeys = checkedState.leftChecked.map(key => key);
            let currentValue = [...props.modelValue, ...leftChckedKeys];
            emit("update:modelValue", currentValue);
        };
        return () => (<div class="u-transfer">
        <TransferPanel data={sourceData.value} props={props.props} onCheckedChange={onSourceChange}/>
        <div class="u-transfer__buttons">
          <UButton icon="arrow-left" size="small" disabled={checkedState.rightChecked.length === 0} onClick={addToLeft}/>
          <UButton icon="arrow-right" size="small" disabled={checkedState.leftChecked.length === 0} onClick={addToRight}/>
        </div>
        <TransferPanel data={targetData.value} props={props.props} target onCheckedChange={onTargetChange}/>
      </div>);
    }
});

const withIntall$3 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UTransfer = withIntall$3(Transfer);

const useTreeNode = (props) => {
    const hasChildren = computed(() => props.node.children.length > 0);
    const expanded = computed(() => props.node.expanded);
    const level = computed(() => props.node.level);
    return {
        hasChildren,
        expanded,
        level
    };
};
const useTreeContext = () => {
    const { selectKey, checkable } = inject('UTree');
    return {
        selectKey,
        checkable
    };
};

defineComponent({
    name: 'UTreeNode',
    props: {
        node: {
            type: Object,
            required: true
        },
        level: {
            type: Number,
            default: 0
        },
        parentKey: {
            type: String,
            default: ''
        }
    },
    emits: ['childExpaned', 'selectChange', 'checkChange'],
    setup(props, { emit, slots }) {
        const { hasChildren, expanded, level } = useTreeNode(props);
        const { selectKey, checkable } = useTreeContext();
        const styles = computed(() => ({
            paddingLeft: level.value * 18 + 'px'
        }));
        const titleClasses = computed(() => ({
            "u-tree__node--content--title": true,
            'is-selected': selectKey.value === props.node.key,
            'is-diabled': props.node.disabled
        }));
        const renderNodeIcon = () => {
            return hasChildren.value ?
                <i onClick={handleIconClick} class={["u-icon-arrow-right-filling", expanded.value && 'is-expanded']}/>
                : null;
        };
        const renderContent = () => {
            return <div class="u-tree__node--content">
        {renderNodeIcon()}
        {checkable && <Checkbox disabled={props.node.disabled} key={props.node.key} modelValue={props.node.checked} indeterminate={props.node.indeterminate} onChange={handleCheckChange}/>}

        <div class={titleClasses.value} onClick={handleLableClick}>
          {props.node.label}
        </div>
      </div>;
        };
        const handleCheckChange = () => {
            emit('checkChange', props.node);
        };
        const handleIconClick = (e) => {
            e.stopPropagation();
            emit('childExpaned', props.node);
        };
        const handleLableClick = (e) => {
            e.stopPropagation();
            emit('selectChange', props.node);
        };
        return () => (<div class="u-tree__node" style={styles.value}>
        {renderContent()}
        <CollapseTransition>
          {expanded.value && <div class="u-tree__node--children">
              {slots.default && slots.default()}
            </div>}
        </CollapseTransition>
      </div>);
    }
});

const createTreeNode = (node, parentKey, level = 0) => {
    return reactive$1({
        key: node.key,
        label: node.label,
        parentKey,
        level,
        disabled: node.disabled || false,
        selected: node.selected || false,
        checked: node.checked || false,
        expanded: node.expanded || false,
        indeterminate: node.indeterminate || false,
        children: [],
    });
};

const useGenTreeData = (props) => {
    const data = computed$1(() => {
        const res = [];
        const dfs = (treeList, parentKey, level = 0) => {
            const treeNodes = [];
            level = level + 1;
            treeList.forEach(item => {
                const treeNode = createTreeNode(item, parentKey, level);
                if (props.defaultExpaned.includes(treeNode.key))
                    treeNode.expanded = true;
                treeNodes.push(treeNode);
                if (item.children?.length)
                    treeNode.children = dfs(item.children, item.key, level);
            });
            return treeNodes;
        };
        props.data.forEach(item => {
            const treeNode = createTreeNode(item, '');
            if (props.defaultExpaned.includes(treeNode.key))
                treeNode.expanded = true;
            if (item.children)
                treeNode.children = dfs(item.children, item.key);
            res.push(treeNode);
        });
        return res;
    });
    return data;
};
const useGenFlatList = (sourceData) => {
    const flatList = [];
    const dfs = (treeList) => {
        treeList.forEach(item => {
            flatList.push(item);
            if (item.children.length)
                dfs(item.children);
        });
    };
    dfs(sourceData);
    return flatList;
};
const useTreeUpdate = () => {
    const updateDownWard = (children, checked) => {
        const updateChildren = (children) => {
            children.forEach(item => {
                if (item.children.length)
                    updateChildren(item.children);
                item.checked = checked;
                item.indeterminate = false;
            });
        };
        updateChildren(children);
    };
    const updateUpWard = (currentNode, flatList) => {
        const updateParent = (currentNode) => {
            const [parentNode] = flatList.filter(item => item.key === currentNode.parentKey);
            if (parentNode) {
                const parentAllChecked = parentNode.children.every(item => item.checked);
                const parentIndeterminate = parentNode.children.some(item => item.checked || item.indeterminate);
                parentNode.checked = parentAllChecked;
                parentNode.indeterminate = parentIndeterminate;
                updateParent(parentNode);
            }
        };
        updateParent(currentNode);
    };
    return {
        updateDownWard, updateUpWard
    };
};
const useTree = (props) => {
    const selectKey = ref('');
    const data = useGenTreeData(props);
    console.log(data.value);
    const flatList = useGenFlatList(data.value);
    const { updateDownWard, updateUpWard } = useTreeUpdate();
    return {
        data,
        selectKey,
        flatList,
        updateDownWard,
        updateUpWard
    };
};

const Tree = defineComponent({
    name: 'UTree',
    props: {
        data: {
            type: Array,
            requred: true
        },
        defaultExpaned: {
            type: Array,
            default: () => ([])
        },
        checkable: Boolean,
        checkStrictly: Boolean
    },
    emits: ['select', 'checkedChange'],
    setup(props, { emit }) {
        const { updateDownWard, updateUpWard, selectKey, data, flatList } = useTree(props);
        provide('UTree', {
            selectKey,
            checkable: props.checkable
        });
        const handleExpaned = (node) => {
            node.expanded = !node.expanded;
        };
        const handleSelectChange = (node) => {
            selectKey.value = node.key;
            emit('select', node.key);
        };
        const handleCheckChange = (node) => {
            node.checked = !node.checked;
            node.indeterminate = false;
            let currentCheckedKeys = [];
            if (props.checkStrictly) {
                updateDownWard(node.children, node.checked);
                updateUpWard(node, flatList);
            }
            currentCheckedKeys = flatList.filter(item => item.checked).map(item => item.key);
            emit('checkedChange', currentCheckedKeys);
        };
        const renderNodes = () => {
            const dfs = (nodes) => {
                return nodes.map(treeNode => {
                    const nodeProps = {
                        node: treeNode,
                        onSelectChange: handleSelectChange,
                        onChildExpaned: handleExpaned,
                        onCheckChange: handleCheckChange
                    };
                    if (treeNode.children.length) {
                        return <TreeNode {...nodeProps}>
              {dfs(treeNode.children)}
            </TreeNode>;
                    }
                    else {
                        return <TreeNode {...nodeProps}/>;
                    }
                });
            };
            return dfs(data.value);
        };
        return () => (<div class="u-tree">{renderNodes()}</div>);
    }
});

const withIntall$2 = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
const UTree = withIntall$2(Tree);

const Message$1 = defineComponent({
    name: 'UMessage',
    props: {
        id: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: Number,
            default: 3000
        },
        onClose: {
            type: Function,
        },
        offset: {
            type: Number,
            default: 20
        },
        center: Boolean,
    },
    emits: ['destroy'],
    setup(props, { emit }) {
        const classes = computed$1(() => ({
            'u-message': true,
            [`u-message--${props.type}`]: props.type
        }));
        const styles = computed$1(() => ({
            top: `${props.offset}px`
        }));
        const messageIcon = computed$1(() => {
            return `u-icon-${props.type}`;
        });
        const visiable = ref(false);
        let timer = null;
        const startTimer = () => {
            timer = setTimeout(() => {
                visiable.value = false;
            }, props.duration);
        };
        onMounted(() => {
            visiable.value = true;
            startTimer();
        });
        onUnmounted(() => {
            clearTimeout(timer);
            timer = null;
        });
        return () => (<Transition name='zoom-fade' mode="out-in" onBeforeLeave={props.onClose} onAfterLeave={() => emit('destroy')}>
        <div class={classes.value} v-show={visiable.value} style={styles.value}>
          <i class={messageIcon.value}></i>
          <span>{props.message}</span>
        </div>
      </Transition>);
    }
});

const instances = [];
let seed = 1;
const Message = (options) => {
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    let offset = options.offset || 20;
    instances.forEach(inst => {
        offset += inst.el.offsetHeight + 20;
    });
    console.log(offset);
    let userClose = options.onClose;
    let opts = {
        ...options,
        id: `message_${seed++}`,
        offset,
        onClose: () => {
            nextTick(() => {
                const removeIndex = instances.findIndex(inst => inst.props.id === opts.id);
                instances.splice(removeIndex, 1);
                instances.forEach(item => {
                    item.el.style.top = item.props.offset - 60 + 'px';
                    item.props.offset = item.props.offset - 60;
                });
            });
            userClose?.();
        }
    };
    const container = document.createElement('div');
    const messageVnode = createVNode(Message$1, opts);
    messageVnode.props.onDestroy = () => {
        render(null, container); //remove dom
    };
    render(messageVnode, container);
    document.body.appendChild(container.firstChild);
    instances.push(messageVnode);
};

const withIntall$1 = (comp) => {
    comp.install = function (app) {
        app.config.globalProperties.$message = Message;
    };
    return comp;
};
const UMessage = withIntall$1(Message);

const Space = defineComponent({
    name: 'USpace',
    props: {
        direction: {
            type: String,
            default: 'horizontal'
        },
        wrap: {
            type: Boolean,
            default: false
        },
        fill: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 5
        }
    },
    setup(props, { slots }) {
        const classes = computed$1(() => ({
            'u-space': true,
            [`is-${props.direction}`]: props.direction,
            'is-wrap': props.wrap || props.direction === 'vertical',
            'is-fill': props.fill
        }));
        const styles = computed$1(() => ({
            marginRight: props.size + 'px',
            marginBottom: props.wrap || props.direction === 'vertical' ? props.size + 'px' : 0
        }));
        const renderContent = () => {
            return slots?.default().map(item => {
                return <div class="u-space-item" style={styles.value}>{item}</div>;
            });
        };
        return () => (<div class={classes.value}>{renderContent()}</div>);
    }
});

const withIntall = (comp) => {
    comp.install = function (app) {
        app.component(Space.name, Space);
    };
    return comp;
};
const USpace = withIntall(Space);

const components = [UButton, UIcon, UButtonGroup,
    Row, Col, Checkbox$1, Checkbox, UTransfer, UCollapseTransition, UTree, UMessage, USpace];
const install = (app) => {
    components.forEach(comp => {
        app.component(comp.name, comp);
    });
};
var index = {
    install
};

export { UButton as Button, UButtonGroup as ButtonGroup, Checkbox$1 as Checkbox, Checkbox as CheckboxGroup, Col, UCollapseTransition as CollapseTransition, UIcon as Icon, UMessage as Message, Row, UTransfer as Transfer, UTree as Tree, index as default };
