const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // -> 즉시 호출 방법
setInterval(getClock, 1000); //getClock()은 새로고침할때 한번 출력되는 반면 setInterval()은 매초 반복해서 출력한다.
