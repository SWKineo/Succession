export default class Attempt {
    constructor() {
        this.id = -1
        this.version = -1
        this.title = "No Title"
        this.formalism = "No formalism"
        this.metaphor = [ 
            { text: "No", formalismRange: [0, 2] }, 
            { text: " "},
            { text: "metaphor", formalismRange: [3, 9] }
        ]
        this.metaphorFormalismMapping = [ [1, 2, 3], [1, 2, 2] ]
        this.body = [
            new AttemptContent("First set of words "),
            new AttemptContent("expandable words", [ new AttemptContent("Expansion Text") ]),
            new AttemptContent(" second set of words")
        ]
        this.theorems = []
    }
}


export class AttemptContent {
    // CONSTANTS
    static PARAGRAPH = 101

    constructor(text, expansion) {
        this.text = text
        this.expansion = expansion
    }
}