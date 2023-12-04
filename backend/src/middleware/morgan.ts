import { Logger } from '@nestjs/common';
const morgan = require('morgan')
export function useRequestLogging(app) {
    const logger = new Logger('Request');
    app.use(
        morgan('tiny'
        , {
            stream: {
                write: (message) => logger.log(message.replace('\n', '')),
            },
        }
        ),
    );
}