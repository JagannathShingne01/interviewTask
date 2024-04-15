import signup from "../model/signup";

const signUp = async(req, res)=> {
    const {name, password } = req.body;
    if (!name || !password) {
        console.log("Name and password are must required! "); 
      }
    
    try {
        const userInfo = signup(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success:true,
            data: result
        })} catch (error) {
            console.log(error)
            return res.status(500)
        }
}

const signIn = async(req, res)=> {
    const {name, password } = req.body;
    try {
        const user = await signup.findOne({name, password})
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        console.log(error)
        return res.status(500)
        
    }

}

export {signUp, signIn};