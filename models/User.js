const BaseModel=require('./BaseModel')
class User extends BaseModel{
    static init(sequelize,DataTypes){
        return super.init(
            {
                id:{
                    type:DataTypes.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                },
                name:{
                    type:DataTypes.STRING,
                    defaultValue:null
                },
                email:{
                    type:DataTypes.STRING,
                    defaultValue:null
                },
                mobile:{
                    type:DataTypes.STRING,
                    defaultValue:null
                },
                password:{
                    type:DataTypes.STRING,
                    defaultValue:null
                },
                status:{
                    type:DataTypes.STRING,
                    defaultValue:null
                }
            },
            {
                modelName:'User',
                tableName:'user',
                underscored:true,
                sequelize,
            }
        )
    }
}
module.exports=User



















