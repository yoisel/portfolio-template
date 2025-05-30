// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const error = console.error;
console.error = (...args) => {
  error(...args);
  throw new Error(...args);
};

const warn = console.warn;
console.warn = (...args) => {
  warn(...args);
  throw new Error(...args);
};
