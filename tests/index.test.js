const request = require('supertest')
const app = require('../src/app')

test('route / status is 200',async ()=>{
    await request(app).get('/').expect(200);
})

test('route / get correct object and status code',async ()=>{
    const response = await request(app).get('/').expect(201);

    expect(response.body).toMatchObject({msg: "hello world"});
})
