module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create([
    {username: 'John', email: 'john@doe.com', password: 'password', firstname: 'John', lastname:"Johnlastname", nickname: 'johnnickname'},
    {username: 'Jane', email: 'jane@doe.com', password: 'password', firstname:'Jane', lastname: 'JaneLastName', nickname: 'JaneNickname'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make jane an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });
};
