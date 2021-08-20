//The Pokemon collection
pokemonList = [
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

//the loop intitates from 0, iterates until thge length of pokemonList, add +1 after each loop
for (let i = 0; i < pokemonList.length; i++) {
    
    let reaction = ""; //initialize var reation
    let pokemonHeight = pokemonList[i].height; //assigning value pokemonList.height into var pokemonHeight
    
    if (pokemonHeight < 1) {
        reaction = "What a cutie!"; //reaction when the pokemonHeight is less than 1 m
    } else if (pokemonHeight > 1 && pokemonHeight <= 5){
        reaction = "This one is big."; //reaction when the pokemonHeight is between 1 and 5 m
    } else {
        reaction = "What an enormous pokemon!"; //reaction if the pokemonHeight is higher than 5 m
    }
    document.write(
        pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - ' + reaction + '<br>'
        //printing to HTML the pokemon's name and their height as well as the raction according to their height
    );

}