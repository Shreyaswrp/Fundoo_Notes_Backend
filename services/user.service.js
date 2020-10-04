const USER = require('../app/models/user.model.js');

class UserService {

  /**
    * @params {object} data
    * @params {callback function} callback
    */
    createUser = (data, callback) => {
        USER.createUser(data, function(err,result){
            if (err) {
                callback(err,null);
            } else {
                callback(null,result);
            }
        })
    }
}

module.exports = new UserService();