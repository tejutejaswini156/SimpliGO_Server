// const express=require('express');
// var Sequelize=require('sequelize');
// var dbConfig=require('./db.Config');
// const app=express();
// app.use(express.json())
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const details = require("./details.json");
// app.use(cors({origin:"*"}));
// app.use(bodyParser.json());
// var sequelize= new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool:{
//         min:dbConfig.pool.min,
//         max:dbConfig.pool.max,
//         acquire:dbConfig.pool.acquire,
//         idle:dbConfig.pool.idle
//     }
// });
// sequelize.authenticate().then( () =>{
//     console.log("Connected to database successfully..");
// }).catch (err => {
//     console.error("Unable to connect to db,because"+err);
// })
// let userTable=sequelize.define('RegisterUserSequelize',{
//     useremail:{
//         primaryKey:true,
//         type:Sequelize.STRING
//     },
//     username:Sequelize.STRING,
//     userphoneno:Sequelize.INTEGER,
//     password:Sequelize.STRING
// },{
//     timestamps:false,
//     freezeTableName:true
// });

// // userTable.sync({force:true}).then(()=>{
// //     console.log("Table created successfully")
// // }).catch (err => {
// //     console.error("Error"+err);
// // });

// let productTable=sequelize.define('ProductSequelize',{
//     productid:{
//         primaryKey:true,
//         type:Sequelize.INTEGER
//     },
//     productitle:Sequelize.STRING,
//     productdescription:Sequelize.STRING,
//     productprice:Sequelize.INTEGER,
//     productbrand:Sequelize.STRING,
//     productrating:Sequelize.STRING,
//     productimageid:Sequelize.INTEGER,
//     productsize:Sequelize.STRING,
//     productquantity:Sequelize.INTEGER,
//     productcateogry:Sequelize.STRING,
//     productimg:Sequelize.STRING
// },{
//     timestamps:false,
//     freezeTableName:true
// });
// // productTable.sync({force:true}).then(()=>{
// //     console.log("Table created successfully")
// // }).catch (err => {
// //     console.error("Error"+err);
// // });
// let cartTable=sequelize.define('cartSequelize',{
//     id:{
//         type:Sequelize.INTEGER
//     },
//  title:Sequelize.STRING,
//     description:Sequelize.STRING,
//     price:Sequelize.INTEGER,
   
//     quantity:Sequelize.INTEGER,

//     img:Sequelize.STRING,
//     name:Sequelize.STRING,
//     cid:{
//         type:Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     }
// },{   
//     timestamps:false,
//     freezeTableName:true
// });
// // cartTable.sync({force:true}).then(()=>{
// //     console.log("Table created successfully")
// // }).catch (err => {
// //     console.error("Error"+err);
// // });
// app.post('/cart',function(req,res){
//     id=req.body.id,
//         title=req.body.title,
//         description=req.body.description,
//       price=req.body.price,
//        quantity=req.body.quantity,
//      img=req.body.img,
//      name=req.body.name;
       
//    cardObj=cartTable.build({
//        id:id,
//        title:title,
//       description:description,
//       price:price,
//    quantity:quantity,
//   img:img,
//   name:name
// });
//     cardObj.save().then(data=>{
//         var Msg="Record Inserted Successfully";
//         res.status(200).send(data)
//        }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })
//     }) 
// app.get('/Allcart',function(req,res){
//     console.log("Tested")
// ;    cartTable.findAll({raw:true}).then(data=>{
//         // console.log(data);
//         res.status(200).send(data)
//     }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })
//     })
//     app.get('/AllUsercart/:name',function(req,res){
//         var name=req.params.name;
//     //  console.log(name)
//     cartTable.findAll({where:{name:name},raw:true}).then((data)=>{
//     res.send(data);
//     }).catch (err => {
//       console.error("Error"+err);
//      })
// });
// app.put('/updateAllcart',function(req,res){

//     id=req.body.id,
//  title=req.body.title,
//  description=req.body.description,
// price=req.body.price,
// quantity=req.body.quantity,
// img=req.body.img,
// name=req.body.name;
// cartTable.update({id:id,title:title,description:description,price:price,quantity:quantity
//     +1,img:img,name:name},{where:{id:id,name:name}})
//     .then(data=>{
//         cartTable.findAll({where:{name:name,id:id},raw:true}).then((data)=>{
//             res.send(data);
//         })
//        }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })

// })
// app.put('/updatedelAllcart',function(req,res){

//     id=req.body.id,
//  title=req.body.title,
//  description=req.body.description,
// price=req.body.price,
// quantity=req.body.quantity,
// img=req.body.img,
// name=req.body.name;
// quantity=quantity-1
// cartTable.update({id:id,title:title,description:description,price:price,quantity:quantity,img:img,name:name},{where:{id:id,name:name}})
//     .then(data=>{
//         cartTable.findAll({where:{name:name,id:id},raw:true}).then((data)=>{
//             res.send(data);
//         })
//        }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })

