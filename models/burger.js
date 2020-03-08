module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define("Burger", {
      burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      burgerBread: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      burgerMeat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      burgerCheese:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      burgerDesc: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      upVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      downVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      }
    });
  
    return Burger;
  };