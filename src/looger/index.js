const pino = require('pino');
// const pretty = require('pino-pretty');
// const stream = pretty({
//   levelFirst:true,
//   colorize: true
// })
// const logger = pino({ level: 'debug' }, stream)
const logger = pino({ level: 'debug' })

module.exports = logger;