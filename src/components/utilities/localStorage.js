// const addToLocalStorage = (gotTime) => {
//   let storageTime;
//   let storedCart = localStorage.getItem("times");
//   if (storedCart) {
//     storageTime = JSON.parse(storedCart);
//   } else {
//     storageTime = [];
//   }
//   const time = storageTime[gotTime];
//   if (time) {
//     storageTime[gotTime] = time + gotTime;
//   } else {
//     storageTime[gotTime] = gotTime;
//   }
//   localStorage.setItem("times", JSON.stringify(storageTime));
// };

// export default addToLocalStorage;
