// @flow

export type LoggerOptions = {
    method: "useState",
    newValue: any
};

const LoggerHolder = {
    logger: (options: LoggerOptions) => {
        console.log(options);
    }
};

export const setLogger = (logger: LoggerOptions => mixed) => {
    LoggerHolder.logger = logger;
};

export const getLogger = () => {
    return LoggerHolder.logger;
};
