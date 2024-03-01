const searchButton = document.getElementById("b-search")
searchButton.onclick = async function () {
    const searchInput = document.getElementById("search");
    let pokemonName = searchInput.value;
    if (!pokemonName) {
        return;
    }
    pokemonName = pokemonName.toLowerCase();
    try{
        console.log(pokemonName);
 const pokemon = await listPokemonByName(pokemonName)
 console.log(pokemonName);
 const card = document.getElementById('card')
 card.innerHTML = `
    <article style=display: flex; flex-direction: column; align-itens: center; >
        <img width="200" src="${pokemon.sprites.front_default}" alt="pokemon"/>
        <h2>${pokemon.name} - ${pokemon.order}</h2>
        <p>Number ${pokemon.order}</p>
    </article>
 `;
    } catch (error){
        const card = document.getElementById('card')
 card.innerHTML = `
    <article>
        Not Found
    </article>`
    }

 searchInput.value = "";

}

async function listPokemonByName(pokemonName) {
    // await 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: "GET"
    });
    const pokemon = await response.json();
    return pokemon;
}



