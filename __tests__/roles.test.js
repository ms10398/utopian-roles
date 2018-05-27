const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Roles API Endpoint test', () => {
  it('Checking role', () => {
    request(app).get('/roles/ms10398')
      .expect(200)
      .end((err, res) => {
        expect(typeof res.body).toBe('object');
      });
  });
});
