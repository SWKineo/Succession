export default class Submission {
    constructor(article, version) {
        this.article = article
        this.version = version
        this.title = `Article ${article}.${version}`
        this.quality = version % 3
        this.potential = version % 3
        this.formalism = "No formalism"
        this.metaphor = [ 
            { text: "No", formalismRange: [0, 2] }, 
            { text: " "},
            { text: "metaphor", formalismRange: [3, 9] }
        ]
        this.metaphorFormalismMapping = [ [1, 2, 3], [1, 2, 2] ]
        this.body = [
            new Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "),
            new Content("magna aliqua.", [
                new Content("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "),
                new Content("commodo consequat.", [
                    new Content("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.") 
                ])
            ]),
            new Content(" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.")
        ]
        this.theorems = []
    }
}


export class Content {
    static idCounter = 0;

    // Constant
    static PARAGRAPH = 101

    constructor(text, expansion) {
        this.text = text
        this.expansion = expansion
        this.id = Content.idCounter++
    }
}