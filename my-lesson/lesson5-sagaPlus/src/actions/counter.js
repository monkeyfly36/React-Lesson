
// export const add = () => {
//   return {
//     type: 'add'
//   }
// }

const actionCounter = [
  'add',
  'addAsync',
  'reduce',
].reduce((pre, cur) => (
  {
    ...pre,
    [cur]: (payload) => ({
      type: cur,
      payload,
    }),
  }
), {})
console.log('actionCounter', actionCounter)

export default actionCounter;
