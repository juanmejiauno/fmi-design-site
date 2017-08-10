/* eslint no-param-reassign: "off" */
const lifecycleMethods = [
  'constructor',
  'render',
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
];

function autobind(context, methods) {
  const proto = Object.getPrototypeOf(context);
  const props = Object.getOwnPropertyNames(proto);

  if (Array.isArray(methods)) {
    methods.forEach((method) => {
      if (props.includes(method) && isBindable(context, method)) {
        context[method] = context[method].bind(context);
      }
    });
  } else if (typeof methods === 'undefined') {
    props.forEach((prop) => {
      if (isBindable(context, prop)) {
        context[prop] = context[prop].bind(context);
      }
    });
  }
}

function isBindable(context, method) {
  return lifecycleMethods.indexOf(method) === -1 && typeof context[method] === 'function';
}

export default autobind;
