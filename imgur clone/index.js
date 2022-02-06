let search = document.getElementById("srchINPUT");

async function fetchData(moviename, type) {
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=4a00954&s=${moviename}`
    );
    let data = await res.json();
    data = data.Search;
    switch (type) {
      case "searchInput":
        let show = document.getElementById("searchShow");
        show.innerHTML = "";
        data.forEach((ele) => {
          let title = document.createElement("div");
          title.textContent = ele.Title;
          show.appendChild(title);
        });
        break;
      case "searchClick":
        let cont = document.getElementById("topImgss");
        cont.innerHTML = "";
        data.forEach((ele) => {
          let div = document.createElement("div");
          let image = document.createElement("img");
          image.src = ele.Poster;
          div.appendChild(image);
          console.log(ele);
          for (const key in ele) {
            if (key !== "Poster") {
              let neDiv = document.createElement("div");
              neDiv.textContent = key + " => " + ele[key];
              neDiv.style.padding = "5px";
              neDiv.style.textAlign = "center";
              div.appendChild(neDiv);
            }
          }
          cont.appendChild(div);
        });
      case "tags":
        let tagsCont = document.getElementById("tags_cont");
        data.forEach((ele) => {
          let image = document.createElement("img");
          image.src = ele.Poster;
          tagsCont.appendChild(image);
        });
      default:
        break;
    }
  } catch (err) {
    console.log(err);
  }
}

function getInput(e) {
  let { value } = e.target;
  debounce(fetchData(value, "searchInput"), 1000);
}
const debounce = (func, wait) => {
  let timeOut;
  return (...args) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => func(...args), wait);
  };
};
fetchData("thor", "searchClick");
fetchData("thor", "tags");
// function searchFunction() {
//   let { value } = search;
//   fetchData(value, "searchClick");
// }
document.getElementById("srchINPUT").addEventListener(
  "keydown",
  debounce((e) => {
    fetchData(e.target.value, "searchInput");
  }, 1000)
);

const throttle = (func, wait) => {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= wait) {
      func(...args);
      lastTime = now;
    }
  };
};
document.getElementById("srch_By-Click").addEventListener(
  "click",
  throttle((e) => {
    fetchData(search.value, "searchClick");
  }, 1000)
);
//https://www.omdbapi.com/?i=tt3896198&apikey=4a00954&s=thor
