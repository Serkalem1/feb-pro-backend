const router = require('express').Router()
const Employee = require('../model/employee')


/* ADD EMPLOYEE */

router.post("/addemployee", async(req, res) =>{
    const newEmployee = new Employee({
        image: req.body.image,
        name: req.body.name,
        position: req.body.position,
        officePhone: req.body.officePhone,
        mobilePhone: req.body.mobilePhone,
        sms: req.body.sms,
        email: req.body.email
        });
    try {
        const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
    
})

module.exports = router;

/* GET ALL EMPLOYEES */

router.get("/allemployees", async(req,res)=>{
  try{
    const result = await Employee.find({});
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json(err)
  }
})

/* Search EMPLOYEES */

router.get("/employees", async(req,res)=>{
  try{
    const result = await Employee.find({name: {'$regex': req.query.key,$options:'i'} });    
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json(err)
  }
})