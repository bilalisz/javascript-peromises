console.log("I am working!");
// const getUserListOne = () => {
//   return new Promise((reslove, reject) => {
//     fetch("services/MOCK_DATA_3.json")
//       .then((res) => res.json())
//       .then((data) => reslove(data))
//       .then((err) => reject(err));
//   });
// };
let array = [];

// const getUserList = (url) => {
//   // let res = await fetch(url);
//   // let result = await res.json();
//   // console.log(result);
//   // return result;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       array = data;
//       console.log(array);
//     });
// };

// const loginUser = (email, password, callback) => {
//   setTimeout(() => {
//     console.log("I am working dud... setTimeOut");
//     callback({ userEmail: email });
//   }, 1000);
// };

// const videoDetails = (callback) => {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 3000);
// };

// const videoTitle = (title, callback) => {
//   setTimeout(() => {
//     callback({ V_Title: title });
//   }, 5000);
// };

// console.log("====================================");

// const user = loginUser("bilal@gmail.com", null, (user) => {
//   console.log(user);
//   videoDetails((video) => console.log(video));
//   videoTitle("my Video", (title) => console.log(title));
// });
// console.log("====================================");
// videoTitle("my Video", (title) => console.log(title));

// curring
