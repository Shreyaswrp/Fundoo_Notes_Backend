const userRegistration = require('../controller/user.controller.js');
var user = new userRegistration();

module.exports = (app) => {
    
    /**
     * Define a simple route to display Message at the homepage
     */
    app.get('/', (req, res) => {
        res.json("Welcome to Fundoo Notes application.");
    });

    // Create a new User
    app.post('/create-user', user.createUser);
}