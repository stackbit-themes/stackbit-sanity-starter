const sourcebit = require("sourcebit");
const sourcebitConfig = require("./sourcebit.js");
const { withStackbit } = require("experimental-next-stackbit");

sourcebit.fetch(sourcebitConfig);

module.exports = withStackbit({});
