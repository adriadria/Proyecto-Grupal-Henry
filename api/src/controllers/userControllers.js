async function createUser(req, res, next) {
    try {
        console.log(req.body);
        res.status(200).json({msg: 'Estamos trabajando en esto!'});
    } catch (error) {
        next(error);
    } 
}