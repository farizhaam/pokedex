//wrapping pokemonList inside pokemonRepository to avoid global state (IIFE)
let pokemonRepository = (function(){
    //The Pokemon collection
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    //add a single pokemon to the pokemonList
    function add(pokemon){
        //make sure the new pokemon has these properties
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    //return all pokemon from pokemonList
    function getAll(){
        return pokemonList;
    }

    function addListItem(pokemon){
        //selecting the unordered list
        let myList = document.querySelector('.pokemon-list');

        //creating bullet list
        let listItem = document.createElement('li');

        //creating a button
        let button = document.createElement('button');

        //write the pokemon's name on the button
        button.innerText = pokemon.name;

        //creating class for the list as 'pokemon-panel'
        button.classList.add('pokemon-panel');

        //add click event to pokemon panel to display pokemon object on console log
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        });

        //append the button on the bullet list
        listItem.appendChild(button);

        //append the bullet list to unordered list
        myList.appendChild(listItem);
    }

    //showing the information of the selected pokemon on console log
    function showDetails(pokemon){
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    //load the list of Pokémon
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json(); //this returns promise
        }).then(function(json) {
            json.results.forEach(function(item){
                //get pokemon's name and details url when resolved
                let pokemon = {
                    name : item.name,
                    detailsUrl : item.url
                };
                add(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            
            //adding details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.type = details.types;
        }).catch(function(e) {
            console.error(e);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };


})();


//writing the content from pokemonRepository using forEach() function
pokemonRepository.loadList().then(function(){
    //now the data is loaded
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});