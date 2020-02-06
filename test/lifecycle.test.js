var sails = require('sails');

// Before running any tests...
before(function (done) {
    // Increase the Mocha timeout so that Sails has enough time to lift, even if you have a bunch of assets.
    this.timeout(30000);
    sails.lift({
        models: {
            migrate: 'drop'
        },
        hooks: { grunt: false },
        log: { level: 'warn' },

    }, async function (err) {
        if (err) {
          return done(err);
        }

        // Create first user
        await User.create({
          id: 1,
          email: 'user@example.com',
          street: 'street 1',
          zip_code: '1234',
          city: 'City'
        });

        return done(null);
    });
});

// After all tests have finished...
after(function (done) {
    sails.lower(done);
});
