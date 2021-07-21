/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {

  return s.replace(/\s/g, '%20')
};

module.exports = replaceSpace