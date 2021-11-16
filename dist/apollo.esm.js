import React from 'react';

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* default props describe the general design of component */\n.apollo-component-library-button {\n    border: none;\n    font-size: 1rem;\n    padding: 10px 15px;\n    border-radius: 15px;\n    cursor: pointer;\n    transition: filter 300ms;\n}\n\n.apollo-component-library-button:hover {\n    filter: brightness(90%);\n}\n\n.apollo-component-library-button:active {\n    filter: brightness(75%);\n}\n\n/* variants should be defined as followed */\n.apollo-component-library-button.default {\n    background: #ff5757;\n}\n\n.apollo-component-library-button.secondary {\n    background: #57aeff\n}";
styleInject(css_248z);

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

var css_248z$1 = ".apollo-component-library-text-input {\n    font-size: 1rem;\n    border: none;\n    outline: none;\n    padding:  5px 10px;\n    border-radius: 5px;\n}\n\n.apollo-component-library-text-input.default {\n    border: 1px solid lightgray;\n    box-shadow: 0px 0px 0px 0px red;\n    transition: box-shadow 200ms;\n}\n\n.apollo-component-library-text-input.default:focus {\n    box-shadow: 0px 2px 0px 0px red;\n}\n\n.apollo-component-library-text-input.secondary {\n    border: 1px solid lightgray;\n    box-shadow: 0px 0px 0px 0px lightblue;\n    transition: box-shadow 200ms;\n}\n\n.apollo-component-library-text-input.secondary:focus {\n    box-shadow: 0px 2px 0px 0px lightblue;\n}";
styleInject(css_248z$1);

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

var css_248z$2 = ".apollo-component-library-typography-component {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1rem;\n}\n\n.apollo-component-library-typography-component.first-header {\n    font-size: 2em;\n    margin-top: 0.67em;\n    margin-bottom: 0.67em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.apollo-component-library-typography-component.second-header {\n    font-size: 1.5em;\n    margin-top: 0.83em;\n    margin-bottom: 0.83em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.apollo-component-library-typography-component.third-header {\n    font-size: 1.17em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.apollo-component-library-typography-component.no-margins {\n    margin: 0;\n}\n\n.apollo-component-library-typography-component.inline {\n    display: inline-block;\n}\n\n.apollo-component-library-typography-component.bold {\n    font-weight: bold;\n}\n\n.apollo-component-library-typography-component.italic {\n    font-style: italic;\n}\n\n.apollo-component-library-typography-component.underline {\n    text-decoration: underline;\n}";
styleInject(css_248z$2);

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

var css_248z$3 = ".apollo-component-library-checkbox-component {\n    margin-right: 5px;\n}";
styleInject(css_248z$3);

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

var css_248z$4 = ".apollo-component-library-radio-component {\n    margin-right: 5px;\n}";
styleInject(css_248z$4);

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

var css_248z$5 = ".apollo-component-library-switch-component-label {\n    position: relative;\n    display: inline-block;\n    padding-left: 36px;\n}\n\n.apollo-component-library-switch-component-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.apollo-component-library-switch-component {\n    position: absolute;\n    cursor: pointer;\n    top: 16px;\n    left: 5px;\n    background-color: rgb(226, 226, 226);\n    transition: 400ms;\n    width: 36px;\n    height: 20px;\n    border-radius: 20px;\n}\n\n.apollo-component-library-switch-component:before {\n    content: \" \";\n    position: absolute;\n    min-height: 16px;\n    min-width: 16px;\n    left: 2px;\n    bottom: 2px;\n    background: white;\n    transition: 400ms;\n    border-radius: 100px;\n}\n\n.apollo-component-library-switch-component-input:checked + .apollo-component-library-switch-component:before {\n    transform: translate(16px);\n}\n\n.apollo-component-library-switch-component-input:checked + .apollo-component-library-switch-component.default:before {\n    background: lightcoral;\n}\n\n.apollo-component-library-switch-component-input:checked + .apollo-component-library-switch-component.secondary:before {\n    background: lightskyblue;\n}\n\n.apollo-component-library-switch-component-input:disabled + .apollo-component-library-switch-component:before {\n    background: darkgray;\n}\n\n.apollo-component-library-switch-component-input:disabled + .apollo-component-library-switch-component.default:before {\n    background: darkgray;\n}\n\n.apollo-component-library-switch-component-input:disabled + .apollo-component-library-switch-component.secondary:before {\n    background: darkgray;\n}";
styleInject(css_248z$5);

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

var css_248z$6 = "/* default props describe the general design of component */\n.apollo-component-library-button {\n    border: none;\n    font-size: 1rem;\n    padding: 10px 15px;\n    border-radius: 15px;\n    cursor: pointer;\n    transition: filter 300ms;\n}\n\n.apollo-component-library-button:hover {\n    filter: brightness(90%);\n}\n\n.apollo-component-library-button:active {\n    filter: brightness(75%);\n}\n\n/* variants should be defined as followed */\n.apollo-component-library-button.default {\n    background: #ff5757;\n}\n\n.apollo-component-library-button.secondary {\n    background: #57aeff\n}\n\n\n\n\n\n\n\n\n\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n  }\n  \n  .modal-main {\n    position:fixed;\n    background: white;\n    width: 80%;\n    height: auto;\n    top:50%;\n    left:50%;\n    transform: translate(-50%,-50%);\n  }\n  \n  .display-block {\n    display: block;\n  }\n  \n  .display-none {\n    display: none;\n  }";
styleInject(css_248z$6);

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
    className: "apollo-component-library-button " + variant
  }), children)); // if the href element exists, render it with link capabilities, else just render the standalone button

  return href ? React.createElement("a", {
    href: href,
    target: "_blank"
  }, button) : button;
};

export { Button, Checkbox, Modal, Radio, Switch, Text, TextInput };
//# sourceMappingURL=apollo.esm.js.map
