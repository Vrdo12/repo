const User = require('./User');


const register = async data =>{
    const use = await new User({
        log: data.login,
        pass: data.password
    });
    await use.save()
    return use
};




module.exports = {
    register
};