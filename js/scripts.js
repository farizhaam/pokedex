//wrapping pokemonList inside pokemonRepository to avoid global state (IIFE)
let pokemonRepository = (function(){
    //The Pokemon collection
    let pokemonList = [
        {
            name: 'Bulbasaur', 
            height: 0.7, 
            types: ['grass', 'poison']
        },
        {
            name: 'Psyduck', 
            height: 0.8, 
            types: ['water']
        },
        {
            name: 'Snorlax', 
            height: 2.1, 
            types: ['normal']
        },
        {
            name: 'Gyarados', 
            height: 6.5, 
            types: ['water', 'flying']
        }
    ];

    //add a single pokemon to the pokemonList
    function add(pokemon){
        //make sure the new pokemon has these properties
        if (typeof(pokemon) == 'object' && Object.keys(pokemon).includes('name')
        && Object.keys(pokemon).includes('height') && Object.keys(pokemon).includes('type')) {
            pokemonList.push(pokemon);
        }
        
    }

    //return all pokemon from pokemonList
    function getAll(){
        return pokemonList;
    }

    function addListItem(pokemon){
        //selecting the unordered list
        let myList = document.querySelector('ul');

        //creating bullet list
        let listItem = document.createElement('li');

        //creating a button
        let button = document.createElement('button');

        //write the pokemon's name on the button
        button.innerText = pokemon.name;

        //creating class for the list as 'pokemon-panel'
        button.classList.add('pokemon-panel');

        //add click event to pokemon panel to display pokemon object on console log
        button.addEventListener('click', function(pokemon){
            showDetails(pokemon);
        });

        //append the button on the bullet list
        listItem.appendChild(button);

        //append the bullet list to unordered list
        myList.appendChild(listItem);
    }

    //showing the information of the selected pokemon on console log
    function showDetails(pokemon){
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    }
})();

//writing the content from pokemonRepository using forEach() function
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
/*     let reaction = ""; //initialize var reation
    
    if (pokemon.height < 1) {
        reaction = "What a cutie!"; //reaction when the pokemon.height is less than 1 m
    } else if (pokemon.height > 1 && pokemon.height <= 5){
        reaction = "This one is big."; //reaction when the pokemon.height is between 1 and 5 m
    } else {
        reaction = "What an enormous pokemon!"; //reaction if the pokemon.height is higher than 5 m
    }

    document.write(
        pokemon.name + ' (height: ' + pokemon.height + ') - ' + reaction + '<br>'
        //printing to HTML the pokemon's name and their height as well as the raction according to their height
    ); */
});