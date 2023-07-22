import  {app}  from '../../src/index'
import request from 'supertest'

describe('GET /tickets/:id', () => {
    it('should return array of tickets', async () => {
        await request(app)
            .get('/api/tickets/:1195')
            .expect(200)
        // expect(1).toBe(1)
    })
    // it('should return not found 404', () => {
    //     const result = request(app)
    //         .get('/api/tickets/:5555')
    //         .expect(200)
    // })
})