const loginSignupModel = require("../modles/loginSignup");
const login = async (req, res) => {
  const { username, email, password } = req.body;
  // let temp = loginSignupModel.findOne({email: email})
  // if(temp){res.json({temp}) ; return;}
  const finalUser = await loginSignupModel.create(req.body);
  console.log(finalUser);
  if (finalUser) {
    // const token = await finalUser.generateAuthToken();
    return res.status(201).json("hogaya 1dec");
  }
};

const signup = async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  const user = await loginSignupModel.findOne({ name: name });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Does Not Exists",
    });
  }
  const isMatch = await user.Match_Password(password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Incorrect Password",
    });
  } else {
    const token = await user.generateAuthToken();
    console.log("hogaya");
    console.log(token);
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // // res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, authorization')
    // res.setHeader('Content-Type', 'application/json')
    // res.setHeader('Access-Control-Allow-Origin','http://localhost:3001');
    // res.setHeader('Access-Control-Allow-METHODS',"GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
    return res

      .cookie("access_token", token, { maxAge: 10000000 })

      .send("data");
  }
};
const logout =  async (req,res)=>{
if(true){

  return res.cookie("access_token","", { maxAge: 1000, path: '/' }) .send("Deleted");
}
}

module.exports = {login:login,signup:signup, logout:logout}
