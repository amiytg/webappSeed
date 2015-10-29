define(['jsnlog'], function (jsnlog) {
    try {
        var logger = JL();
        var consoleAppender = JL.createConsoleAppender('consoleAppender');
        logger.setOptions({ "appenders": [consoleAppender] });
        logger.info("test")
    } catch (e) {
        console.log("Error occured creating logger");
    }
    logger.info("Hello")
    return logger;
})