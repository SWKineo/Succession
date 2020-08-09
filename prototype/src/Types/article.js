export default class Article {
    // Constant
    static PARAGRAPH = 101

    // Counters
    static NEXT_ARTICLE_ID = 0;
    static NEXT_SUBMISSION_VERSION = 0;
    static NEXT_CRITIQUE_ID = 0;
    
    constructor(id, name, submissions, originalSubmissions, testedSubmissions, untestedSubmissions) {
        if (id === null)
            this.id = Article.NEXT_ARTICLE_ID++
        else {
            this.id = id
            if (id > Article.NEXT_ARTICLE_ID)
                Article.NEXT_ARTICLE_ID = id + 1
        }
        
        this.name = name
        this.submissions = submissions
        this.originalSubmissions = originalSubmissions
        this.testedSubmissions = testedSubmissions
        this.untestedSubmissions = untestedSubmissions
    }

    getSubmission(version) {
        for (let i = 0; i < this.submissions.length; i++) {
            if (this.submissions[i].version == version)
                return this.submissions[i]
        }
        
        return null
    }

    addOriginalSubmission(newSubmission) {
        this.submissions.push(newSubmission)
        this.untestedSubmissions.push(newSubmission)
        this.originalSubmissions.push(newSubmission.version)

        return this
    }

    addImprovementToCritique(improvement, critique) {    
        critique._internalAddImprovement(improvement.version)
        this._internalAddImprovement(improvement)

        return this
    }

    _internalAddImprovement(improvement) {
        this.submissions.push(improvement)
        this.untestedSubmissions.push(improvement)
    }

    static sampleArticle () {
        return new Article(
            5,
            "Integrals",
            [
                new Submission(
                    1,
                    "First try",
                    Content.sampleContent(1),
                    [
                        new Critique(
                        1,
                            "Just one thing",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 2, 3 ]
                        ),
                        new Critique(
                            2,"Just two things",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 4 ]
                        ),
                        new Critique(
                            3,
                            "Just three things",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ ]
                        ),
                        new Critique(
                            4,
                            "Just four things",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ ]
                        ),
                    ],
                    1.5,
                    2.0
                ),
                new Submission(
                    2,
                    "One thing fixed",
                    Content.sampleContent(2),
                    [
                        new Critique(
                            1,
                            "Just one thing",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ ]
                        )
                    ],
                    1.7,
                    2.1
                ),
                new Submission(
                    3,
                    "One thing fixed another way",
                    Content.sampleContent(3),
                    [
                        new Critique(
                            1,
                            "Just one thing",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        )
                    ],
                    1.9,
                    2.3
                ),
                new Submission(
                    4,
                    "Two things fixed",
                    Content.sampleContent(4),
                    [
                        new Critique(
                            1,
                            "You missed a spot",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 5 ]
                        )
                    ],
                    2.4,
                    2.3
                ),
                new Submission(
                    5,
                    "Missed spot fixed",
                    Content.sampleContent(5),
                    [
                        new Critique(
                            1,
                            "Just one thing",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ ]
                        )   
                    ],
                    2.6,
                    2.4
                ),
                new Submission(
                    6,
                    "Another look",
                    Content.sampleContent(6),
                    [
                        new Critique(
                            1,
                            "One thing you could fix",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 7 ]
                        )
                    ],
                    1.5,
                    2.5
                ),
                new Submission(
                    7,
                    "A new angle",
                    Content.sampleContent(7),
                    [
                        new Critique(
                            1,
                            "One last thing",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 8 ]
                        )
                    ],
                    2.0,
                    2.7
                ),
                new Submission(
                    8,
                    "Another look",
                    Content.sampleContent(8),
                    [
                        new Critique(
                            1,
                            "One thing you could fix",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            [ 7 ]
                        )
                    ],
                    1.5,
                    2.0
                ),
                new Submission(
                    9,
                    "One last fix",
                    Content.sampleContent(9),
                    [],
                    1.0,
                    2.5
                )
            ],
            [ 1, 3, 5 ],
            [ 2, 4, 6, 7, 8],
            [ 1, 6 ]
        )
    }
}

export class Submission {
    constructor(version, name, content, critiques, quality, potential) {
        if (version === null)
            this.version = Article.NEXT_SUBMISSION_VERSION++
        else {
            this.version = version
            if (version > Article.NEXT_SUBMISSION_VERSION)
                Article.NEXT_SUBMISSION_VERSION = version + 1
        }

        this.name = name
        this.quality = quality
        this.potential = potential
        this.critiques = critiques
        this.content = content
    }

    getCritique(critiqueId) {
        for (let i = 0; i < this.critiques.length; i++) {
            if (this.critiques[i].id == critiqueId)
                return this.critiques[i]
        }

        return null
    }

    addCritique(newCritique) {
        this.critiques.push(newCritique)

        return this
    }

    static sampleSubmission() {
        return new Submission(
            42,
            "Sample submission",
            2.5,
            1.5,
            [ Critique.sampleCritique() ],
            Content.sampleContent()
        )
    }
}

export class Content {
    constructor(title, formalism, metaphor, metaphorFormalismMapping, body, theorems) {
        this.title = title
        this.formalism = formalism
        this.metaphor = metaphor
        this.metaphorFormalismMapping = metaphorFormalismMapping
        this.body = body
        this.theorems = theorems
    }

    static sampleContent(version) {
        return new Content(
            `Sample Article ${version}`,
            "No formalism",
            [ 
                { text: "No", formalismRange: [0, 2] }, 
                { text: " "},
                { text: "metaphor", formalismRange: [3, 9] }
            ],
            [ [1, 2, 3], [1, 2, 2] ],
            [
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
            ],
            []
        )
    }
}

export class Critique {
    constructor(id, title, comment, improvements) {
        if (id === null)
            this.id = Article.NEXT_CRITIQUE_ID++
        else {
            this.id = id
            if (id >= Article.NEXT_CRITIQUE_ID)
                Article.NEXT_CRITIQUE_ID = id + 1
        }

        this.title = title
        this.comment = comment
        this.improvements = improvements
    }

    addImprovementToArticle(article, improvementSubmission) {
        article._internalAddImprovement(improvementSubmission)
        this._internalAddImprovement(improvementSubmission.version)

        return this
    }

    _internalAddImprovement(improvementVersion) {
        this.improvements.push(improvementVersion)
    }

    static sampleCritique() {
        return new Critique(
            42, 
            "Sample critique", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            []
        )
    }
}