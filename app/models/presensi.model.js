module.exports = (sequelize, Sequelize) => {
    const Presensi = sequelize.define("presensi", {
      nama: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
    });
  
    return Presensi;
  };