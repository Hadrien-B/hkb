'use strict';

/**
 * worklist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worklist.worklist');
