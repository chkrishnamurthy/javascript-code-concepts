const eventKey = document.querySelector("#eventKey");
const keyCode = document.querySelector("#keyCode");

const eventCode = document.querySelector("#eventCode");

document.addEventListener("keydown", (e) => {
  eventKey.textContent = e.eventKey;
  keyCode.textContent = e.key;
  eventCode.textContent = e.eventCode;
  console.log("keyCode", e.keyCode);
  console.log("eventCode", e.code);
  console.log(e);
});
