const models = require("../../models");
const bcrypt = require("bcrypt");

module.exports = {
  async RegisterUser(req, res) {
    const cust_data = req.body;
    bcrypt.hash(cust_data.password, 10, async function (err, hash) {
      if (err) throw err;
      const record = await models.User.create({
        name: cust_data.username,
        email: cust_data.email,
        mobile: cust_data.mobile,
        password: hash,
        status: 1,
      });
    });

    res.send({ code: 201, message: "User is Successfully Registered" });
  },
  async LoginUser(req, response) {
    const password = await models.User.findOne({
      where: {
        email: req.body.email,
      },
      attributes: ["password"],
      raw: true,
    });

    if (!password) {
      response.send({
        code: 401,
        message: "Invalid Credentials or User not signed up",
      });
    }

    bcrypt.compare(req.body.password, password.password, function (err, res) {
      if (err) {
        throw err;
        // handle error
      } else {
        if (res) {
          response.send({
            code: 200,
            message: "User is Successfully Logged In",
          });
        } else {
          response.send({
            code: 401,
            message: "Invalid Credentials or User not signed up",
          });
        }
      }
    });
  },
  async addEmployee(req, res) {
    const emp_data = req.body;
    const userData=await models.User.findOne({
      where:{
        email:emp_data.reportingUser
      },
      attributes:['email'],
      raw:true
    })
    if(!userData) return res.send({code:401,message:"Reporting User not found"})
    const record = await models.Employee.create({
      name: emp_data.name,
      email: emp_data.email,
      mobile: emp_data.mobile,
      joindate: emp_data.joindate,
      dob: emp_data.dob,
      department: emp_data.department,
      designation: emp_data.designation,
      reportingUser: emp_data.reportingUser,
    });
    res.send({ code: 201, message: "Employee is Successfully Added" });
  },

  async getEmployee(req,res){
      const emp_email=req.params.empemail;
      const ifFound=await models.User.findOne({
        where:{
          email:emp_email
        },
        raw:true
      });
      if(!ifFound) return res.send({code:401,message:"User not found"})
      const allEmployee = await models.Employee.findAll({
        where:{
          reporting_user:emp_email
        },
        raw:true
      })
      res.send({code:200,message:allEmployee})
  }
};
