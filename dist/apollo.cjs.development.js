'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children", "href", "variant"];
/**
 * Button component for the Apollo Component Library
 */

var Button = function Button(_ref) {
  var children = _ref.children,
      href = _ref.href,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var button = React.createElement("button", Object.assign({}, props, {
    className: "apollo-component-library-button " + variant
  }), children); // if the href element exists, render it with link capabilities, else just render the standalone button

  return href ? React.createElement("a", {
    href: href,
    target: "_blank"
  }, button) : button;
};

var _excluded$1 = ["variant", "password"];
/**
 * Text Input from the Apollo Component Library
 */

var TextInput = function TextInput(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$password = _ref.password,
      password = _ref$password === void 0 ? false : _ref$password,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return React.createElement("input", Object.assign({}, props, {
    className: "apollo-component-library-text-input " + variant,
    type: password ? "password" : "text"
  }));
};

var _excluded$2 = ["children", "header", "margins", "inline", "bold", "italic", "underline", "upper", "lower", "pascal"];
/**
 * Typography component for the Apollo Component Library
 */

var Text = function Text(_ref) {
  var children = _ref.children,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? 0 : _ref$header,
      _ref$margins = _ref.margins,
      margins = _ref$margins === void 0 ? true : _ref$margins,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$italic = _ref.italic,
      italic = _ref$italic === void 0 ? false : _ref$italic,
      _ref$underline = _ref.underline,
      underline = _ref$underline === void 0 ? false : _ref$underline,
      _ref$upper = _ref.upper,
      upper = _ref$upper === void 0 ? false : _ref$upper,
      _ref$lower = _ref.lower,
      lower = _ref$lower === void 0 ? false : _ref$lower,
      _ref$pascal = _ref.pascal,
      pascal = _ref$pascal === void 0 ? false : _ref$pascal,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  /**
   * Gets all the special conditions and translates it to a special className combination granting all conditions
   *
   * @returns the full variant title
   */
  var getVariant = function getVariant() {
    // determine custom variant
    var customVariant = 'apollo-component-library-typography-component '; // check if its a header or not

    if (header == 1) customVariant += 'first-header ';
    if (header == 2) customVariant += 'second-header ';
    if (header == 3) customVariant += 'third-header '; // check if any of the special cases are met

    if (!margins) customVariant += 'no-margins ';
    if (inline) customVariant += 'inline ';
    if (italic) customVariant += 'italic ';
    if (bold) customVariant += 'bold ';
    if (underline) customVariant += 'underline ';
    return customVariant;
  };
  /**
   * Given a valid string the method will convert the first word of each letter to uppercase and the rest lowercase
   *
   * @param target string that needs to be converted
   * @returns converted string
   */


  var convertPascal = function convertPascal(target) {
    var outputArr = target.split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return outputArr.join(' ');
  };
  /**
   * If the children object is also a string, it will convert according to the provided properties
   *
   * @returns correctly cased string, or corresponding children
   */


  var getCorrectCasing = function getCorrectCasing() {
    if (typeof children === 'string') {
      switch (true) {
        case upper:
          return children.toUpperCase();

        case lower:
          return children.toLowerCase();

        case pascal:
          return convertPascal(children);
      }
    }

    return children;
  };

  return React.createElement("p", Object.assign({}, props, {
    className: getVariant()
  }), getCorrectCasing());
};

var _excluded$3 = ["children"];
/**
 * An input object that is a list of items where a single entry can be selected
 */

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  return React.createElement("label", null, React.createElement("input", Object.assign({}, props, {
    type: "checkbox",
    className: "apollo-component-library-checkbox-component"
  })), React.createElement(Text, {
    inline: true
  }, children));
};

var _excluded$4 = ["children"];
/**
 * An input object that is a list of items where a single entry can be selected
 */

var Radio = function Radio(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  return React.createElement("label", null, React.createElement("input", Object.assign({}, props, {
    type: "radio",
    className: "apollo-component-library-radio-component"
  })), React.createElement(Text, {
    inline: true
  }, children));
};

var _excluded$5 = ["children", "variant"];
/**
 * UI element that slides a button from on to off.
 */

var Switch = function Switch(_ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return React.createElement("label", {
    className: "apollo-component-library-switch-component-label"
  }, React.createElement("input", Object.assign({}, props, {
    type: "checkbox",
    role: "switch",
    className: "apollo-component-library-switch-component-input"
  })), React.createElement("span", {
    className: "apollo-component-library-switch-component " + variant
  }), React.createElement(Text, {
    inline: true
  }, children));
};

var _excluded$6 = ["children", "href", "variant"];
/**
 * Button component for the Apollo Component Library
 */

 var Modal = function Modal(_ref) {
  var children = _ref.children,
      href = _ref.href,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  var button = React.createElement(React.Fragment, null, React.createElement("button", Object.assign({}, props, {
    "data-toggle": "modal",
    "data-target": "#exampleModal",
   
  }), children)); // if the href element exists, render it with link capabilities, else just render the standalone button

};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Modal = Modal;
exports.Radio = Radio;
exports.Switch = Switch;
exports.Text = Text;
exports.TextInput = TextInput;
//# sourceMappingURL=apollo.cjs.development.js.map
