// const x = 10;

// const funcation1 = () => {
//   const y = 11;
//   console.log(y);
// };

// const function2 = () => {
//   const e = 12;
//   console.log(e);
// };

const scopeChainA = () => {
  const b = 100;
  const scopeChainB = () => {
    console.log(b);
  };
  scopeChainB();
};

scopeChainA();
