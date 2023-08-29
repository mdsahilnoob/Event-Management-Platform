import { DataTypes } from "sequelize"
import connection from "../utils/Connection"

const Roles = connection.define('roles', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    accessLevel:{
        type: DataTypes.JSON
    }

},
    {
        timestamps:false
    }
)


export default Roles