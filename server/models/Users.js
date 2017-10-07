module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    googleId: DataTypes.STRING
  });
  return Users;
};
