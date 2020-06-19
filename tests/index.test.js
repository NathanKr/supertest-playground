const request = require('supertest')
const app = require('../src/app')

test('route / status is 200',async ()=>{
    await request(app).get('/').expect(200);
})