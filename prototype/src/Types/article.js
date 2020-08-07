export default class Submission {
    // Constant
    static PARAGRAPH = 101
    
    constructor(article, version) {
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
            { 
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
                id: 0
            },
            { 
                text: "magna aliqua.", 
                expansion: [
                    { 
                        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
                        id: 2
                    },
                    {
                        text: "commodo consequat.",
                        expansion: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        id: 3
                    }
                ],
                id: 1
            },
            { 
                text: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
                id: 4
            }
        ]
        this.theorems = []
    }
}