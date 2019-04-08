document.getElementById("devi").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='https://devi-lockwood.com/'>Devi Lockwood</a> is a multimedia journalist and current student in the Graduate Program in Science Writing at MIT. For four years before MIT, she traveled the world to document 1,001 voices on water and climate change. You can read her writing in The Washington Post, The New York Times, The Guardian, Slate, Bicycling Magazine, Yale Climate Connections, and elsewhere. In 2014, Devi graduated Phi Beta Kappa, summa cum laude from Harvard University, where she studied folklore and mythology. After MIT, Devi is starting a one-year fellowship at the New York Times Opinion desk.";
	document.getElementById("headshot").src = "assets/img/team_devi.jpg";
	document.getElementById("name").innerHTML = "Devi Lockwood";
})

document.getElementById("anna").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='http://annawchung.com/' target='_blank'>Anna Woorim Chung</a> is a digital media researcher and designer at the <a href='https://civic.mit.edu/'>MIT Center for Civic Media</a>. Her current research explores social media, algorithmic curation, and ethical design. Prior to MIT, she studied media studies and and computer science at Pomona College. Her other interests include cooking, skateboarding, napping, and making maps.";
	document.getElementById("headshot").src = "assets/img/team_anna.jpg";
	document.getElementById("name").innerHTML = "Anna Chung";
})

document.getElementById("samia").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "Samia's bio";
	document.getElementById("headshot").src = "assets/img/team_samia.jpg";
	document.getElementById("name").innerHTML = "Samia Bouzid";
})

document.getElementById("jeff").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "Jeff's bio";
	document.getElementById("headshot").src = "assets/img/team_jeff.jpg";
	document.getElementById("name").innerHTML = "Jeff Delviscio";
})