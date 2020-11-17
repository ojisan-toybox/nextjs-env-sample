export default () => {
  console.log(
    "<component> process.env.NEXT_PUBLIC_ORIGINAL_ENV: ",
    process.env.NEXT_PUBLIC_ORIGINAL_ENV
  );
  return <div>hello world!!</div>;
};

export const getServerSideProps = () => {
  console.log(
    "<getServerSideProps> process.env.NEXT_PUBLIC_ORIGINAL_ENV: ",
    process.env.NEXT_PUBLIC_ORIGINAL_ENV
  );
  return {};
};
