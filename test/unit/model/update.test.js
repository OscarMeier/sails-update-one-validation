const request = require('supertest');
var assert = require('assert');

describe('User Waterline Update and UpdateOne', function () {

  it('It should update the zip code of all matching users', async function () {
    const updatedUsers = await User.update({
      id: 1
    },
    {
      zip_code: '3456'
    })
    .fetch()
    .decrypt();
    assert.equal(updatedUsers[0].zip_code, '3456');
  });

  it('It should update the zip code of one user', async function () {
    const updatedUser = await User.updateOne({
      id: 1
    },
    {
      zip_code: '3456'
    });
    assert.equal(updatedUser.zip_code, '3456');
  });
});
