export class Comment {
    constructor(data) {
        this.description = data.description
        this.trainer = data.trainer
        // this.name = data.trainer.name
        // this. 
    }

    get commentsTemplate() {
        return `
    
        <small class="text-warning"><i>${this.trainer.name}</i></small>
        <h5>${this.description}</h5>
        
        `
    }
}