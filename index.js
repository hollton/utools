const req = require.context('./src', true, /\.js$/);
req.keys().forEach(mod => {
    let v = req(mod);
    if (v && v.default) {
        v = v.default;
    }
});

module.exports = require('./src');