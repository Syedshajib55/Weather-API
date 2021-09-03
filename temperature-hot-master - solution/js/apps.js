const API_KEY = `856c4f3c1109288319dd9bce51aa9015`;
const searchTemp = () => {
	const city = document.getElementById('city_name').value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	
	fetch(url)
	.then(res => res.json())
	.then(data => displayTemperature(data))

}
const setInnerText = (id,text) => {
	document.getElementById(id).innerText = text;
}
const displayTemperature = temp => {
	setInnerText('city',temp.name);
	setInnerText('temperature',temp.main.temp)
	setInnerText('condition',temp.weather[0].main)
	//set weather icon
	const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
	const imgIcon = document.getElementById('weather-icon');
	imgIcon.setAttribute('src',url);

}