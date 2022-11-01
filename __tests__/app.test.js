const request = require('supertest');
const app = require('../lib/app');

describe('test /zodiac route', () => {
  it('zodiac route should return list of links to each zodiac sign', async () => {
    const resp = await request(app).get('/zodiac');
    expect(resp.text).toEqual('libra');
  });
});

describe('test /zodiac/:id route', () => {
  it('zodiac/:id route should return page about specific zodiac sign per id', async () => {
    const resp = await request(app).get('/zodiac:id');
    expect(resp.text).toEqual('definition');
  });
});

describe('test horoscopes/:sign route', () => {
  it('horoscopes/:sign should return page about specific horoscope of that day given the sign chosen', async () => {
    const resp = await request(app).get('/horoscope/:sign');
    expect(resp.text).toEqual('horoscope');
  });
});