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
    const resp = await request(app).get('/zodiacs/1');
    const testZodiacOne = {
      id: '1',
      name: 'aquarius'
    };
    expect(resp.body).toEqual(testZodiacOne);
  });
});

describe('test horoscopes/:sign route', () => {
  it('horoscopes/:sign should return page about specific horoscope of that day given the sign chosen', async () => {
    const resp = await request(app).get('/zodiacs/horoscope/aquarius');
    const testHoroscopeOne = {
      horoscope: 'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as you\'d hoped, causing you to close off emotionally. Don\'t be hard on yourself if you\'re feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so you\'ll want to be on guard for finicky appliances or temperamental roommates.'
    };
    expect(resp.text).toEqual(testHoroscopeOne.horoscope);
  });
});

