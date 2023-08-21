import { DataTypes } from "sequelize"
import connection from "../utils/Connection"

const College = connection.define('college', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.BIGINT,
    },
    address: {
        type: DataTypes.STRING,
    },
    pincode: {
        type: DataTypes.INTEGER,
    },
    emailDomain: {
        type: DataTypes.STRING,
    },
    userCount: {
        type: DataTypes.BIGINT,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['Active', 'Inactive', 'Pending'],
    },
    dateOfJoining: {
        type: DataTypes.DATEONLY,
    },

},
    {
        timestamps:false
    }
)


export default College