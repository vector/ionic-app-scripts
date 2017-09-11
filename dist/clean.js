"use strict";
var errors_1 = require('./util/errors');
var fs_extra_1 = require('fs-extra');
var config_1 = require('./util/config');
var logger_1 = require('./logger/logger');
function clean(context) {
    context = config_1.generateContext(context);
    var logger = new logger_1.Logger('clean');
    try {
        logger_1.Logger.debug("clean " + context.buildDir);
        fs_extra_1.emptyDirSync(context.buildDir);
        logger.finish();
    }
    catch (e) {
        throw logger.fail(new errors_1.BuildError("Error cleaning " + context.buildDir + ", " + e));
    }
    return Promise.resolve();
}
exports.clean = clean;
