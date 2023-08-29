import { DataTypes } from "sequelize"
import connection from "../utils/Connection"

const Users = connection.define('users', {
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
    department: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    roleId:{
        type: DataTypes.BIGINT,
        references:{
            model:'roles',
            key:'id'
        }
    },
    collegeId:{
        type: DataTypes.BIGINT,
        references:{
            model:'colleges',
            key:'id'
        }
    },
    joiningDate: {
        type: DataTypes.DATEONLY,
    },

},
    {
        timestamps:false
    }
)


export default Users