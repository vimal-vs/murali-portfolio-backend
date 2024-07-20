'use strict';
module.exports = (sequelize, DataTypes) => {
    const Common = sequelize.define('Common', {
        statistics: {
            type: DataTypes.JSONB,
        },
        footer: {
            type: DataTypes.JSONB,
        },
        landing: {
            type: DataTypes.JSONB,
        },
        links: {
            type: DataTypes.JSONB,
        }
    });
    return Common;
};