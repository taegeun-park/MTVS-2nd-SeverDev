const UserService = require('../service/user-service');
const HttpsStatus = require('http-status');
const UserDTO = require('../dto/user-dto');

exports.findAllUser = (req, res, next) => {

    const users = UserService.findAllUsers();

    res.status(HttpsStatus.OK).send({
        status:HttpsStatus.OK,
        message: 'OK',
        results: users
    })
};