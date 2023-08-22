const MenuService = require('../service/menu-service');
const HttpStatus = require('http-status');
const MenuDTO = require('../dto/menu-dto');

exports.findAllMenus = (req, res, next) => {

    const menus = MenuService.findAllMenus(); d

    res.status(200).send({
        status: 200,
        message: 'OK',
        results: menus
    })
};

exports.findMenuByMenuCode = (req, res, next) => {

    //console.log(req.params.menuCode);
    const menu = MenuService.findMenuByMenuCode(req.params.menuCode);

    if (menu && menu.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: menu
        })
    }

    if (menu && menu.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT FOUND',
            code: -99999,
            results: [],
            links: [
                {
                    rel: 'menuRegist',
                    method: 'POST',
                    href: 'https://api.taegeun.com/api/v1/menus'
                }
            ]
        })
    }
};

exports.registMenu = (req, res, next) => {
    const result = MenuService.registMenu(new MenuDTO(req.body));

    if (result) {
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED, //201
            message: 'CREATED',
            results: {
                menuCode: result.menuCode,
                menuName: result.menuName
            },
            contentLocation: `/menus/&{result.menuCode}`
        });
    } else {

        res.status(HttpsStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD REQUEST',
            code: -99999,
            results: [],
            links: [
                {
                    rel: 'menuRegist',
                    method: 'POST',
                    href: 'https://api.taegeun.com/api/v1/menus'
                }
            ]
        }
        )
    }
}