export default class ArticleAttempt {
    constructor() {
        this.id = -1
        this.version = -1
        this.title = "No Title"
        this.formalism = "No formalism"
        this.metaphor = "No metaphor"
        this.formalismMetaphorMapping = [ [1, 2, 3], [1, 2, 2] ]
        this.body = [
            new AttemptContents("First set of words "),
            new AttemptContents("expandable words", new AttemptContents("Expansion Text")),
            new AttemptContents(" second set of words")
        ]
        this.theorems = []
    }
}


class AttemptContents {

    constructor(text, expansion) {
        this.text = text
        this.expansion = expansion
    }
}