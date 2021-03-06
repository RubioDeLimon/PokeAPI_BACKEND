const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;


module.exports = passport => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: 'your-256-bit-secret' // TODO debería estar en una variable de entorno
  }
  passport.use(new JwtStrategy(opts, (decoded, done) => {
    console.log('decoded jwt', decoded);
    return donde(null, decoded);
  }));
}
