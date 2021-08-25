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
        if (typeof(pokemon) !== 'object') {
            alert("Please add only an object!");
        }else{
            pokemonList.push(pokemon);
        }
        
    }

    //return all pokemon from pokemonList
    function getAll(){
        return pokemonList;
    }

    return {
        getAll: getAll,
        add: add
    }
})();

//writing the content from pokemonRepository using forEach() function
pokemonRepository.getAll().forEach(function(pokemon){
        
    let reaction = ""; //initialize var reation
    
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
    );
});