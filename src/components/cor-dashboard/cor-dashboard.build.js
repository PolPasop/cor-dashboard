"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('assert'), require('worker_threads')) : typeof define === 'function' && define.amd ? define(['assert', 'worker_threads'], factory) : (global = global || self, global.dashboard = factory(global.assert, global.worker_threads));
})(void 0, function (assert, worker_threads) {
  'use strict';

  var Data = {
    DATA: [{
      title: "News",
      category: "news",
      total: "45",
      newscategories: [{
        label: "Press releases",
        total: 125
      }, {
        label: "Regional news",
        total: 78
      }, {
        label: "Success stories",
        total: 12
      }]
    }, {
      title: "Events",
      category: "events",
      total: "45",
      newscategories: [{
        label: "Press releases",
        total: 125
      }, {
        label: "Regional news",
        total: 78
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }, {
        label: "Success stories",
        total: 12
      }]
    }, {
      title: "Lang usage",
      category: "lang-usage",
      total: "",
      charttype: "barChart2",
      body: "Card Body",
      itemdata: [{
        label: "FR",
        total: 14
      }, {
        label: "EN",
        total: 154
      }, {
        label: "ES",
        total: 104
      }, {
        label: "DU",
        total: 54
      }, {
        label: "BU",
        total: 15
      }]
    }, {
      title: "Content types",
      category: "lang-usage",
      size: "full",
      total: "",
      charttype: "donutChart",
      body: "Card Body",
      itemdata: [{
        label: "News",
        total: 14
      }, {
        label: "Events",
        total: 154
      }, {
        label: "Opinions",
        total: 104
      }, {
        label: "Studies",
        total: 54
      }, {
        label: "Brochures",
        total: 15
      }]
    }, {
      title: "Events",
      size: "full",
      category: "events",
      cardtype: "languageOverview",
      chart: "bar-chart",
      total: "45",
      body: "Card Body",
      languages: [{
        label: "BG",
        total: 50
      }, {
        label: "CS",
        total: 2
      }, {
        label: "DA",
        total: 7
      }, {
        label: "DE",
        total: 87
      }, {
        label: "EL",
        total: 24
      }, {
        label: "EN",
        total: 6
      }, {
        label: "ES",
        total: 78
      }, {
        label: "ET",
        total: 0
      }, {
        label: "FI",
        total: 5
      }, {
        label: "FR",
        total: 3
      }, {
        label: "GA",
        total: 0
      }, {
        label: "HR",
        total: 14
      }, {
        label: "HU",
        total: 3
      }, {
        label: "IT",
        total: 47
      }, {
        label: "LT",
        total: 75
      }, {
        label: "LV",
        total: 26
      }, {
        label: "MT",
        total: 65
      }, {
        label: "NL",
        total: 37
      }, {
        label: "PL",
        total: 0
      }, {
        label: "PT",
        total: 21
      }, {
        label: "RO",
        total: 48
      }, {
        label: "SK",
        total: 23
      }, {
        label: "SL",
        total: 16
      }, {
        label: "SV",
        total: 9
      }]
    }, {
      title: "Multilinguism",
      size: "full",
      cardtype: "multilinguismOverview",
      multilingualContent: [{
        contenttype: "News",
        translations: [{
          label: "BG",
          total: 5
        }, {
          label: "CS",
          total: 2
        }, {
          label: "DA",
          total: 7
        }, {
          label: "DE",
          total: 87
        }, {
          label: "EL",
          total: 24
        }, {
          label: "EN",
          total: 78
        }, {
          label: "ES",
          total: 78
        }, {
          label: "ET",
          total: 0
        }, {
          label: "FI",
          total: 5
        }, {
          label: "FR",
          total: 3
        }, {
          label: "GA",
          total: 0
        }, {
          label: "HR",
          total: 14
        }, {
          label: "HU",
          total: 3
        }, {
          label: "IT",
          total: 47
        }, {
          label: "LT",
          total: 75
        }, {
          label: "LV",
          total: 26
        }, {
          label: "MT",
          total: 65
        }, {
          label: "NL",
          total: 37
        }, {
          label: "PL",
          total: 0
        }, {
          label: "PT",
          total: 21
        }, {
          label: "RO",
          total: 48
        }, {
          label: "SK",
          total: 23
        }, {
          label: "SL",
          total: 16
        }, {
          label: "SV",
          total: 9
        }]
      }, {
        contenttype: "Events",
        translations: [{
          label: "BG",
          total: 50
        }, {
          label: "CS",
          total: 2
        }, {
          label: "DA",
          total: 7
        }, {
          label: "DE",
          total: 87
        }, {
          label: "EL",
          total: 24
        }, {
          label: "EN",
          total: 6
        }, {
          label: "ES",
          total: 78
        }, {
          label: "ET",
          total: 0
        }, {
          label: "FI",
          total: 5
        }, {
          label: "FR",
          total: 3
        }, {
          label: "GA",
          total: 0
        }, {
          label: "HR",
          total: 14
        }, {
          label: "HU",
          total: 3
        }, {
          label: "IT",
          total: 47
        }, {
          label: "LT",
          total: 75
        }, {
          label: "LV",
          total: 26
        }, {
          label: "MT",
          total: 65
        }, {
          label: "NL",
          total: 37
        }, {
          label: "PL",
          total: 0
        }, {
          label: "PT",
          total: 21
        }, {
          label: "RO",
          total: 48
        }, {
          label: "SK",
          total: 23
        }, {
          label: "SL",
          total: 16
        }, {
          label: "SV",
          total: 9
        }]
      }, {
        contenttype: "Opinions",
        translations: [{
          label: "BG",
          total: 50
        }, {
          label: "CS",
          total: 2
        }, {
          label: "DA",
          total: 7
        }, {
          label: "DE",
          total: 87
        }, {
          label: "EL",
          total: 24
        }, {
          label: "EN",
          total: 6
        }, {
          label: "ES",
          total: 78
        }, {
          label: "ET",
          total: 0
        }, {
          label: "FI",
          total: 5
        }, {
          label: "FR",
          total: 3
        }, {
          label: "GA",
          total: 0
        }, {
          label: "HR",
          total: 14
        }, {
          label: "HU",
          total: 3
        }, {
          label: "IT",
          total: 47
        }, {
          label: "LT",
          total: 75
        }, {
          label: "LV",
          total: 26
        }, {
          label: "MT",
          total: 65
        }, {
          label: "NL",
          total: 37
        }, {
          label: "PL",
          total: 0
        }, {
          label: "PT",
          total: 21
        }, {
          label: "RO",
          total: 48
        }, {
          label: "SK",
          total: 23
        }, {
          label: "SL",
          total: 16
        }, {
          label: "SV",
          total: 9
        }]
      }, {
        contenttype: "Publications",
        translations: [{
          label: "BG",
          total: 50
        }, {
          label: "CS",
          total: 2
        }, {
          label: "DA",
          total: 7
        }, {
          label: "DE",
          total: 87
        }, {
          label: "EL",
          total: 24
        }, {
          label: "EN",
          total: 6
        }, {
          label: "ES",
          total: 78
        }, {
          label: "ET",
          total: 0
        }, {
          label: "FI",
          total: 5
        }, {
          label: "FR",
          total: 3
        }, {
          label: "GA",
          total: 0
        }, {
          label: "HR",
          total: 14
        }, {
          label: "HU",
          total: 3
        }, {
          label: "IT",
          total: 47
        }, {
          label: "LT",
          total: 75
        }, {
          label: "LV",
          total: 26
        }, {
          label: "MT",
          total: 65
        }, {
          label: "NL",
          total: 37
        }, {
          label: "PL",
          total: 0
        }, {
          label: "PT",
          total: 21
        }, {
          label: "RO",
          total: 48
        }, {
          label: "SK",
          total: 23
        }, {
          label: "SL",
          total: 16
        }, {
          label: "SV",
          total: 9
        }]
      }, {
        contenttype: "Studies",
        translations: [{
          label: "BG",
          total: 50
        }, {
          label: "CS",
          total: 2
        }, {
          label: "DA",
          total: 7
        }, {
          label: "DE",
          total: 87
        }, {
          label: "EL",
          total: 24
        }, {
          label: "EN",
          total: 6
        }, {
          label: "ES",
          total: 78
        }, {
          label: "ET",
          total: 0
        }, {
          label: "FI",
          total: 5
        }, {
          label: "FR",
          total: 3
        }, {
          label: "GA",
          total: 0
        }, {
          label: "HR",
          total: 14
        }, {
          label: "HU",
          total: 3
        }, {
          label: "IT",
          total: 47
        }, {
          label: "LT",
          total: 75
        }, {
          label: "LV",
          total: 26
        }, {
          label: "MT",
          total: 65
        }, {
          label: "NL",
          total: 37
        }, {
          label: "PL",
          total: 0
        }, {
          label: "PT",
          total: 21
        }, {
          label: "RO",
          total: 48
        }, {
          label: "SK",
          total: 23
        }, {
          label: "SL",
          total: 16
        }, {
          label: "SV",
          total: 9
        }]
      }]
    }],
    ITEMS: [{
      contenttype: "News",
      category: "news",
      title: "Commission report refers to REGHUB initiative and indicates stepping up the collaboration with the Committee of the Regions to contribute to Commission’s policy making  ",
      date: "10/12/2018",
      theme: "Subsidiarity and proportionality",
      label: "Press release",
      picture: "http://placeimg.com/640/480/any",
      intro: "In its recent stock taking report about better regulation which was published on April 15th the European Commission took note of the recent actions the European Committee of the Regions has taken to implement the recommendations made by the Task Force on Subsidiarity of last year.",
      languages: [{
        label: "BG",
        status: "translated"
      }, {
        label: "CS",
        status: "draft"
      }, {
        label: "DA",
        status: "draft"
      }, {
        label: "DE",
        status: "draft"
      }, {
        label: "EL",
        status: "translated"
      }, {
        label: "EN",
        status: "translated"
      }, {
        label: "ES",
        status: "draft"
      }, {
        label: "ET",
        status: "draft"
      }, {
        label: "FI",
        status: ""
      }, {
        label: "FR",
        status: ""
      }, {
        label: "GA",
        status: "draft"
      }, {
        label: "HR",
        status: "draft"
      }, {
        label: "HU",
        status: "translated"
      }, {
        label: "IT",
        status: "draft"
      }, {
        label: "LT",
        status: ""
      }, {
        label: "LV",
        status: "draft"
      }, {
        label: "MT",
        status: "draft"
      }, {
        label: "NL",
        status: "draft"
      }, {
        label: "PL",
        status: ""
      }, {
        label: "PT",
        status: "translated"
      }, {
        label: "RO",
        status: "draft"
      }, {
        label: "SK",
        status: ""
      }, {
        label: "SL",
        status: "draft"
      }, {
        label: "SV",
        status: ""
      }]
    }, {
      contenttype: "News",
      category: "news",
      title: "Take part in our survey on socio-economic transformation and energy transition in EU regions and cities!  ",
      date: "10/12/2018",
      theme: "Energy efficiency, market and technology; Energy Union and infrastructure",
      label: "",
      picture: "",
      intro: "​In response to the Paris Agreement the EU has committed to reduce annual greenhouse gas emissions by 40% by the year 2030 when compared to 1990 levels and by at least 80% by 2050. Energy transformation is a key element in fighting climate change and requires a fast and broad transition across all sectors to a sustainable, low-emission energy system. ",
      languages: [{
        label: "BG",
        status: "translated"
      }, {
        label: "CS",
        status: "draft"
      }, {
        label: "DA",
        status: "draft"
      }, {
        label: "DE",
        status: "draft"
      }, {
        label: "EL",
        status: "translated"
      }, {
        label: "EN",
        status: "translated"
      }, {
        label: "ES",
        status: "draft"
      }, {
        label: "ET",
        status: "draft"
      }, {
        label: "FI",
        status: ""
      }, {
        label: "FR",
        status: ""
      }, {
        label: "GA",
        status: "draft"
      }, {
        label: "HR",
        status: "draft"
      }, {
        label: "HU",
        status: "translated"
      }, {
        label: "IT",
        status: "draft"
      }, {
        label: "LT",
        status: ""
      }, {
        label: "LV",
        status: "draft"
      }, {
        label: "MT",
        status: "draft"
      }, {
        label: "NL",
        status: "draft"
      }, {
        label: "PL",
        status: ""
      }, {
        label: "PT",
        status: "translated"
      }, {
        label: "RO",
        status: "draft"
      }, {
        label: "SK",
        status: ""
      }, {
        label: "SL",
        status: "draft"
      }, {
        label: "SV",
        status: ""
      }]
    }, {
      contenttype: "News",
      category: "news",
      title: "Countering Disinformation on Local and Regional Level  ",
      date: "10/12/2018",
      theme: "",
      label: "Success story",
      picture: "http://placeimg.com/640/480/any",
      intro: "Disinformation and the ways to counter is a topic of great importance for the EU at all levels – from local to international. Access to accurate information from a variety of points of view is essential for good functioning of democratic political systems.",
      languages: [{
        label: "BG",
        status: "translated"
      }, {
        label: "CS",
        status: "draft"
      }, {
        label: "DA",
        status: "draft"
      }, {
        label: "DE",
        status: "draft"
      }, {
        label: "EL",
        status: "translated"
      }, {
        label: "EN",
        status: "translated"
      }, {
        label: "ES",
        status: "draft"
      }, {
        label: "ET",
        status: "draft"
      }, {
        label: "FI",
        status: ""
      }, {
        label: "FR",
        status: ""
      }, {
        label: "GA",
        status: "draft"
      }, {
        label: "HR",
        status: "draft"
      }, {
        label: "HU",
        status: "translated"
      }, {
        label: "IT",
        status: "draft"
      }, {
        label: "LT",
        status: ""
      }, {
        label: "LV",
        status: "draft"
      }, {
        label: "MT",
        status: "draft"
      }, {
        label: "NL",
        status: "draft"
      }, {
        label: "PL",
        status: ""
      }, {
        label: "PT",
        status: "translated"
      }, {
        label: "RO",
        status: "draft"
      }, {
        label: "SK",
        status: ""
      }, {
        label: "SL",
        status: "draft"
      }, {
        label: "SV",
        status: ""
      }]
    }, {
      contenttype: "Events",
      category: "events",
      title: "The European Committee of the Regions welcomes the vote by the European Parliament's Agriculture Committee in favour of new agricultural market surveillance and regulation tools  ",
      date: "10/12/2018",
      theme: "Agriculture; Rural development",
      label: "Regional news",
      picture: "http://placeimg.com/640/480/any",
      intro: "The towns and regions welcome the adoption of the report on the Common Organisation of the Markets by the Agriculture and Rural Development Committee of the European Parliament and call on the Member States to take these propositions on board. The report proposes new agricultural market surveillance and regulation tools that are vital to maintaining agriculture across the EU and keeping rural areas alive, as called for by the local and regional authorities.",
      languages: [{
        label: "BG",
        status: "translated"
      }, {
        label: "CS",
        status: "draft"
      }, {
        label: "DA",
        status: "draft"
      }, {
        label: "DE",
        status: "draft"
      }, {
        label: "EL",
        status: "translated"
      }, {
        label: "EN",
        status: "translated"
      }, {
        label: "ES",
        status: "draft"
      }, {
        label: "ET",
        status: "draft"
      }, {
        label: "FI",
        status: ""
      }, {
        label: "FR",
        status: ""
      }, {
        label: "GA",
        status: "draft"
      }, {
        label: "HR",
        status: "draft"
      }, {
        label: "HU",
        status: "translated"
      }, {
        label: "IT",
        status: "draft"
      }, {
        label: "LT",
        status: ""
      }, {
        label: "LV",
        status: "draft"
      }, {
        label: "MT",
        status: "draft"
      }, {
        label: "NL",
        status: "draft"
      }, {
        label: "PL",
        status: ""
      }, {
        label: "PT",
        status: "translated"
      }, {
        label: "RO",
        status: "draft"
      }, {
        label: "SK",
        status: ""
      }, {
        label: "SL",
        status: "draft"
      }, {
        label: "SV",
        status: ""
      }]
    }, {
      contenttype: "Events",
      category: "events",
      title: "The European Committee of the Regions welcomes the vote by the European Parliament's Agriculture Committee in favour of new agricultural market surveillance and regulation tools  ",
      date: "10/12/2018",
      theme: "Agriculture; Rural development",
      label: "International cooperation",
      picture: "http://placeimg.com/640/480/any",
      intro: "The towns and regions welcome the adoption of the report on the Common Organisation of the Markets by the Agriculture and Rural Development Committee of the European Parliament and call on the Member States to take these propositions on board. The report proposes new agricultural market surveillance and regulation tools that are vital to maintaining agriculture across the EU and keeping rural areas alive, as called for by the local and regional authorities.",
      languages: [{
        label: "BG",
        status: "translated"
      }, {
        label: "CS",
        status: "draft"
      }, {
        label: "DA",
        status: "draft"
      }, {
        label: "DE",
        status: "draft"
      }, {
        label: "EL",
        status: "translated"
      }, {
        label: "EN",
        status: "translated"
      }, {
        label: "ES",
        status: "draft"
      }, {
        label: "ET",
        status: "draft"
      }, {
        label: "FI",
        status: ""
      }, {
        label: "FR",
        status: ""
      }, {
        label: "GA",
        status: "draft"
      }, {
        label: "HR",
        status: "draft"
      }, {
        label: "HU",
        status: "translated"
      }, {
        label: "IT",
        status: "draft"
      }, {
        label: "LT",
        status: ""
      }, {
        label: "LV",
        status: "draft"
      }, {
        label: "MT",
        status: "draft"
      }, {
        label: "NL",
        status: "draft"
      }, {
        label: "PL",
        status: ""
      }, {
        label: "PT",
        status: "translated"
      }, {
        label: "RO",
        status: "draft"
      }, {
        label: "SK",
        status: ""
      }, {
        label: "SL",
        status: "draft"
      }, {
        label: "SV",
        status: ""
      }]
    }]
  };
  /*
      The base Component class. All our custom elements extend this class
      wich provides:
      1. A Shadow DOM for CSS scoping and DOM encapsulation.
      2. A reference to the app's root element.
      3. A method to dispatch a custom event.
      Global app state from @bdc
  */

  var Component =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(Component, _HTMLElement);

    function Component() {
      var _this;

      _classCallCheck(this, Component);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this)); // this.attachShadow({ mode: 'open' }); */

      _this.root = document.body.querySelector('cor-dashboard');
      _this.globalData = Data;
      return _this;
    }

    _createClass(Component, [{
      key: "dispatchUpdate",
      value: function dispatchUpdate(detail) {
        var event = new CustomEvent("state-update", {
          detail: detail,
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      }
    }]);

    return Component;
  }(_wrapNativeSuper(HTMLElement));

  var Template = {
    render: function render(data) {
      return "".concat(this.css(), "\n        ").concat(this.html(data));
    },
    html: function html(data) {
      return "\n        \n        ".concat(data.map(function (filter) {
        return "\n            <div class=\"cor-dashboard-filter expandable\">\n                <h2 class=\"cor-dashboard-filter__title\">\n                    <button class=\"cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--".concat(filter.icon, "\" data-toggle=\"collapse\" data-expandtarget=\"").concat(filter.filterName, "\" aria-expanded=\"").concat(filter.expanded ? "true" : "false", "\" aria-controls=\"collapseExample\">\n                        ").concat(filter.name, "\n                    </button>\n                </h2>\n                <div id=\"").concat(filter.filterName, "\" class=\"cor-dashboard-filter__list-container\">\n                    <ul class=\"cor-dashboard-filter__list cor-dashboard-filter__list--").concat(filter.filterName, "\">\n                        ").concat(filter.items.map(function (item) {
          return "\n                            <li class=\"cor-dashboard-filter__list__item\">\n                                \n                                ".concat(item.name === "Personalised" ? "\n                                    <div class=\"form-group\">\n                                        <label for=\"start\">Start date:</label>\n\n                                        <input class=\"form-control\" type=\"date\" id=\"start\" name=\"date-start\"\n                                        value=\"2018-07-22\"\n                                        >\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"start\">End date:</label>\n\n                                        <input class=\"form-control\" type=\"date\" id=\"end\" name=\"date-end\"\n                                            value=\"2018-07-22\"\n                                            >\n                                    </div>\n                                " : "\n                                    <a class=\"cor-dashboard-filter__list__item__link ".concat(item.subitems ? "cor-dashboard-filter__list__item__link--parent" : "", "\" href=\"#\" data-filter=\"").concat(item.target, "\" href=\"#/\">\n                                        ").concat(item.name, " \n                                        \n                                        ").concat(item.type !== "date" ? "\n                                            <span>".concat(item.number ? item.number : 0, "</span>\n                                        ") : "", "\n                                    </a>\n                                "), "\n                                \n                                ").concat(item.subitems ? "\n                                <ul>\n                                    ".concat(item.subitems.map(function (item) {
            return "\n                                        <li><a class=\"cor-dashboard-filter__list__item__sublink\" href=\"#/\" data-filter=\"".concat(item.target, "\">").concat(item.name, " <span>").concat(item.number ? item.number : 0, "</span></a></li>\n                                    ");
          }).join(''), " \n                                </ul>") : "", "\n                            </li>\n                        ");
        }).join(''), "\n                    </ul>\n                    <div class=\"cor-dahsboard-btncontainer\">\n                        <button class=\"cor_button btn cor_button--after cor-dashboard-filtersbtn\">Apply selection</button>\n                    </div>\n                </div>\n            </div>                     \n        ");
      }).join(''), "\n        \n\n        ");
    },
    css: function css() {
      return "\n\n        ";
    }
  };
  var data = [{
    name: "Content Types",
    filterName: "contenttypes",
    icon: "contenttypes",
    expanded: true,
    items: [{
      name: "News",
      target: "news",
      number: 55,
      subitems: [{
        name: "Regional news",
        number: 5
      }, {
        name: "Press release",
        number: 0
      }, {
        name: "Success story",
        number: 15
      }]
    }, {
      name: "Events",
      target: "events",
      number: 25
    }, {
      name: "Opinions",
      target: "opinions",
      number: 2
    }, {
      name: "Studies",
      target: "studies",
      number: 9
    }, {
      name: "Brochures",
      target: "brochures",
      number: 7
    }]
  }, {
    name: "Themes",
    filterName: "themes",
    icon: "themes",
    number: 125,
    items: [{
      name: "no theme",
      target: ""
    }, {
      name: "Agriculture and Fisheries",
      target: ""
    }, {
      name: "Citizenship, Governance and Institutional Affairs",
      target: ""
    }, {
      name: "Cohesion Policy, Structural funds and EU Budget",
      target: ""
    }, {
      name: "Consumer Policy, Health and Tourism",
      target: ""
    }, {
      name: "Economic and monetary policy",
      target: ""
    }, {
      name: "Environment, Climate Change and Energy",
      target: ""
    }, {
      name: "Migration and External relations",
      target: ""
    }, {
      name: "Research, Innovation and Digital Single Market",
      target: ""
    }, {
      name: "Social Policy, Education, Employment and Culture",
      target: ""
    }, {
      name: "Transport",
      target: ""
    }]
  }, {
    name: "Date",
    filterName: "date",
    icon: "date",
    items: [{
      name: "Today",
      target: "today",
      type: "date"
    }, {
      name: "This week",
      target: "thisweek",
      type: "date"
    }, {
      name: "This month",
      target: "thismonth",
      type: "date"
    }, {
      name: "This year",
      target: "thisyear",
      type: "date"
    }, {
      name: "Personalised",
      target: "custom",
      type: "date"
    }]
  }, {
    name: "Language",
    filterName: "languages",
    icon: "languages",
    items: [{
      name: "BG",
      target: ""
    }, {
      name: "CS",
      target: ""
    }, {
      name: "DA",
      target: ""
    }, {
      name: "DE",
      target: ""
    }, {
      name: "EL",
      target: ""
    }, {
      name: "EN",
      target: ""
    }, {
      name: "ES",
      target: ""
    }, {
      name: "ET",
      target: ""
    }, {
      name: "FI",
      target: ""
    }, {
      name: "FR",
      target: ""
    }, {
      name: "GA",
      target: ""
    }, {
      name: "HR",
      target: ""
    }, {
      name: "HU",
      target: ""
    }, {
      name: "IT",
      target: ""
    }, {
      name: "LT",
      target: ""
    }, {
      name: "LV",
      target: ""
    }, {
      name: "MT",
      target: ""
    }, {
      name: "NL",
      target: ""
    }, {
      name: "PL",
      target: ""
    }, {
      name: "PT",
      target: ""
    }, {
      name: "RO",
      target: ""
    }, {
      name: "SK",
      target: ""
    }, {
      name: "SL",
      target: ""
    }, {
      name: "SV",
      target: ""
    }]
  }];

  var CorDashboardFilter =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CorDashboardFilter, _Component);

    function CorDashboardFilter() {
      _classCallCheck(this, CorDashboardFilter);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardFilter).call(this));
    }

    _createClass(CorDashboardFilter, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        this.innerHTML = Template.render(data); // already expanded elements

        var collapsedElements = this.querySelectorAll('[aria-expanded=false]');
        collapsedElements.forEach(function (collapsedElement) {
          _this2.ExpandCollapse(collapsedElement.dataset.expandtarget);
        }); // filters events

        this._triggers = this.querySelectorAll('[data-filter]');

        this._triggers.forEach(function (trigger) {
          return trigger.addEventListener('click', function (e) {
            return _this2.onClick(e);
          });
        }); // open close events


        this._expandTriggers = this.querySelectorAll('[data-expandtarget]');

        this._expandTriggers.forEach(function (trigger) {
          return trigger.addEventListener('click', function (e) {
            return _this2.ExpandCollapse(event.target.dataset.expandtarget);
          });
        }); // dates events


        this._dateTriggers = this.querySelectorAll('.cor-dashboard-filter__list cor-dashboard-filter__list--date [data-filter]');

        this._dateTriggers.forEach(function (trigger) {
          return trigger.addEventListener('click', function (e) {
            return _this2.dateUpdate(e);
          });
        });
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.parentNode.parentNode.classList.contains('cor-dashboard-filter__list--date')) {
          this.dateUpdate(event.target);
          event.preventDefault();
        } else {
          this.updateActiveState(event.target);
          event.preventDefault();
        }
      }
    }, {
      key: "updateActiveState",
      value: function updateActiveState(target) {
        var text = target.dataset.filter;

        if (target.classList.contains('active')) {
          var type = "remove-filter";
          console.log(target, "list", target.classList.contains('active'));
          target.classList.remove('active');
          this.dispatchUpdate({
            type: type,
            text: text
          });
        } else {
          var _type = "filter";
          target.classList.add('active');

          if (target.nextElementSibling) {
            var children = target.nextElementSibling.querySelectorAll('.cor-dashboard-filter__list__item__sublink');
            children.forEach(function (child) {
              return child.classList.add('active');
            });
          }

          this.dispatchUpdate({
            type: _type,
            text: text
          });
        }
      }
    }, {
      key: "ExpandCollapse",
      value: function ExpandCollapse(target) {
        var expandCollapseTarget = document.querySelector("#".concat(target));
        var parent = expandCollapseTarget.parentNode;

        if (!parent.classList.contains("js-collapsed")) {
          this.collapse(expandCollapseTarget);
          parent.classList.add('js-collapsed');
        } else {
          this.expand(expandCollapseTarget);
          parent.classList.remove('js-collapsed');
        }
      }
    }, {
      key: "expand",
      value: function expand(target) {
        target.style.height = "";
        this._collapsed = false;
      }
    }, {
      key: "collapse",
      value: function collapse(target) {
        target.style.height = 0;
        this._collapsed = true;
      }
    }, {
      key: "dateUpdate",
      value: function dateUpdate(event) {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var startDate = '';
        var endDate = '';

        switch (event.dataset.filter) {
          case "today":
            startDate = currentDate.toISOString().substr(0, 10);
            endDate = currentDate.toISOString().substr(0, 10);
            break;

          case "thisweek":
            var firstDayOfTheWeek = currentDate.getDate() - currentDate.getDay() + 1;
            var lastDayOfTheWeek = firstDayOfTheWeek + 4;
            startDate = "".concat(currentYear, "-").concat(currentMonth, "-").concat(('0' + firstDayOfTheWeek).slice(-2));
            endDate = "".concat(currentYear, "-").concat(currentMonth, "-").concat(('0' + lastDayOfTheWeek).slice(-2));
            break;

          case "thismonth":
            var lastDayOfTheMonth = new Date(currentYear, currentMonth, 0);
            startDate = "".concat(currentYear, "-").concat(currentMonth, "-01");
            endDate = "".concat(currentYear, "-").concat(currentMonth, "-").concat(lastDayOfTheMonth.getDate());
            break;

          case "thisyear":
            startDate = "".concat(currentYear, "-01-01");
            endDate = "".concat(currentYear, "-12-31");
            break;

          case "custom":
            break;

          default:
            break;
        }

        var startDateInput = document.querySelector('input#start');
        var endDateInput = document.querySelector('input#end');
        startDateInput.value = startDate;
        endDateInput.value = endDate;
      }
    }]);

    return CorDashboardFilter;
  }(Component);

  if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
  }

  var navitems = [{
    name: "Dashboard",
    icon: "home",
    target: ""
  }];
  var Template$1 = {
    render: function render() {
      return "".concat(this.css(), "\n    ").concat(this.html());
    },
    html: function html() {
      return "\n\n    <!-- Menu -->\n    <ul class=\"cor-dashboard__nav\">\n        ".concat(navitems.map(function (navitem) {
        return "\n          <li class=\"cor-dashboard__nav__item\">\n            <a class=\"cor-dashboard__nav-link cor-dashboard__nav-link--".concat(navitem.icon, "\" href=\"#\" data-target=\"").concat(navitem.target, "\">").concat(navitem.name, "</a>\n            \n            <!-- Sub menu -->\n            ").concat(navitem.subitems ? "\n              <ul>".concat(navitem.subitems.map(function (subitem) {
          return "\n                <li>\n                  <a class=\"cor-dashboard__nav-link\">".concat(subitem.name, "</a>\n                </li>");
        }).join(''), "\n              </ul>") : "", "\n            <!-- /Sub menu -->\n\n          </li>\n        ");
      }).join(''), "\n    </ul>\n    <!-- /Menu -->\n      \n    <!-- Filtres -->\n    <cor-dashboard-filter></cor-dashboard-filter>\n    <!-- /Filtres -->    \n    ");
    },
    css: function css() {
      return "\n\n    ";
    }
  };

  var CorDashboardNav =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(CorDashboardNav, _Component2);

    function CorDashboardNav() {
      _classCallCheck(this, CorDashboardNav);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardNav).call(this)); // this.attachShadow({ mode: 'open' });
    }

    _createClass(CorDashboardNav, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this3 = this;

        this.innerHTML = Template$1.render();
        this._resetTrigger = this.querySelector('.cor-dashboard__nav-link--home');

        this._resetTrigger.addEventListener("click", function (e) {
          return _this3.rootResetAttributes(e);
        });

        document.querySelector('.cor-dashboard-slidebtn').addEventListener('click', function (event) {
          return _this3.clickOnButton();
        });
      }
    }, {
      key: "clickOnButton",
      value: function clickOnButton() {
        document.querySelector('body').classList.toggle('is-collapsed');
      }
    }, {
      key: "rootResetAttributes",
      value: function rootResetAttributes() {
        var type = "reset";
        var text = "";
        this.dispatchUpdate({
          type: type,
          text: text
        });
      }
    }]);

    return CorDashboardNav;
  }(Component);

  if (!customElements.get('cor-dashboard-nav')) {
    customElements.define('cor-dashboard-nav', CorDashboardNav);
  }

  var Template$2 = {
    render: function render() {
      return "".concat(this.css(), "\n        ").concat(this.html());
    },
    html: function html() {
      return "\n        ";
    },
    css: function css() {
      return "\n\n        ";
    }
  };

  var CorDashboardCard =
  /*#__PURE__*/
  function (_Component3) {
    _inherits(CorDashboardCard, _Component3);

    function CorDashboardCard() {
      _classCallCheck(this, CorDashboardCard);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardCard).call(this)); // this.attachShadow({ mode: 'open' });
    }

    _createClass(CorDashboardCard, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$2.render();

        if (this.querySelector("#donut-chart")) {
          this.chart();
        }
      }
    }]);

    return CorDashboardCard;
  }(Component);

  if (!customElements.get('cor-dashboard-card')) {
    customElements.define('cor-dashboard-card', CorDashboardCard);
  }

  var Template$3 = {
    render: function render() {
      return "".concat(this.css(), "\n        ").concat(this.html());
    },
    html: function html() {
      return "\n            <svg id=\"#donut-chart\"></svg>\n        ";
    },
    css: function css() {
      return "\n        \n        ";
    }
  };
  var seedData = [{
    "label": "News",
    "color": "rgb(32,142,183)",
    "value": 80,
    "link": "https://facebook.github.io/react/"
  }, {
    "label": "Events",
    "color": "rgb(99,239,133)",
    "value": 100,
    "link": "https://redux.js.org/"
  }, {
    "label": "Opinions",
    "color": "rgb(194,13,166)",
    "value": 25,
    "link": "https://vuejs.org/"
  }, {
    "label": "Studies",
    "color": "rgb(16,237,220)",
    "value": 15,
    "link": "https://angularjs.org/"
  }, {
    "label": "Brochures",
    "value": 5,
    "color": "rgb(66,51,166)",
    "link": "https://meteorhacks.com/meteor-js-web-framework-for-everyone"
  }];

  var CorDashboardDonutChart =
  /*#__PURE__*/
  function (_Component4) {
    _inherits(CorDashboardDonutChart, _Component4);

    function CorDashboardDonutChart() {
      _classCallCheck(this, CorDashboardDonutChart);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardDonutChart).call(this));
    }

    _createClass(CorDashboardDonutChart, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$3.render();
        this.chart(seedData);
      }
    }, {
      key: "addTooltip",
      value: function addTooltip() {
        var tooltip = document.createElement("div");
        document.querySelector("body").appendChild(tooltip).classList.add("toolTip");
      }
    }, {
      key: "chart",
      value: function chart(chartData) {
        var _this4 = this;

        this.addTooltip();
        chartData.sort(function (a, b) {
          return a.value < b.value ? 1 : -1;
        }); // Define size & radius of donut pie chart

        var width = 200;
        var height = 200;
        var radius = Math.min(width, height) / 2;

        var updateChart = function updateChart(event) {
          _this4.parentNode.setAttribute('view', event.data.label);

          tooltip.style.display = "none";
        }; // Define arc ranges


        var arcText = d3.scaleOrdinal().range([0, width]); // Determine size of arcs

        var arc = d3.arc().innerRadius(radius - 50).outerRadius(radius - 10); // Create the donut pie chart layout

        var pie = d3.pie().value(function (d) {
          return d["value"];
        }).sort(null);
        var tooltip = document.querySelector('.toolTip'); // Append SVG attributes and append g to the SVG

        var svg = d3.select(this.querySelector("svg")).attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + radius + "," + radius + ")"); // Define inner circle

        svg.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 100).attr("fill", "#fff"); // Calculate SVG paths and fill in the colours

        var g = svg.selectAll(".arc").data(pie(chartData)).enter().append("g").attr("class", "arc") // Make each arc clickable 
        .on("click", updateChart); // Append the path to each g

        g.append("path").transition().attr("d", arc).attr("fill", function (d) {
          return d.data.color;
        });

        function handleMouseOver(d, i) {
          var el = d3.select(this).select("path");
          el.attr('opacity', '0.75');
          tooltip.style.left = d3.event.pageX + 10 + "px";
          tooltip.style.top = d3.event.pageY - 25 + "px";
          tooltip.style.display = "inline-block";
          tooltip.innerHTML = d.data.label + "<br>" + d.data.value;
        }

        function handleMouseOut(d, i) {
          var el = d3.select(this).select("path");
          el.attr('opacity', '1');
          tooltip.style.display = "none";
        }

        g.on("mousemove", handleMouseOver);
        g.on("mouseout", handleMouseOut);
        d3.select(this).append('ol').classed('js-cor-dashboard-donut-chart__list', true).selectAll(null).data(chartData)
        /* .sort(function(a,b) { return +a.value - +b.value }) */
        .enter().append('li').append('a').attr('href', function (d) {
          return "#".concat(d.label);
        }).html(function (d) {
          return "<span>".concat(d.label, ":</span> <strong>").concat(d.value, "</strong>");
        }).on("click", updateChart).append('span').style("background-color", function (d) {
          return d.color;
        });
      }
    }]);

    return CorDashboardDonutChart;
  }(Component);

  if (!customElements.get('cor-dashboard-donut-chart')) {
    customElements.define('cor-dashboard-donut-chart', CorDashboardDonutChart);
  }

  var Template$4 = {
    render: function render() {
      return "\n            ".concat(this.css(), "\n            ").concat(this.html(), "\n        ");
    },
    html: function html() {
      return "\n            <div class=\"chart\"></svg>\n        ";
    },
    css: function css() {
      return "\n\n        ";
    }
  };

  var CorDashboardBarChart =
  /*#__PURE__*/
  function (_Component5) {
    _inherits(CorDashboardBarChart, _Component5);

    function CorDashboardBarChart() {
      _classCallCheck(this, CorDashboardBarChart);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardBarChart).call(this));
    }

    _createClass(CorDashboardBarChart, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$4.render();
        var data = this.parentNode.getAttribute("data-data");

        if (data) {
          this.chart(JSON.parse(data), this);
        }

        this.classList.add('visible');
      }
    }, {
      key: "chart",
      value: function chart(data, target) {
        // Sort Data
        if (data) {
          data.sort(function (a, b) {
            return a.total < b.total ? 1 : -1;
          });
        }

        var height = 200;
        var yScale = d3.scaleLinear().domain([0, d3.max(data, function (d) {
          return d.total;
        })]).range([0, height]); // Transitions

        var t = d3.transition().duration(750).ease(d3.easeBackInOut); // Creation of the chart

        d3.select(target.querySelector(".chart")).attr('height', height).selectAll('div').data(data).enter().append('div').append('div').transition(t).style('height', function (d) {
          return yScale(d.total) + "px";
        }); // Creation of the list

        d3.select(this).append('ol').classed('js-cor-dashboard-barchart__list', true).selectAll(null).data(data).enter().append('li').append('a').attr('href', function (d) {
          return "#".concat(d.label);
        }).html(function (d) {
          return "<span>".concat(d.label, "</span> <strong>").concat(d.total, "</strong>");
        }).append('span');
      }
    }]);

    return CorDashboardBarChart;
  }(Component);

  if (!customElements.get('cor-dashboard-bar-chart')) {
    customElements.define('cor-dashboard-bar-chart', CorDashboardBarChart);
  }

  var Template$5 = {
    render: function render(chart, view) {
      return "\n            ".concat(this.css(), "\n            ").concat(this.html(chart, view), "\n        ");
    },
    html: function html(chart, view) {
      switch (chart) {
        case "barChart2":
          return "\n                    <cor-dashboard-bar-chart class=\"cor-dashboard-bar-chart\"></cor-dashboard-bar-chart>\n                ";
          break;

        case "barChart":
          return "\n                <div class=\"cor-dashboard-bar-chart__header\">\n                    <h3>".concat(view, "</h3>\n                    <a class=\"cor-dashboard-chart__backbtn cor_button--before cor_button btn\" id=\"cor-dashboard-chart__backbtn\">Back</a>\n                </div>\n                <cor-dashboard-chart class=\"cor-dashboard-chart\" data-charttype=\"barChart2\"  data-data=\"[{\n                  &quot;label&quot;: &quot;BG&quot;,\n                  &quot;total&quot;: 50},{\n                  &quot;label&quot;: &quot;CS&quot;,\n                  &quot;total&quot;: 2},{\n                  &quot;label&quot;: &quot;DA&quot;,\n                  &quot;total&quot;: 7},{\n                  &quot;label&quot;: &quot;DE&quot;,\n                  &quot;total&quot;: 87},{\n                  &quot;label&quot;: &quot;EL&quot;,\n                  &quot;total&quot;: 24},{\n                  &quot;label&quot;: &quot;EN&quot;,\n                  &quot;total&quot;: 6},{\n                  &quot;label&quot;: &quot;ES&quot;,\n                  &quot;total&quot;: 78},{\n                  &quot;label&quot;: &quot;ET&quot;,\n                  &quot;total&quot;: 0},{\n                  &quot;label&quot;: &quot;FI&quot;,\n                  &quot;total&quot;: 5},{\n                  &quot;label&quot;: &quot;FR&quot;,\n                  &quot;total&quot;: 3},{\n                  &quot;label&quot;: &quot;GA&quot;,\n                  &quot;total&quot;: 0},{\n                  &quot;label&quot;: &quot;HR&quot;,\n                  &quot;total&quot;: 14},{\n                  &quot;label&quot;: &quot;HU&quot;,\n                  &quot;total&quot;: 3},{\n                  &quot;label&quot;: &quot;IT&quot;,\n                  &quot;total&quot;: 47},{\n                  &quot;label&quot;: &quot;LT&quot;,\n                  &quot;total&quot;: 75},{\n                  &quot;label&quot;: &quot;LV&quot;,\n                  &quot;total&quot;: 26},{\n                  &quot;label&quot;: &quot;MT&quot;,\n                  &quot;total&quot;: 65},{\n                  &quot;label&quot;: &quot;NL&quot;,\n                  &quot;total&quot;: 37},{\n                  &quot;label&quot;: &quot;PL&quot;,\n                  &quot;total&quot;: 0},{\n                  &quot;label&quot;: &quot;PT&quot;,\n                  &quot;total&quot;: 21},{\n                  &quot;label&quot;: &quot;RO&quot;,\n                  &quot;total&quot;: 48},{\n                  &quot;label&quot;: &quot;SK&quot;,\n                  &quot;total&quot;: 23},{\n                  &quot;label&quot;: &quot;SL&quot;,\n                  &quot;total&quot;: 16},{\n                  &quot;label&quot;: &quot;SV&quot;,\n                  &quot;total&quot;: 9}]\">\n              \n      \n          \n              \n                </cor-dashboard-chart>\n           \n                ");
          break;

        default:
          return "\n                    <cor-dashboard-donut-chart class=\"cor-dashboard-donut-chart\"></cor-dashboard-donut-chart>    \n                ";
      }
    },
    css: function css() {
      return "\n\n        ";
    }
  };

  var CorDashboardChart =
  /*#__PURE__*/
  function (_Component6) {
    _inherits(CorDashboardChart, _Component6);

    function CorDashboardChart() {
      _classCallCheck(this, CorDashboardChart);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardChart).call(this));
    }

    _createClass(CorDashboardChart, [{
      key: "resetState",
      value: function resetState(ev) {
        this.innerHTML = "";
        this.innerHTML = Template$5.render(ev.target);
      }
    }, {
      key: "backBtn",
      value: function backBtn() {
        var _this5 = this;

        var btn = this.querySelector("#cor-dashboard-chart__backbtn");
        btn.addEventListener('click', function (ev) {
          return _this5.resetState(ev);
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this6 = this;

        // Get the type of chart
        var typeOfChart = this.dataset.charttype;
        this.innerHTML = Template$5.render(typeOfChart);
        var view = "view";

        var update = function update() {
          var views = _this6.getAttribute(view);

          _this6.innerHTML = Template$5.render("barChart", [views]);

          _this6.backBtn();
        };

        new MutationObserver(update).observe(this, {
          attributes: true,
          attributeFilter: [view]
        });
      }
    }]);

    return CorDashboardChart;
  }(Component);

  if (!customElements.get('cor-dashboard-chart')) {
    customElements.define('cor-dashboard-chart', CorDashboardChart);
  }

  var createDataAttribute = function createDataAttribute(data) {
    var languagesLenght = data.length;
    var formatedData = '';
    data.map(function (language, i) {
      if (languagesLenght === i + 1) {
        // last one
        formatedData += "{\n                \"label\": \"".concat(language.label, "\",\n                \"total\": ").concat(language.total, "}");
      } else {
        // not last one
        formatedData += "{\n                \"label\": \"".concat(language.label, "\",\n                \"total\": ").concat(language.total, "},");
      }
    });
    return formatedData;
  };

  var Template$6 = {
    render: function render(data) {
      return "".concat(this.css(), "\n        ").concat(this.html(data));
    },
    html: function html(data) {
      return "\n            ".concat(data.map(function (card) {
        return "\n                <!-- Card item -->\n                <div class=\"cor-dashboard-card\" category=\"".concat(card.category, "\" size=\"").concat(card.size, "\">\n                    \n                    <!-- Title of the card -->\n                    <h2 class=\"cor-dashboard-card__title\">\n                        <span>").concat(card.title, "</span>\n                        \n                        ").concat(card.total ? "\n                            <span class=\"cor-dashboard-card__title__total\">\n                                <span>".concat(card.total, "</span>\n                            </span>\n                        ") : "", "\n                        \n                    </h2>\n                    <!-- /Title of the card -->\n                    \n                    <!-- Content of the card -->\n                    <div class=\"cor-dashboard-card__body\">\n\n                        <!-- Cards with chart -->\n                        ").concat(card.itemdata ? "\n                            \n        \n                            <cor-dashboard-chart class=\"cor-dashboard-chart\" \n                                data-charttype=\"".concat(card.charttype, "\" \n                                \n                                data-data=\n                            '[").concat(createDataAttribute(card.itemdata), "]'>\n                            </cor-dashboard-chart>\n        \n                            \n                            ") : "", "\n                        <!-- /Cards with chart -->\n\n                        <!-- Cards displaying categories -->\n                        ").concat(card.newscategories ? "\n                                ".concat(card.newscategories.map(function (el) {
          return "\n                                <p class=\"cor-dashboard-card__listing-item\">".concat(el.label, " <strong>").concat(el.total, "</strong></p>\n                                ");
        }).join(''), "\n                            ") : "", "\n                        <!-- /Cards displaying categories -->\n\n\n                        <!-- Cards displaying all the languages -->\n                        ").concat(card.cardtype === 'languageOverview' ? "\n                        \n                            \n                            <cor-dashboard-bar-chart class=\"cor-dashboard-bar-chart\" data-data='[".concat(createDataAttribute(card.languages), "]'></cor-dashboard-bar-chart>\n                            \n                            ") : "", "\n                        <!-- /Cards displaying all the languages -->\n\n\n                        <!-- Multilinguism card -->\n                        ").concat(card.cardtype === 'multilinguismOverview' ? "\n                            <div class=\"cor-dashboard-multilinguismTable\">\n                                \n                                \n                                <div>\n                                    <h2>Languages</h2>  \n                                    <ol>\n                                        ".concat(card.multilingualContent[0].translations.map(function (translation) {
          return translation.label === "EN" ? "<li class=\"cor-dashboard__multilinguismTable__en\"><a href=\"#\">".concat(translation.label, "</a></li>") : "<li><a href=\"#\">".concat(translation.label, "</a></li>");
        }).join(''), "\n                                    </ol>\n                                </div>\n                      \n                                ").concat(card.multilingualContent.map(function (multilingualContent) {
          return "\n                                        <div>\n                                            <h2>".concat(multilingualContent.contenttype, " </h2>\n\n                                            <ol>\n                                                ").concat(multilingualContent.translations.map(function (translation) {
            return translation.label === "EN" ? "<li class=\"cor-dashboard__multilinguismTable__en\"><a href=\"#\">".concat(translation.total, "</a></li>") : "<li><a href=\"#\">".concat(translation.total, "</a></li>");
          }).join(''), "\n                                            </ol>\n                                        </div>\n                                    ");
        }).join(''), "\n                            \n                            \n                            </div>\n                            ") : "", "\n                        <!-- /Multilinguism card -->\n\n                        \n                    </div>\n                    <!-- /Content of the card -->\n                \n                </div>\n                <!-- /Card item -->\n        ");
      }).join(''), "\n            \n            ");
    },
    css: function css() {
      return "\n        ";
    }
  };
  /*
      This component observes the state changes. Whenever a specific attribute
      is updated, it changes the displays
  */

  var CorDashboardOverview =
  /*#__PURE__*/
  function (_Component7) {
    _inherits(CorDashboardOverview, _Component7);

    function CorDashboardOverview() {
      _classCallCheck(this, CorDashboardOverview);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardOverview).call(this)); // this.attachShadow({ mode: 'open' });
    }

    _createClass(CorDashboardOverview, [{
      key: "show",
      value: function show(filter) {
        if (filter[0] === "") {
          /* If empty */
          this.innerHTML = Template$6.render(this.globalData.DATA);
        } else {
          this.innerHTML = Template$6.render(this.globalData.DATA.filter(function (el) {
            return filter.includes(el.category);
          }));
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this7 = this;

        this.innerHTML = Template$6.render(this.globalData.DATA);
        var root = this.root.root;
        /* Filter update */

        var filter = "filter";

        var update = function update() {
          _this7.show(root.getAttribute(filter).split(' '));
        };

        new MutationObserver(update).observe(root, {
          attributes: true,
          attributeFilter: [filter]
        });
        this.multiliguismTable();
      }
    }, {
      key: "multiliguismTable",
      value: function multiliguismTable() {
        var lists = document.querySelectorAll(".cor-dashboard-multilinguismTable ol + ol");
        var cells = document.querySelectorAll(".cor-dashboard-multilinguismTable li");

        var values = _toConsumableArray(cells).map(function (cell) {
          return cell.textContent;
        });

        console.log(values);
        /*
        const values = for (const cell of cells) {
            cell => cell.texContent
        };
        const maxValue = Math.max(values);
        
        cells.map( cell => cell.dataset.percentage = (cell.textContent * 100) / maxValue);
        */
      }
    }]);

    return CorDashboardOverview;
  }(Component);

  if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
  }

  var Template$7 = {
    render: function render() {
      return "\n            ".concat(this.css(), "\n            ").concat(this.html(), "\n        ");
    },
    html: function html() {
      return "";
    },
    css: function css() {
      return "\n\n        ";
    }
  };
  /*
   * language overview used in the detailed card 
   */

  var CorDashboardLanguagesOverview =
  /*#__PURE__*/
  function (_Component8) {
    _inherits(CorDashboardLanguagesOverview, _Component8);

    function CorDashboardLanguagesOverview() {
      _classCallCheck(this, CorDashboardLanguagesOverview);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardLanguagesOverview).call(this));
    }

    _createClass(CorDashboardLanguagesOverview, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$7.render();
      }
    }]);

    return CorDashboardLanguagesOverview;
  }(Component);

  if (!customElements.get('cor-dashboard-languages-overview')) {
    customElements.define('cor-dashboard-languages-overview', CorDashboardLanguagesOverview);
  }

  var Template$8 = {
    render: function render() {
      return "\n            ".concat(this.css(), "\n            ").concat(this.html(), "\n        ");
    },
    html: function html() {
      return "\n            <article>\n                <p><slot name=\"contenttype\">News</slot></p>\n                <h1 class=\"cor-dashboard-article__title\">\n                    <slot name=\"title\">Title of the news</slot>\n                </h1>\n                <p class=\"cor-dashboard-article__details\">\n                    <slot name=\"date\"></slot> \n                    | \n                    <slot name=\"theme\"></slot> \n                    <slot name=\"label\" class=\"cor-dashboard-article__details__label\"></slot>\n                </p>\n                <p class=\"cor-dashboard-detailed-item__intro-container\">\n                    <slot name=\"picture\"></slot>\n                    <slot name=\"intro\"></slot>\n                </p>\n                \n                <ul class=\"cor-dashboard-detailed-item__languages-list\" slot=\"languages\">\n                    <slot class=\"cor-dashboard-detailed-item__languages-list__item\" name=\"language\">\n                        <li class=\"cor-dashboard-detailed-item__languages-list__item\">\n                            <cor-dashboard-languages-overview>\n                                <span slot=\"language-label\">lang</slot>\n                            <cor-dashboard-languages-overview>\n                        </li>\n                    </slot>\n                </ul>\n\n            </article>    \n        ";
    },
    css: function css() {
      return "\n\n        ";
    }
  };

  var CorDashboardDetailedItem =
  /*#__PURE__*/
  function (_Component9) {
    _inherits(CorDashboardDetailedItem, _Component9);

    function CorDashboardDetailedItem() {
      _classCallCheck(this, CorDashboardDetailedItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardDetailedItem).call(this));
    }

    _createClass(CorDashboardDetailedItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$8.render();
      }
    }]);

    return CorDashboardDetailedItem;
  }(Component);

  if (!customElements.get('cor-dashboard-detailed-item')) {
    customElements.define('cor-dashboard-detailed-item', CorDashboardDetailedItem);
  }

  var Template$9 = {
    render: function render(numberOfPages, currentPage) {
      return "\n            ".concat(this.html(numberOfPages, currentPage), "\n        ");
    },
    html: function html(numberOfPages, currentPage) {
      return "\n        <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\" data-target=\"first\">First</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\" data-target=\"-1\">Previous</a></li>\n                ".concat(Array(numberOfPages).fill().map(function (item, index) {
        return "\n                <li class=\"page-item\">\n                    <a class=\"page-link\n                    ".concat(index + 1 === currentPage ? "active" : "", "\n                    \" href=\"#\" data-page=\"").concat(index + 1, "\">").concat(index + 1, "</a></li>\n                ");
      }).join(''), "\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\" data-target=\"+1\">Next</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\" data-target=\"last\">Last</a></li>\n            </ul>\n        </nav>\n        ");
    }
  };

  var CorDashboardPagination =
  /*#__PURE__*/
  function (_Component10) {
    _inherits(CorDashboardPagination, _Component10);

    function CorDashboardPagination() {
      _classCallCheck(this, CorDashboardPagination);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardPagination).call(this));
    }

    _createClass(CorDashboardPagination, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.articles = document.querySelectorAll('.cor-dashboard-detailed-item');
        this.currentPage = 1;
        this.totalItems = _toConsumableArray(this.articles).length;
        this.itemsPerPage = 2;
        this.totalOfPages = Math.round(this.totalItems / this.itemsPerPage);
        this.createPagination(this.totalItems, this.itemsPerPage, this.currentPage, this.totalOfPages);
        this.addEventListener('click', this._onClick);
      }
    }, {
      key: "reset",
      value: function reset() {
        _toConsumableArray(this.articles).map(function (article, index) {
          article.hidden = "hidden";
        });
      }
    }, {
      key: "_selectArticles",
      value: function _selectArticles(newPage) {
        this.reset();
        this.currentPage = newPage;
        var startBatch = this.itemsPerPage * (newPage - 1);
        var endBatch = this.itemsPerPage * (newPage - 1) + this.itemsPerPage;

        _toConsumableArray(this.articles).slice(startBatch, endBatch).map(function (article, index) {
          article.hidden = false;
        });

        this.updatePagination(newPage);
      }
    }, {
      key: "_onClick",
      value: function _onClick(event) {
        if (event.target.dataset.page) this._selectArticles(parseInt(event.target.dataset.page, 10)); // Previous page

        if (event.target.dataset.target === "-1" && this.currentPage > 1) this._selectArticles(this.currentPage - 1); // Next page

        if (event.target.dataset.target === "+1" && this.currentPage < this.totalOfPages) this._selectArticles(this.currentPage + 1); // First page

        if (event.target.dataset.target === "first") this._selectArticles(1); // Last page

        if (event.target.dataset.target === "last") this._selectArticles(this.totalOfPages);
      }
    }, {
      key: "createPagination",
      value: function createPagination(totalItems, itemsPerPage, currentPage, totalOfPages) {
        _toConsumableArray(this.articles).map(function (article, index) {
          if (index >= itemsPerPage) article.hidden = "hidden";
        });

        this.innerHTML = Template$9.render(totalOfPages, currentPage);
      }
    }, {
      key: "updatePagination",
      value: function updatePagination(currentPage) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector("[data-page=\"".concat(currentPage, "\"]")).classList.add('active');
      }
    }]);

    return CorDashboardPagination;
  }(Component);

  if (!customElements.get('cor-dashboard-pagination')) {
    customElements.define('cor-dashboard-pagination', CorDashboardPagination);
  }

  var Template$a = {
    render: function render(data) {
      return "\n            ".concat(this.html(data), "\n            ").concat(this.css(), "\n        ");
    },
    html: function html(data) {
      return "\n            <p class=\"cor-dashboard-card__title cor-dashboard-detailed__title\">\n            ".concat(data.length, " News\n                <select>\n                    <option value=\"\">Sort by</option>\n                    <option value=\"date\">Date</option>\n                </select>\n            </p>\n\n            ").concat(data.map(function (item) {
        return "\n\n            <article class=\"cor-dashboard-detailed-item\" category=\"".concat(item.category, "\">\n\n                <p class=\"cor-dashboard-detailed-item__contenttype\">").concat(item.contenttype, "</p>\n                \n                <img src=\"").concat(item.picture, "\" />\n                \n                <div>\n                    \n                    <h1 class=\"cor-dashboard-article__title\">").concat(item.title, "</h1>\n                    <p class=\"cor-dashboard-article__details\">\n                        ").concat(item.label ? "<span class=\"cor-dashboard-article__label ".concat(item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : "", " ").concat(item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : "", " ").concat(item.label === "Success story" ? "cor-dashboard-article__label--successstory" : "", " ").concat(item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : "", "\">").concat(item.label, "</span>") : "", "\n                        <span>").concat(item.date, "</span>\n                        ").concat(item.theme ? "&nbsp;|&nbsp;<span>".concat(item.theme, "</span>") : "", "\n                    </p>\n                    <p class=\"cor-dashboard-article__extradetails\">\n                        <span><strong>Lorem:</strong> ipsum</span>\n                        <span><strong>Lorem:</strong> ipsum</span>\n                        <span><strong>Lorem:</strong> ipsum</span>\n                        <span><strong>Lorem:</strong> ipsum</span>\n                        <span><strong>Lorem:</strong> ipsum</span>\n                    </p>\n                    <p class=\"cor-dashboard-detailed-item__intro-container\">\n                        <span >").concat(item.intro, "</span>\n                    </p>\n                    \n                </div>\n\n                <ul class=\"cor-dashboard-detailed-item__languages-list\">\n                    \n                        ").concat(item.languages.map(function (language) {
          return "\n                            <li class=\"cor-dashboard-detailed-item__languages-list__item\">\n                            <div class=\"cor-dashboard-languages-overview\" data-status=\"".concat(language.status, "\">\n                                <span title=\"language\" data-lang=\"").concat(language.label, "\">").concat(language.label, "</span>\n                            </div>\n                            </li>\n                        ");
        }).join(''), "\n                        \n                    </ul>\n\n            </article>\n              \n            \n            \n              ");
      }).join(''), "\n\n            <cor-dashboard-pagination class=\"cor-dashboard-pagination\"></cor-dashboard-pagination>\n            \n        ");
    },
    css: function css() {
      return "\n            \n        ";
    }
  };

  function corDashboardLazyLoading() {
    var imageObserver = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('cor-dashboard-lazy-load--visible');
        }
      });
    });
    var articles = document.querySelectorAll('.cor-dashboard-detailed-item');

    _toConsumableArray(articles).map(function (article) {
      article.classList.add('cor-dashboard-lazy-load__element');
      imageObserver.observe(article);
    });
  }

  var CorDashboardDetailed =
  /*#__PURE__*/
  function (_Component11) {
    _inherits(CorDashboardDetailed, _Component11);

    function CorDashboardDetailed() {
      _classCallCheck(this, CorDashboardDetailed);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardDetailed).call(this));
    }

    _createClass(CorDashboardDetailed, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$a.render(this.globalData.ITEMS);
        corDashboardLazyLoading();
      }
    }]);

    return CorDashboardDetailed;
  }(Component);

  if (!customElements.get('cor-dashboard-detailed')) {
    customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
  }

  var Template$b = {
    render: function render() {
      return "\n        ".concat(this.css(), "\n        ").concat(this.html(), "\n        ");
    },
    html: function html() {
      return "\n            <nav id=\"cor-dashboard-topnav\">\n                <a data-view=\"overview\" class=\"active\" href=\"#\">Overview</a>\n                <a data-view=\"detailed\" href=\"#\">Detailed</a>\n                <a class=\"cor-icon\" href=\"#\">\n                    <svg width=\"20\" height=\"20\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"book-open\" class=\"svg-inline--fa fa-book-open fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"#c6c6c6\" d=\"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z\"></path></svg>\n    Manual</a>\n            </nav>\n            \n        ";
    },
    css: function css() {
      return "\n\n        ";
    }
  };

  var CorDashboardTopnav =
  /*#__PURE__*/
  function (_Component12) {
    _inherits(CorDashboardTopnav, _Component12);

    function CorDashboardTopnav() {
      _classCallCheck(this, CorDashboardTopnav);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardTopnav).call(this));
    }

    _createClass(CorDashboardTopnav, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this8 = this;

        this.innerHTML = Template$b.render();
        this._triggers = this.querySelectorAll('[data-view]');

        this._triggers.forEach(function (trigger) {
          return trigger.addEventListener('click', function (e) {
            return _this8.onClick(e);
          });
        });
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        document.querySelector('[data-view].active').classList.remove('active');
        event.target.classList.add('active');
        var type = "view";
        var text = event.target.dataset.view;
        this.dispatchUpdate({
          type: type,
          text: text
        });
      }
    }]);

    return CorDashboardTopnav;
  }(Component);

  if (!customElements.get('cor-dashboard-topnav')) {
    customElements.define('cor-dashboard-topnav', CorDashboardTopnav);
  }

  var Template$c = {
    render: function render(stroke, radius, circumference, normalizedRadius) {
      return "\n            ".concat(this.html(stroke, radius, circumference, normalizedRadius), "\n        ");
    },
    html: function html(stroke, radius, circumference, normalizedRadius) {
      return "\n            <div class=\"cor-dashboard-spinning-loader\"></div>\n        ";
    }
  };

  var CorDashboardSpinner =
  /*#__PURE__*/
  function (_Component13) {
    _inherits(CorDashboardSpinner, _Component13);

    function CorDashboardSpinner() {
      _classCallCheck(this, CorDashboardSpinner);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardSpinner).call(this));
    }

    _createClass(CorDashboardSpinner, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var stroke = this.getAttribute('stroke');
        var radius = this.getAttribute('radius');
        var normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;
        this.innerHTML = Template$c.render(stroke, radius, this._circumference, normalizedRadius);
      }
    }]);

    return CorDashboardSpinner;
  }(Component);

  if (!customElements.get('cor-dashboard-spinner')) {
    customElements.define('cor-dashboard-spinner', CorDashboardSpinner);
  }

  var Template$d = {
    render: function render(view) {
      return "\n            ".concat(this.css(), "\n            ").concat(this.html(view), "\n        ");
    },
    html: function html(view) {
      switch (view) {
        case "detailed":
          return "\n                    <div class=\"cor-dashboard-main\">\n                        <cor-dashboard-detailed class=\"cor-dashboard-detailed\"></cor-dashboard-detailed>\n                    </div>\n                ";
          break;

        case "overview":
          return "\n                <div class=\"cor-dashboard-main\">\n                    <cor-dashboard-overview class=\"cor-dashboard-overview\"></cor-dashboard-overview>\n                </div>\n                ";
          break;

        default:
          return "\n                    <div class=\"cor-dashboard-main\">\n                        <cor-dashboard-spinner class=\"cor-dashboard-spinner\"></cor-dashboard-spinner>\n                    </div>\n                ";
      }
    },
    css: function css() {
      return "\n        ";
    }
  };

  var CorDashboardMain =
  /*#__PURE__*/
  function (_Component14) {
    _inherits(CorDashboardMain, _Component14);

    function CorDashboardMain() {
      _classCallCheck(this, CorDashboardMain);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardMain).call(this));
    }

    _createClass(CorDashboardMain, [{
      key: "show",
      value: function show(view, target) {
        this.innerHTML = Template$d.render(view, target);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this9 = this;

        this.innerHTML = Template$d.render();
        this.classList.add('one');
        var root = this.root.root;
        /* Filter update */

        var filter = "filter";
        var view = "view";

        var update = function update() {
          _this9.show(root.getAttribute(view), root.getAttribute(filter));
        };

        new MutationObserver(update).observe(root, {
          attributes: true,
          attributeFilter: [view]
        });
        /* Remove spinner */

        /*
        setTimeout(function(){
            this.innerHTML = Template.render("overview");
        }, 1000);
        */

        setTimeout(function () {
          _this9.innerHTML = Template$d.render("overview");
        }, 1000);
      }
    }]);

    return CorDashboardMain;
  }(Component);

  if (!customElements.get('cor-dashboard-main')) {
    customElements.define('cor-dashboard-main', CorDashboardMain);
  }

  var Template$e = {
    render: function render(filters) {
      return "\n            ".concat(this.html(filters), "\n        ");
    },
    html: function html(filters) {
      return "\n            Selected filters: <ul>\n                ".concat(filters ? filters.map(function (filter) {
        if (filter !== "") {
          return "\n                            <li data-selectedFilter=\"".concat(filter, "\">\n                                ").concat(filter, " <svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M1.12556 0L12.381 11.8182L11.2554 13L1.98083e-05 1.18182L1.12556 0Z\" fill=\"#C4C4C4\"/>\n                                <path d=\"M12.381 1.18182L1.12554 13L0 11.8182L11.2554 1.72588e-06L12.381 1.18182Z\" fill=\"#C4C4C4\"/>\n                                </svg>\n                            </li>");
        }
      }).join('') : "", "\n            </ul>\n        ");
    }
  };

  var CorDashboardSelectedFilters =
  /*#__PURE__*/
  function (_Component15) {
    _inherits(CorDashboardSelectedFilters, _Component15);

    function CorDashboardSelectedFilters() {
      _classCallCheck(this, CorDashboardSelectedFilters);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardSelectedFilters).call(this));
    }

    _createClass(CorDashboardSelectedFilters, [{
      key: "updateRoot",
      value: function updateRoot(element) {
        var text = element.parentNode.dataset.selectedfilter;
        var type = "remove-filter";
        this.dispatchUpdate({
          type: type,
          text: text
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this10 = this;

        var root = this.root.root;
        var filter = "filter";

        var update = function update() {
          var filters = root.getAttribute("filter");

          if (filters !== "") {
            _this10.innerHTML = Template$e.render(filters.split(' '));
          } else {
            _this10.innerHTML = "";
          }

          var filterBtns = document.querySelectorAll('.cor-dashboard-selected-filters svg');

          _toConsumableArray(filterBtns).map(function (filterBtn) {
            return filterBtn.addEventListener('click', function (event) {
              return _this10.updateRoot(event.target);
            });
          });
        };

        new MutationObserver(update).observe(root, {
          attributes: true,
          attributeFilter: [filter]
        });
      }
    }]);

    return CorDashboardSelectedFilters;
  }(Component);

  if (!customElements.get('cor-dashboard-selected-filters')) {
    customElements.define('cor-dashboard-selected-filters', CorDashboardSelectedFilters);
  }

  var Template$f = {
    render: function render() {
      return "\n            ".concat(this.html(), "\n        ");
    },
    html: function html() {
      return "\n        <ul class=\"cor-dashboard-filter__list cor-dashboard-filter__list--date\">\n        <li class=\"cor-dashboard-filter__list__item\">\n          <a\n            class=\"cor-dashboard-filter__list__item__link \"\n            href=\"#\"\n            data-filter=\"today\"\n          >\n            Today\n          </a>\n        </li>\n      \n        <li class=\"cor-dashboard-filter__list__item\">\n          <a\n            class=\"cor-dashboard-filter__list__item__link \"\n            href=\"#\"\n            data-filter=\"thisweek\"\n          >\n            This week\n          </a>\n        </li>\n      \n        <li class=\"cor-dashboard-filter__list__item\">\n          <a\n            class=\"cor-dashboard-filter__list__item__link \"\n            href=\"#\"\n            data-filter=\"thismonth\"\n          >\n            This month\n          </a>\n        </li>\n      \n        <li class=\"cor-dashboard-filter__list__item\">\n          <a\n            class=\"cor-dashboard-filter__list__item__link \"\n            href=\"#\"\n            data-filter=\"thisyear\"\n          >\n            This year\n          </a>\n        </li>\n      \n        <li class=\"cor-dashboard-filter__list__item\">\n          <div class=\"form-group\">\n            <label for=\"start\">Start date:</label>\n      \n            <input\n              class=\"form-control\"\n              type=\"date\"\n              id=\"start\"\n              name=\"date-start\"\n              value=\"2018-07-22\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"start\">End date:</label>\n      \n            <input\n              class=\"form-control\"\n              type=\"date\"\n              id=\"end\"\n              name=\"date-end\"\n              value=\"2018-07-22\"\n            />\n          </div>\n        </li>\n      </ul>\n      <button class=\"cor_button btn cor_button--after cor-dashboard-filtersbtn\">Apply selection</button>\n        ";
    }
  };

  var CorDashboardDateFilter =
  /*#__PURE__*/
  function (_Component16) {
    _inherits(CorDashboardDateFilter, _Component16);

    function CorDashboardDateFilter() {
      _classCallCheck(this, CorDashboardDateFilter);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardDateFilter).call(this));
    }

    _createClass(CorDashboardDateFilter, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$f.render();
      }
    }]);

    return CorDashboardDateFilter;
  }(Component);

  if (!customElements.get('cor-dashboard-date-filter')) {
    customElements.define('cor-dashboard-date-filter', CorDashboardDateFilter);
  }

  var Template$g = {
    render: function render() {
      return "".concat(this.html());
    },
    html: function html() {
      return "\n            <div class=\"js-menu cor-dashboard-menu\">\n                <div class=\"js-menu-contents cor-dashboard-menu__contents\">\n                    <button class=\"js-menu-toggle\">\n                        <div class=\"js-menu-title cor_button btn  cor-dashboard-filtersbtn\">\n                            <span>This month: Sep</span>\n                            <svg width=\"14\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"calendar-alt\" class=\"svg-inline--fa fa-calendar-alt fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z\"></path></svg>\n                        </div>\n                    </button>\n                    <div class=\"cor-dashboard-menu-items\">\n                        <cor-dashboard-date-filter class=\"cor-dashboard-date-filter\"></cor-dashboard-date-filter>\n                    </div>\n                </div>\n            </div>\n        ";
    }
  };

  var CorDashboardDateBtn =
  /*#__PURE__*/
  function (_Component17) {
    _inherits(CorDashboardDateBtn, _Component17);

    function CorDashboardDateBtn() {
      _classCallCheck(this, CorDashboardDateBtn);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboardDateBtn).call(this));
    }

    _createClass(CorDashboardDateBtn, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.innerHTML = Template$g.render();
        this._menu = document.querySelector('.js-menu');
        this._menuContents = this._menu.querySelector('.js-menu-contents');
        this._menuToggleButton = this._menu.querySelector('.js-menu-toggle');
        this._menuTitle = this._menu.querySelector('.js-menu-title');
        this._expanded = true;
        this._animate = false;
        this._duration = 200;
        this._frameTime = 1000 / 60;
        this._nFrames = Math.round(this._duration / this._frameTime);
        this._collapsed;
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.toggle = this.toggle.bind(this);

        this._calculateScales();

        this._createEaseAnimation();

        this._addEventListeners();

        this.collapse();
        this.activate();
      }
    }, {
      key: "activate",
      value: function activate() {
        this._menu.classList.add('menu--active');

        this._animate = true;
      }
    }, {
      key: "collapse",
      value: function collapse() {
        if (!this._expanded) return;
        this._expanded = false;
        var _this$_collapsed = this._collapsed,
            x = _this$_collapsed.x,
            y = _this$_collapsed.y;
        var invX = 1 / x;
        var invY = 1 / y;
        this._menu.style.transform = "scale(".concat(x, ", ").concat(y, ")");
        this._menuContents.style.transform = "scale(".concat(invX, ", ").concat(invY, ")");
        if (!this._animate) return;

        this._applyAnimation({
          expand: false
        });
      }
    }, {
      key: "expand",
      value: function expand() {
        if (this._expanded) return;
        this._expanded = true;
        this._menu.style.transform = "scale(1, 1)";
        this._menuContents.style.transform = "scale(1, 1)";
        if (!this._animate) return;

        this._applyAnimation({
          expand: true
        });
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this._expanded) {
          this.collapse();
          return;
        }

        this.expand();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        this._menuToggleButton.addEventListener('click', this.toggle);
      }
    }, {
      key: "_applyAnimation",
      value: function _applyAnimation() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : opts,
            expand = _ref.expand;

        this._menu.classList.remove('menu--expanded');

        this._menu.classList.remove('menu--collapsed');

        this._menuContents.classList.remove('menu__contents--expanded');

        this._menuContents.classList.remove('menu__contents--collapsed'); // Force a recalc styles here so the classes take hold.


        window.getComputedStyle(this._menu).transform;

        if (expand) {
          this._menu.classList.add('menu--expanded');

          this._menuContents.classList.add('menu__contents--expanded');

          return;
        }

        this._menu.classList.add('menu--collapsed');

        this._menuContents.classList.add('menu__contents--collapsed');
      }
    }, {
      key: "_calculateScales",
      value: function _calculateScales() {
        var collapsed = this._menuTitle.getBoundingClientRect();

        var expanded = this._menu.getBoundingClientRect();

        this._collapsed = {
          x: collapsed.width / expanded.width,
          y: collapsed.height / expanded.height
        };
      }
    }, {
      key: "_createEaseAnimation",
      value: function _createEaseAnimation() {
        var menuEase = document.querySelector('.menu-ease');
        if (menuEase) return menuEase;
        menuEase = document.createElement('style');
        menuEase.classList.add('menu-ease');
        var menuExpandAnimation = [];
        var menuExpandContentsAnimation = [];
        var menuCollapseAnimation = [];
        var menuCollapseContentsAnimation = [];
        var percentIncrement = 100 / this._nFrames;

        for (var i = 0; i <= this._nFrames; i++) {
          var step = this._ease(i / this._nFrames).toFixed(5);

          var percentage = (i * percentIncrement).toFixed(5);
          var startX = this._collapsed.x;
          var startY = this._collapsed.y;
          var endX = 1;
          var endY = 1; // Expand animation

          this._append({
            percentage: percentage,
            step: step,
            startX: startX,
            startY: startY,
            endX: endX,
            endY: endY,
            outerAnimation: menuExpandAnimation,
            innerAnimation: menuExpandContentsAnimation
          }); // Collapse animation


          this._append({
            percentage: percentage,
            step: step,
            startX: 1,
            startY: 1,
            endX: this._collapsed.x,
            endY: this._collapsed.y,
            outerAnimation: menuCollapseAnimation,
            innerAnimation: menuCollapseContentsAnimation
          });
        }

        menuEase.textContent = "\n            @keyframes menuExpandAnimation {\n                ".concat(menuExpandAnimation.join(''), "\n            }\n\n            @keyframes menuExpandContentsAnimation {\n                ").concat(menuExpandContentsAnimation.join(''), "\n            }\n\n            @keyframes menuCollapseAnimation {\n                ").concat(menuCollapseAnimation.join(''), "\n            }\n          \n            @keyframes menuCollapseContentsAnimation {\n                ").concat(menuCollapseContentsAnimation.join(''), "\n            }");
        document.head.appendChild(menuEase);
        return menuEase;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : opts,
            percentage = _ref2.percentage,
            step = _ref2.step,
            startX = _ref2.startX,
            startY = _ref2.startY,
            endX = _ref2.endX,
            endY = _ref2.endY,
            outerAnimation = _ref2.outerAnimation,
            innerAnimation = _ref2.innerAnimation;

        var xScale = (startX + (endX - startX) * step).toFixed(5);
        var yScale = (startY + (endY - startY) * step).toFixed(5);
        var invScaleX = (1 / xScale).toFixed(5);
        var invScaleY = (1 / yScale).toFixed(5);
        outerAnimation.push("\n            ".concat(percentage, "% {\n                transform: scale(").concat(xScale, ", ").concat(yScale, ");\n        }"));
        innerAnimation.push("\n            ".concat(percentage, "% {\n                transform: scale(").concat(invScaleX, ", ").concat(invScaleY, ");\n        }"));
      }
    }, {
      key: "_clamp",
      value: function _clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
    }, {
      key: "_ease",
      value: function _ease(v) {
        var pow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        v = this._clamp(v, 0, 1);
        return 1 - Math.pow(1 - v, pow);
      }
    }]);

    return CorDashboardDateBtn;
  }(Component);

  if (!customElements.get('cor-dashboard-date-btn')) {
    customElements.define('cor-dashboard-date-btn', CorDashboardDateBtn);
  }

  var Template$h = {
    render: function render(globalData) {
      return "".concat(this.css(), "\n    ").concat(this.html(globalData));
    },
    html: function html(globalData) {
      return "\n    <div class=\"cor-dashboard\">\n        <!-- Sidebar -->\n        <aside class=\"sidebar cor-dashboard__sidebar\">\n          <cor-dashboard-nav class=\"cor-dashboard-nav\"></cor-dashboard-nav>\n          \n          <button class=\"cor-dashboard-slidebtn\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </button>\n\n        </aside>\n        <!-- /Sidebar -->\n\n        <!-- Main -->\n        <main role=\"main\">\n          \n          <header class=\"cor-dashboard-header\">\n            <div class=\"cor-dashboard-header-img-container\">\n              <img src=\"public/images/CoRlogo.png\" />\n            </div>\n            <h1>Dashboard 2</h1>\n            \n            <cor-dashboard-topnav class=\"cor-dashboard-topnav\"></cor-dashboard-topnav>\n          </header>\n\n          <div class=\"cor-dashboard-top-tools\">\n            <cor-dashboard-selected-filters class=\"cor-dashboard-selected-filters\"></cor-dashboard-selected-filters>\n            \n            <button class=\"cor_button btn\">\n              <svg width=\"20px\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"grip-horizontal\" class=\"svg-inline--fa fa-grip-horizontal fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z\"></path></svg>\n            </button>\n\n            <button class=\"cor_button btn\">\n              <svg width=\"20px\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"grip-lines\" class=\"svg-inline--fa fa-grip-lines fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z\"></path></svg>\n            </button>\n\n            <cor-dashboard-date-btn class=\"cor-dashboard-date-btn\"></cor-dashboard-date-btn>\n\n            \n          </div>\n        \n          <cor-dashboard-main class=\"cor-dashboard-main\"></cor-dashboard-main>\n\n        </main>\n        <!-- /Main -->\n      \n    </div>\n    ";
    },
    css: function css() {
      return "\n    ";
    }
  };
  /*
    The root component listens to dispatched actions and updates its
    properties based on action types. The objects, arrays, etc. assigned
    to these properties are the single source of truth and represent
    the global app state. The element's attributes are also updated so
    that components observing them can react to specific state changes.
    Global app state from @bdc
  */

  var CorDashboard =
  /*#__PURE__*/
  function (_Component18) {
    _inherits(CorDashboard, _Component18);

    function CorDashboard() {
      _classCallCheck(this, CorDashboard);

      return _possibleConstructorReturn(this, _getPrototypeOf(CorDashboard).call(this));
    }

    _createClass(CorDashboard, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        // this.attachShadow({ mode: 'open' });
        this.innerHTML = Template$h.render(this.globalData.DATA);
        this.addEventListener("state-update", this.store); // Resize event

        window.onresize = this.ifResize();
      }
    }, {
      key: "ifResize",
      value: function ifResize() {
        if (window.innerWidth < 830) {
          document.querySelector('body').classList.toggle('is-collapsed');
        }
      }
    }, {
      key: "store",
      value: function store(_ref3) {
        var detail = _ref3.detail;

        switch (detail.type) {
          case "change-name":
            this.update("user-name", detail.text);
            break;

          case "filter":
            this.updateFilter("filter", detail.text);
            break;

          case "remove-filter":
            this.remove("filter", detail.text);
            break;

          case "view":
            this.updateView("view", detail.text);
            break;

          case "reset":
            this.setAttribute("view", "");
            this.setAttribute("filter", "");
        }
      }
    }, {
      key: "updateView",
      value: function updateView(key, value) {
        if (this[key]) {
          this[key] = value;
        } else {
          this.setAttribute(key, value);
        }
      }
    }, {
      key: "updateFilter",
      value: function updateFilter(key, value) {
        // Check if attribute exists
        var valuesOfAttribute = this.getAttribute(key);

        if (valuesOfAttribute) {
          // Get an array of values
          valuesOfAttribute = valuesOfAttribute.split(' '); // Add the new value if it doesn't exist

          if (!valuesOfAttribute.includes(value)) {
            var newListOfVAlues = valuesOfAttribute.join(' ') + ' ' + value;
            this.setAttribute(key, newListOfVAlues);
          }
        } else {
          this.setAttribute(key, value);
        }
      }
    }, {
      key: "remove",
      value: function remove(key, value) {
        this[key] = value;
        var valuesOfAttribute = this.getAttribute(key);
        valuesOfAttribute = valuesOfAttribute.split(' ');
        valuesOfAttribute = valuesOfAttribute.filter(function (el) {
          return el !== value;
        });
        this.setAttribute(key, valuesOfAttribute.join(' ')); // remove active state on filters in left nav

        if (key & value) {
          document.querySelector("[data-".concat(key, "=").concat(value, "]")).classList.remove('active');
        }
      }
    }]);

    return CorDashboard;
  }(Component);

  if (!customElements.get('cor-dashboard')) {
    customElements.define('cor-dashboard', CorDashboard);
  }

  return CorDashboard;
});
