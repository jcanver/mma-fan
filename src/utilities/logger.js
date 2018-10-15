/**
 * @module utilities/logger
 */

const cns = console;

const msgStyle = (style) => `font-weight: bold; font-size: 14px; ${style}`;
const titleStyle = (style) => `font-weight: bold; font-size: 14px; ${style}`;

/**
 * Log information
 * @param {'log'|'info'|'warn'|'error'} type request type
 * @param {*} msg What to display
 * @param {string} file Specify the file
 */
function log(style = '', mgStyle = '', msg, file) {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  if (typeof msg === 'string') {
    if (file) {
      cns.log(`%c(${file}) %c${msg}`, titleStyle(style), msgStyle(mgStyle));
      // cns.log(`${chalk.blue(file)}`);
    } else {
      cns.log(`%cGRAND %c${msg}`, titleStyle(style), msgStyle(mgStyle));
    }
  } else if (file) {
    cns.log(`%c(${file})`, titleStyle(style), msg);
  } else {
    cns.log('%cGRAND', titleStyle(style), msg);
  }
}

const logger = {
  log: (msg, file, trace) => log('color: navy', '', msg, file, trace),
  warn: (msg, file, trace) => log('color: #cccc00', '', msg, file, trace),
  info: (msg, file, trace) => log('color: #76bdd5', 'font-size: 11px;', msg, file, trace),
  error: (msg, file, trace) => log('color: red', '', msg, file, trace)
};

global.logger = logger;

/**
 * Object with normal types
 */
export default logger;
