const rewireLess = require('react-app-rewire-less');

/**
 * This file exists as a "just in case". The idea is that we shouldn't have to be doing crazy webpack configurations
 * to do the things we usually need to do. We want to offload as much as possible and leverage the work that already
 * exists on the interwebs.
 *
 * At the same time, we do not want to force people to not use what webpack does so well. (WHEN CONFIGURED CORRECTLY) :)
 *
 * This is where you can override webpack configurations to do whatever you need to, but before you do, ask yourself:
 * "Do I REALLY need to be in here?"
 */

const override = (config, env) => {
    config = rewireLess(config, env);

    return config;
};

module.exports = override;
