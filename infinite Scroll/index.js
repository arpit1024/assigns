const container = document.getElementById("container");

function loadData(val) {
  let i = 0;
  while (i < 25) {
    const div = document.createElement("div");
    div.textContent = `Masai School :: ${val}`;
    container.appendChild(div);
    i++;
    val++;
  }
  localStorage.setItem("datavalue", JSON.stringify(val));
}
loadData(1);
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    let val = JSON.parse(localStorage.getItem("datavalue"));
    loadData(+val);
  }
});