// })
// app.delete('/deleteData/:id',function(req,res){
//    id=req.params.id
//    cartTable.destroy({where:{id:id}})
//    .then(data=>{
//        var Msg=[{"text":"Record Deleted Successfully","data":data}];
//        res.status(200).send(Msg);
//       }).catch(err=>{
//        console.error("There is an error getting data from db: "+err );
//        res.status(400).send(err);
//    })
//    });

//     app.delete('/deleteDataByCartId/',function(req,res){
  
//        cartTable.destroy(  {where: {},
      
//        })
//        .then(data=>{
//            console.log(data)
//            var Msg="Record Deleted Successfully";
//            res.status(200).send(Msg)
//           }).catch(err=>{
//            console.error("There is an error getting data from db: "+err );
//            res.status(400).send(err);
//        })
//        })
// app.get('/getAllProducts',function(req,res){
//     productTable.findAll({raw:true}).then(data=>{
//        // console.log(data);
//         res.status(200).send(data)
//     }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })
//     })
//     app.post('/products',function(req,res){
//         productid=req.body.productid,
//         productitle=req.body.productitle,
//         productdescription=req.body.productdescription,
//         productprice=req.body.productprice,
//         productbrand=req.body.productbrand,
//         productrating=req.body.productrating,
//         productimageid=req.body.productimageid ,
//         productsize=req.body.productsize,
//         productquantity=req.body.productquantity,
//         productcateogry=req.body.productcateogry;
       
//      productObj=productTable.build({productid:productid,
//         productitle:productitle,
//         productdescription:productdescription,
//         productprice:productprice,
//         productbrand:productbrand,
//         productrating:productrating,
//         productimageid:productimageid ,
//         productsize:productsize,
//         productquantity:productquantity,
//     productcateogry:productcateogry});
//     productObj.save().then(data=>{
//         var Msg="Record Inserted Successfully";
//         res.status(200).send(data)
//        }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })
//     })
// app.get('/getAll',function(req,res){
//     userTable.findAll({raw:true}).then(data=>{
//         console.log(data);
//         res.status(200).send(data)
//     }).catch(err=>{
//         console.error("There is an error getting data from db: "+err );
//         res.status(400).send(err);
//     })
//     })
// app.post('/register',function(req,res){
    
//     useremail=req.body.useremail,
//     username=req.body.username,
//     userphoneno=req.body.userphoneno,
//     password=req.body.password,
//  userObj=userTable.build({useremail:useremail,username:username,userphoneno:userphoneno,password:password});
// userObj.save().then(data=>{
//     var Msg="Record Inserted Successfully";
//     res.status(200).send(data)
//    }).catch(err=>{
//     console.error("There is an error getting data from db: "+err );
//     res.status(400).send(err);
// })
// })

// app.get('/test',function(req,res){
//     console.log("test")
//     res.status(200).send("test")
// })
// app.post("/sendmail", (req, res) => {
//   console.log("request came");
//   let user = req.body;
//   sendMail(user, info => {
//     console.log(`The mail has sent and the id is ${info.messageId}`);
//     res.send(info);
//   });
// });

// async function sendMail(user, callback) {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: details.email,
//       pass: details.password
//     }
//   });

//   let mailOptions = {
//     from: '"<example.gimail.com>', // sender address
//     to: user.email, // list of receivers
//     subject: "Thanks for registering with SimpliGO", // Subject line
//     html: `<h1>Hi ${user.name}</h1><br>
//     <h3>Thanks for joining us</h3>
//     <h2>Lets<b> GO </b>with<b> SimpliGO</b><br>
//     <h3>Top Brands For Electronics ,Latest Trends In Fashion at Best Prices.</h3>
//     <h4>Enjoy Shopping</h4>
  
//         `
    
//   };

//   // send mail with defined transport object
//   let info = await transporter.sendMail(mailOptions);

//   callback(info);
   
// }
// app.get("/getUserByEmail/:email",(req,resp)=>{
//     var useremail=req.params.email;
//     // console.log(typeof(useremail))
//     userTable.findAll({where :{useremail:useremail},raw:true})
//     .then((data)=>{
//       console.log("Data 1"+data)
//         if(data==null){
//             console.log("Data"+data)
//             resp.status(400).send("User not found")
//         }
//         else{
//             console.log("Email test"+data.useremail)
           
//             mailOptions.to=useremail;

//             mailOptions.subject='Hi  Your are  Password Recoverd  Successfully'
//             mailOptions.text='Your Password : '+data.password+'\nThankyou!'
            
//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                     // resp.status(401).send(error)
//                 }
//                   });
//             resp.status(200).send(data)
        
//             }

// })
// })
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'tejutejaswini156@gmail.com',
//       pass: 'sai@teja2'
//     }
//   });
  
//   var mailOptions = {
//     from: 'tejutejaswini156@gmail.com',
//     to: 'meghanasep12@gmail.com',
//     subject: 'hi',
//     text:'hi'
//   };
// app.listen(5000,function(){
//     console.log("Server is listening at http://localhost:5000");
// })