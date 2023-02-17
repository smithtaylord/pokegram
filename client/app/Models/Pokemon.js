export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.isStarter = data.isStarter
    }


    get PokemonCardsTemplate() {
        return `
        <div class="col-3">
        <div class="p-5  mt-2 pokemonCard mb-2 bg-light">
        <img class="img-fluid pokeimg"
          src="${this.imgUrl}"
          alt="${this.name}">
        <div>
          <div class="d-flex fs-2 text-primary justify-content-around">

            <p>
              [VOTES]
            </p>
            <p>
              ${this.name}
            </p>
          </div>
          <div class="d-flex fs-1 justify-content-around pb-3">
            <i type="button" class=" mdi mdi-chevron-up-box-outline" >

            </i>
            <div><i class="mdi${this.isStarter ? 'mdi-decagram-outline' : ''} "></i></div>
          </div>
        </div>
        </div>
        </div>
        `
    }
}