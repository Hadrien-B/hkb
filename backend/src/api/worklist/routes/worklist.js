'use strict';

/**
 * worklist router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::worklist.worklist');
