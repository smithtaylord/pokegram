export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.isStarter = data.isStarter
    this.voteCount = data.voteCount || 0
  }


  get PokemonCardsTemplate() {
    return `
        <div class="col-12 col-md-3 p-3  mt-2 pokemonCard mb-2 bg-light">
        <div>
        <p class="fs-4 fw-bold text-primary">
          ${this.name}
        </p>
      <div class="cardImgBorder d-flex justify-content-center">
        <img data-bs-toggle="modal" data-bs-target="#pokemonModal" type="button" onclick="app.pokemonsController.setActivePokemon('${this.id}')"class=" p-2 img-fluid pokeimg"
          src="${this.imgUrl}"
          alt="${this.name}">
      </div>
          <div class="d-flex fs-4 py-3 text-primary justify-content-around">
              <i type="button" onclick="app.pokemonsController.addVoteToPokemon('${this.id}')" class=" mdi mdi-chevron-up-box-outline" ></i>
              <p>${this.voteCount}</p>
              <i class="${this.isStarter ? 'mdi mdi-decagram-outline' : ''} "></i>
        </div>
        </div>
        </div>
        `
  }

  get activePokemonTemplate() {
    return `
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">${this.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <img class="img-fluid" src="${this.imgUrl}" alt="">
              </div>
              <div class="col-6" id="pokemonComments">
                <h3>Comments and stuff</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <h3>Votes ${this.voteCount}</h3>
                <h3>Stats</h3>
                <h3>Stats</h3>
              </div>
              <div class="col-6">
                <h4>
                <form onsubmit="app.pokemonsController.createComment()">
                  <div>
                  <label for="comment" class="form-label"></label>
                  <input type="text" class="form-control" id="description" name="description" placeholder="Enter Comment Here">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="app.pokemonsController.deletePokemon('${this.id}')"><i class="mdi mdi-delete-outline fs-3"></i></button>
        </div>
    `
  }
}