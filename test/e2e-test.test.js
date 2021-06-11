const chai = require('chai');
const chaiHttp = require('chai-http');
const chaihttp = require('chai-http');

chai.use(chaiHttp)

const app = require('../app').app;

describe('Suite de prueba e2e para el curso', ()=>{
/*it('Should return 401 when no jwt token available', (done) =>{
    // Cuando la llamada no tiene correctamente la llave
    chai.request(app)
        .get('/team')
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });*/

  
  });
