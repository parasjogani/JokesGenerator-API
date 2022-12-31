const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5072ffe1a5mshd1c7e11176de4c3p16db0fjsna159fc4ded0a',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
const getRandomJoke = () => fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
.then(response => response.json())
.then((v) => {
    const joke = document.getElementById("joke")
    joke.innerText = v.body[0].setup + " , " + v.body[0].punchline
    
})
.catch(err => console.error(err));

// Access Button to get another joke

let jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click", getRandomJoke)