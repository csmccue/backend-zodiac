const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('test /zodiac route', () => {
  it('zodiac route should return list of zodiac signs', async () => {
    const resp = await request(app).get('/zodiacs');
    const expected = zodiacs.map((item) => {
      return { id: item.id, name: item.name };
    });
    expect(resp.body).toEqual(expected);
  });
});

describe('test /zodiac/:id route', () => {
  it('zodiac/:id route should return page about specific zodiac sign per id', async () => {
    const resp = await request(app).get('/zodiacs:id');
    expect(resp.text).toEqual('definition');
  });
});

describe('test horoscopes/:sign route', () => {
  it('horoscopes/:sign should return page about specific horoscope of that day given the sign chosen', async () => {
    const resp = await request(app).get('/horoscope/:sign');
    expect(resp.text).toEqual('horoscope');
  });
});

