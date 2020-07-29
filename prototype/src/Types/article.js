export default class ArticleVersion {
    constructor() {
        this.id = -1
        this.version = -1
        this.title = "No Title"
        this.formalism = "No formalism"
        this.metaphor = "No metaphor"
        this.formalismMetaphorMapping = [ [1, 2, 3], [1, 2, 2] ]
        this.body = [ new ArticleContents("Some text"), new ArticleContents(new ArticleContents("Other text")) ]
    }
}

class ArticleContents {
    constructor(contents) {
        if (contents instanceof String) {
            this.text = contents
            this.expansion = undefined
        } else {
            this.text = undefined
            this.expansion = contents
        }
    }

    getContents() {
        if (this.expansion === undefined)
            return this.text
        else
            return this.expansion
    }
}