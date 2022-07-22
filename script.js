const name1Id = document.getElementById("name1");
const name2Id = document.getElementById("name2");
const name3Id = document.getElementById("name3");
const name4Id = document.getElementById("name4");

name1Id.style.cssText = `background: radial-gradient(black, blue, green);
border: solid black 1px;
border-radius:50%;
width:100px;
height:100px;`;
name2Id.innerHTML = `<ul> <li>Maor Malianker</li>
<li>0549802786</li>
<li>Ramle</li>
<li>Male</li>
</ul>`;
const car = {
  title: "ferari",
  price: 300_000,
  hand: 1,
  km: 150_407,
  year: 2019,
};
name3Id.innerHTML =
  `<div class="card">
<div class="card-header">` +
  car.title +
  `
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">` +
  `car hand :` +
  car.hand +
  `</li>
  <li class="list-group-item">` +
  `price : ` +
  car.price +
  `</li>
  <li class="list-group-item">` +
  `distance : ` +
  car.km +
  `</li>
  <li class="list-group-item">` +
  `year : ` +
  car.year +
  `</li>
</ul>
</div>`;
name3Id.style.cssText = `width : 200px`;
name4Id.className = `bg-danger`;
