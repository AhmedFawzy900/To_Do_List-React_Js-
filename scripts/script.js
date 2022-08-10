"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      titles: [],
      title: '',
      color: '',
      colors: ''
    };

    _this.changeTitle = function (e) {
      _this.setState({
        title: e.target.value
      });
    };

    _this.listTitle = function () {
      var titles = [].concat(_toConsumableArray(_this.state.titles), [{
        id: Math.random(),
        name: _this.state.title
      }]);

      _this.setState({
        titles: titles,
        title: ''
      });
    };

    _this.deleteItem = function (id) {
      var titles = _toConsumableArray(_this.state.titles);

      var newtitle = titles.filter(function (title) {
        return title.id != id;
      });

      _this.setState({
        titles: newtitle
      });
    };

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.titles);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        "data-aos": "fade-down"
      }), /*#__PURE__*/React.createElement(Title, {
        changeTitle: this.changeTitle,
        saveData: this.listTitle
      }), /*#__PURE__*/React.createElement("p", {
        "class": "ts",
        "data-aos": "fade-down"
      }, "Tasks :"), /*#__PURE__*/React.createElement("section", {
        "class": "cont"
      }, this.state.titles.map(function (tit) {
        return /*#__PURE__*/React.createElement(Item, {
          id: tit.id,
          item: tit.name,
          remove: _this2.deleteItem
        });
      })));
    }
  }]);

  return App;
}(React.Component); // header


var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
        "class": "header"
      }, "To Do List"));
    }
  }]);

  return Header;
}(React.Component); // input title


var Title = /*#__PURE__*/function (_React$Component3) {
  _inherits(Title, _React$Component3);

  var _super3 = _createSuper(Title);

  function Title() {
    _classCallCheck(this, Title);

    return _super3.apply(this, arguments);
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        "class": "title",
        "data-aos": "fade-up"
      }, /*#__PURE__*/React.createElement("input", {
        "class": "in",
        type: "text",
        onChange: this.props.changeTitle
      }), /*#__PURE__*/React.createElement("button", {
        onClick: this.props.saveData
      }, "Add"));
    }
  }]);

  return Title;
}(React.Component);

var Item = /*#__PURE__*/function (_React$Component4) {
  _inherits(Item, _React$Component4);

  var _super4 = _createSuper(Item);

  function Item() {
    _classCallCheck(this, Item);

    return _super4.apply(this, arguments);
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var c = false;
      return /*#__PURE__*/React.createElement("div", {
        "data-aos": "fade-up"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "items",
        "data-aos": "fade-up"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "p1"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        name: "ch",
        id: "check",
        onChange: function onChange() {
          return !c;
        }
      }), c == true ? /*#__PURE__*/React.createElement("span", {
        id: "span"
      }) : '', /*#__PURE__*/React.createElement("label", {
        name: "ch",
        "class": "tit"
      }, this.props.item)), /*#__PURE__*/React.createElement("i", {
        onClick: function onClick() {
          return _this3.props.remove(_this3.props.id);
        },
        "class": "fa-solid fa-circle-minus"
      })));
    }
  }]);

  return Item;
}(React.Component); // render


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("render"));
