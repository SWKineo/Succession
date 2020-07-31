export default class ArticleAttempt {
    constructor() {
        this.id = -1
        this.version = -1
        this.title = "No Title"
        this.formalism = "No formalism"
        this.metaphor = "No metaphor"
        this.formalismMetaphorMapping = [ [1, 2, 3], [1, 2, 2] ]
        this.body = [
            new AttemptContent("First set of words "),
            new AttemptContent("expandable words", [ new AttemptContent("Expansion Text") ]),
            new AttemptContent(" second set of words")
        ]
        this.theorems = []
    }
}


class AttemptContent {

    constructor(text, expansion) {
        this.text = text
        this.expansion = expansion
    }
}