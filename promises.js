const url1 = "https://jsonplaceholder.typicode.com/todos";
const url2 = "https://jsonplaceholder.typicode.com/comments";
const url3 = "https://jsonplaceholder.typicode.com/not-found";

// method for Sequential calls
const getApiDataInSequential = (url1, url2, url3) => {
  return new Promise((reslove, reject) => {
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reslove(data);

        fetch(url2)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            reslove(data);
            fetch(url3)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                reslove(data);
              })
              .catch((err) => {
                console.log(err.message);
                reject(err);
              });
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      })
      .catch((err) => {
        console.log(err.message);
        reject(err);
      });
  });
};

getApiDataInSequential(url1, url3, url2);
// getApiDataParallel(url1);
// getApiDataParallel(url2);
var todos, comments;

// method for Parallel Calls
Promise.all([fetch(url1), fetch(url2)])
  .then((ress) => {
    return Promise.all(ress.map((res) => res.json()));
  })
  .then((data) => {
    // console.log("new data", data);
    todos = data[0];
    comments = data[1];
    // let div = document.getElementById("main-div");
    // let ul = document.getElementById("ul");
    // let li = document.createElement("li");
    // li.innerText = JSON.stringify(data[0]);
    // ul.appendChild(li);
    // div.appendChild(ul);
    // console.log(div);
    // div.appendChild("body");
  })
  .catch((err) => console.log(err.message));

setTimeout(() => {
  console.log("Todos", todos);
  console.log("Comments", comments);
}, 3000);
