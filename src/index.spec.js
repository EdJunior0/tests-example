const app = require('./server');
const request = require('supertest')

describe('Test my app server', () => {
    it('should get main route', async () => {
        const response = await request(app).get('/')
        expect(response.body).toHaveProperty('ok')
        expect(response.statusCode).toEqual(200)
    })
})