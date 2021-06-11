const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp)

const app = require('../app').app;

describe('Suite de prueba auth', ()=>{
    it('Should return 401 when no jwt available', (done) =>{
        // Cuando la llamada no tiene correctamente la llave
        chai.request(app)
            .get('/team')
            .end((err,res) => {
                chai.assert.equal(res.statusCode, 401);
                done();
            })
    });

    it('Should return 200 when jwt is valid', (done) =>{
        // 
        chai.request(app)
            .post('/login')
            .end((err,res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err,res) => {
                        chai.assert.equal(res.statusCode, 200);
                        done();
                    })
            })
        
    });
});
    