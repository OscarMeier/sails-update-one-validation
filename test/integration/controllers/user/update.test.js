const request = require('supertest');
var assert = require('assert');

describe('User Blueprint Update', function () {

  it('It should update the zip code of the first user', async function () {
    await request(sails.hooks.http.app)
      .patch('/user/1')
      //User Data
      .send({
        zip_code: '2345'
      })
      .expect((res) => (res.status != 200 ? console.log(res.body) : 0))
      .expect(200);

    const updatedUser = await User.findOne({
      id: 1
    }).decrypt();
    assert.equal(updatedUser.zip_code, '2345');
  });
});
