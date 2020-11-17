module.exports = {
  env: {
    ORIGINAL_ENV_OVERCONFIG: process.env.ORIGINAL_ENV_OVERCONFIG,
  },
};

// console.log("<next.config.js> process.env:", process.env);
console.log("<next.config.js> process.env.NODE_ENV:", process.env.NODE_ENV);
console.log(
  "<next.config.js> process.env.ORIGINAL_ENV: ",
  process.env.ORIGINAL_ENV
);
console.log(
  "<next.config.js> process.env.ORIGINAL_ENV_OVERCONFIG: ",
  process.env.ORIGINAL_ENV_OVERCONFIG
);
console.log(
  "<next.config.js> process.env.ORIGINAL_ENV_OVERCONFIG: ",
  process.env.ORIGINAL_ENV_OVERCONFIG
);
