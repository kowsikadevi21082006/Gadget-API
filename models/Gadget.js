const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Gadget = sequelize.define('Gadget', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
        defaultValue: 'Available',
    },
    decommissionedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'decommissionedat'  
    }
}, {
    tableName: 'Gadget',
    timestamps: false
});

module.exports = Gadget;
