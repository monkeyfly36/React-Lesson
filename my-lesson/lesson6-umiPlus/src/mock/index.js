export const getListReq = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log('执行完成');
      resolve({name: 'b'});
    }, 1000);
  })
}