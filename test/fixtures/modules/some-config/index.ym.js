/**
 * Example of exporting module
 * @param {YM} ym
 * @param {Object} options
 */
module.exports = function (ym, options) {
    ym.define('config', function (provide) {
        provide({
            title: 'I\'m a config module. Trust me!',
            options: JSON.stringify(options)
        });
    });
};
