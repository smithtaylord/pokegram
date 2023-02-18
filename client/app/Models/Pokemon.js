export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.isStarter = data.isStarter
    this.voteCount = data.voteCount
  }


  get PokemonCardsTemplate() {
    return `
        <div class="col-12 col-md-3 p-3  mt-2 pokemonCard mb-2 bg-light">
        <div>
        <p class="fs-4 fw-bold text-primary">
          ${this.name}
        </p>
      <div class="cardImgBorder">
        <img type="button" onclick="app.pokemonsController.setActivePokemon('${this.id}')"class="img-fluid pokeimg"
          src="${this.imgUrl}"
          alt="${this.name}">
      </div>
          <div class="d-flex fs-2 text-primary justify-content-around">
              <i type="button" class=" mdi mdi-chevron-up-box-outline" ></i>
              <p>${this.voteCount}</p>
              <i class="${this.isStarter ? 'mdi mdi-decagram-outline' : ''} "></i>
        </div>
        </div>
        </div>
        `
  }
}