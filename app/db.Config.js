module.exports={
    host:"localhost",
    user:"postgres",
    password:"12345678",
    database:"postgres",
    dialect:"postgres",
    
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
};