const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

  try {
    const { cookies } = req;

    if(cookies.accessToken){
        jwt.verify(cookies.accessToken, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
              return res.status(200).send({
                message: "Auth Fialed",
                success: false,
              });
            } else {
              req.body.userId = decode.id;
              next();
            }
          });
    }

  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};