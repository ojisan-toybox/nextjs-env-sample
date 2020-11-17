module.exports = {
  env: {
    ORIGINAL_ENV_OVERCONFIG: process.env.ORIGINAL_ENV_OVERCONFIG,
  },
};

console.log(
  "<getServerSideProps> process.env.NEXT_PUBLIC_ORIGINAL_ENV: ",
  process.env.NEXT_PUBLIC_ORIGINAL_ENV
);
