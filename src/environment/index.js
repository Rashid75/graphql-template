const ENV = process.env.NODE_ENV || 'production';
const path = `./${ENV}.js`;
const config = require(`${path}`);
export default config;
