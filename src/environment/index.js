const ENV = process.env.NODE_ENV || "production";
const path = `./${ENV}.js`;
let config=null;
config = require(path)();
export default config;
