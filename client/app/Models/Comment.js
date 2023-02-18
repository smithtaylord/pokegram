export class Comment {
    constructor(data) {
        this.description = data.description
        this.trainer = data.trainer  
        // this.name = data.trainer.name
        // this. 
    }

    get commentsTemplate() {
        return `
        <h6>${this.trainer.name}</h6>
        <h3>${this.description}</h3>
        `
    }
}