require.config({
    paths: {
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "jquery": "bower_components/jquery/dist/jquery",
        "jsnlog": "bower_components/jsnlog/jsnlog",
        "require-css":"bower_components/require-css/css",
        "logger":"logger"

    }
})
try{
    require(['logger'],function(logger){
        require(['jquery'], function (jquery) {    
            require(['bootstrap'],function(bootstrap){
                logger.info("Bootstrap loaded")
            })
            require(['require-css!css/style.css'], function (style) {
                logger.info("stylesheet loaded")
            })
        })
    })
} catch (e) {
    console.log("Could not initialize app")
}