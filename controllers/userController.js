class Controller{

    static checkUp(req,res){
        res.render('home')
    }

    static saveCheckUp(req,res){
       const { fullName, username, password, address, role, email, age, phone, specialist} = req.body
       
    }

    static result(req,res){

    }

    static buy(req,res){
        
    }

    static payment(req,res){

    }
}
module.exports = Controller