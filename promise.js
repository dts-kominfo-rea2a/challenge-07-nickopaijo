const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    let audienceIXX = await promiseTheaterIXX();
    let audienceVGC = await promiseTheaterVGC();

    let emotionalAudience = [...audienceIXX, ...audienceVGC];
    let totallyEmotional = emotionalAudience.filter(
      (emotionalResult) => emotionalResult.hasil === emotion
    ).length;

    return totallyEmotional;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
