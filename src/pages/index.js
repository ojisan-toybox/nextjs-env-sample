export default () => {
  console.log("<component> process.env.NODE_ENV: ", process.env.NODE_ENV);
  console.log(
    "<component> process.env.ORIGINAL_ENV: ",
    process.env.ORIGINAL_ENV
  );
  return <div>hello world!!</div>;
};

export const getServerSideProps = () => {
  console.log(
    "<getServerSideProps> process.env.NODE_ENV: ",
    process.env.NODE_ENV
  );
  console.log(
    "<getServerSideProps> process.env.ORIGINAL_ENV: ",
    process.env.ORIGINAL_ENV
  );
  return {};
};
