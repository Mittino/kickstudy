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
    if (err) {
      console.log("seeding db error")
    } else {

    console.log('Created users:', users);

    //create first study
    Study.create([
      {title: 'Funding to Research Trains', description: 'I want to do some research on making train transportation more energy efficient.', additionalinfo: 'I like trains and more people should be riding them.', fundingneeded: '50000', researcherid: users[0].id},
      {title: 'Lactose Intolerance and Probiotics', description: 'As a sufferer of lactose intollerance, I have a theory that probiotics may help improve the symptoms.', additionalinfo: 'I like trains and more people should be riding them.', fundingneeded: '80000', researcherid: users[1].id}
    ], function(err, studies) {
      if (err) throw err;

      console.log('Created studies:', studies);

      Payment.create({
        amount: '20000',
        date: '1/1/2017',
        funderid: users[0].id,
        studyid: studies[1].id
      }, function(err, payments) {
        if (err) throw err;

        console.log('Created payment:', payments);

      });
    //create second payment
      Payment.create({
        amount: '1000',
        date: '1/1/2017',
        funderid: users[1].id,
        studyid: studies[0].id
      }, function(err, payments) {
        if (err) throw err;
        //return;
        console.log('Created payment:', payments);

      });
    });

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;
      //return;

      console.log('Created role:', role);

      //make anna an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[3].id
      }, function(err, principal) {
        if (err) throw err;
        //return;

        console.log('Created principal:', principal);
      });
    });

    //create standard role
    Role.create({
      name: 'standard'
    }, function(err, role) {
      if (err) throw err;
      //return;

      console.log('Created role:', role);

      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) throw err;
        //return;

      console.log('Created principal:', principal);
      });
    });

    //create researcher role
    Role.create({
      name: 'researcher'
    }, function(err, role) {
      if (err) throw err;
      //return;

      console.log('Created role:', role);

      role.principals.create([
        { principalType: RoleMapping.USER,
          principalId: users[0].id
        }, { principalType: RoleMapping.USER,
          principalId: users[1].id
        }
    ], function(err, principal) {
        if (err) throw err;
        console.log(err);
        //return;

        console.log('Created principal:', principal);
      });
    });
    }
  });
};
