document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center"; // horizontal center
document.body.style.alignItems = "center"; // vertical center
document.body.style.height = "100vh"; // full viewport
document.body.style.backgroundColor = "lightblue";
document.body.style.gap = "20px";
document.body.style.margin = "0"; // remove default margin

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const output = document.getElementById("weatherOutput");

  const apiKey = "d42af82156d531a3e384b6d0993e4b0e"; // Replace with your real key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    output.innerText = "Loading...";

    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const temp = data.main.temp;
    const desc = data.weather[0].description;

    output.innerHTML = `
      <h3>Weather in ${city}</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>🌥️ Description: ${desc}</p>
    `;
  } catch (error) {
    output.innerText = "❌ Error: " + error.message;
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} ${this.age}`);
  }
}

const zala = new Person("Zala", 22);
zala.greet();

// // document.body.style.display = "flex";
// // document.body.style.flexDirection = "column";
// // document.body.style.justifyContent = "center"; // horizontal center
// // document.body.style.alignItems = "center"; // vertical center
// // document.body.style.height = "100vh"; // full viewport
// // document.body.style.backgroundColor = "lightblue";
// // document.body.style.gap = "20px";
// // document.body.style.margin = "0"; // remove default margin

// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
//   const output = document.getElementById("weatherOutput");

//   const apiKey = "d42af82156d531a3e384b6d0993e4b0e"; // Replace with your real key
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {
//     output.innerText = "Loading...";

//     const response = await fetch(url);
//     if (!response.ok) throw new Error("City not found");

//     const data = await response.json();

//     const temp = data.main.temp;
//     const desc = data.weather[0].description;

//     output.innerHTML = `
//       <h3>Weather in ${city}</h3>
//       <p>🌡️ Temperature: ${temp}°C</p>
//       <p>🌥️ Description: ${desc}</p>
//     `;
//   } catch (error) {
//     output.innerText = "❌ Error: " + error.message;
//   }
// }
