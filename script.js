import pobranyJson from "http://imiki.pl/cf/" assert { type: "json" };

console.log(pobranyJson.data[0].state.temperature);
