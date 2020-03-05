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
      burgerToppings: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      upVotes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      downVotes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
  
    return Burger;
  };