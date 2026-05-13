const useBaseUrl = () => {
  return {
    b2b: process.env.NEXT_PUBLIC_B2B,
    b2c: process.env.NEXT_PUBLIC_B2C,
  };
};

export default useBaseUrl