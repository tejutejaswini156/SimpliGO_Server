module.exports=(sequelize,Sequelize)=>{
let userTable=sequelize.define('RegisterUserSequelize',{
        useremail:{
            primaryKey:true,
            type:Sequelize.STRING
        },
        username:Sequelize.STRING,
        userphoneno:Sequelize.INTEGER,
        password:Sequelize.STRING
    },{
        timestamps:false,
        freezeTableName:true
    });
    return userTable;
}