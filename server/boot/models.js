module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Study = app.models.Study;
  var Payment = app.models.Payment;

  User.create([
    {username: 'sheldon', email: 'sheldon@cooper.com', password: 'password', firstname: 'sheldon', lastname:"Cooper", nickname: 'funwithflags'},
    {username: 'leanord', email: 'leanord@h.com', password: 'password', firstname:'Leanord', lastname: 'Hofstader', nickname: 'leanordh'},
    {username: 'penny', email: 'penny@me.com', password: 'password', firstname:'Penny', lastname: 'Hofstader', nickname: 'penny'},
    {username: 'myaccount', email: 'anna@me.com', password: 'password', firstname: 'Anna', lastname:"M", nickname: 'mittino'},
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make anna an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[3].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });

      Role.create({
        name: 'standard'
      }, function(err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[2].id
        }, function(err, principal) {
          if (err) throw err;

          console.log('Created principal:', principal);
        });
    });

    Role.create({
      name: 'researcher'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      role.principals.create([
        { principalType: RoleMapping.USER,
          principalId: users[0].id
        }, { principalType: RoleMapping.USER,
          principalId: users[1].id
        }
    ], function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
  });

  // users[2].payment.create({
  //   amount: '20000',
  //   date: '1/1/2017'
  // }, function(err, payments) {
  //   if (err) throw err;
  //   console.log('Created payment:', payments);
  //
  // });
  //
  // users[1].payment.create([
  //   {amount: '1000', date: '1/1/2017'},
  //
  // ], function(err, payments) {
  //   if (err) throw err;
  //   console.log('Created payment:', payments);
  //
  // });

  users[0].study.create([
    {title: 'Funding to Research Trains', description: 'I want to do some research on making train transportation more energy efficient.', additionalinfo: 'I like trains and more people should be riding them.', fundingneeded: '50000'},

  ], function(err, studies) {
    if (err) throw err;

    console.log('Created studies:', studies);
  });

  users[1].study.create([
    {title: 'Lactose Inolerance and Probiotics', description: 'As a sufferer of lactose intollerance, I have a theory that probiotics may help improve the symptoms.', additionalinfo: 'I like trains and more people should be riding them.', fundingneeded: '80000'},
  ], function(err, studies) {
    if (err) throw err;

    console.log('Created studies:', studies);
  });



  });

  });
};
