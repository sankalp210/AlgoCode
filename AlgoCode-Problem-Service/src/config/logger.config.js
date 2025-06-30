import winston from 'winston';

const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(log => `${log.timestamp} [${log.level}]: ${log.message}`)
  )
});

const fileTransport = new winston.transports.File({
  filename: 'app.log',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(log => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  )
});

const logger = winston.createLogger({
  transports: [consoleTransport, fileTransport]
});

export default logger;
