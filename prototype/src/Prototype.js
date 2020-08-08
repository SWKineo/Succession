import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ArticleView from './ArticleView'
import DevelopmentOverview from './Development/DevelopmentOverview'
import SubmissionDevelopment from './Development/SubmissionDevelopment'
import SubmissionCritique from './Development/SubmissionCritique'
import './Prototype.css'
import Article, { Submission, Content, Critique} from './Types/article'



{
// let article = {
//   id: 5,
//   name: "Integrals",
//   submissions: [
//       {
//           version: 1,
//           name: "First try",
//           ...new Submission(5, 1),
//           critiques: [
//               {
//                   id: 1,
//                   title: "Just one thing",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ 2, 3 ]
//               },
//               {
//                   id: 2,
//                   title: "Just two things",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ 4 ]
//               },
//               {
//                   id: 3,
//                   title: "Just three things",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ ]
//               },
//               {
//                   id: 4,
//                   title: "Just four things",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ ]
//               },
//           ]
//       },
//       {
//           version: 2,
//           name: "One thing fixed",
//           ...new Submission(5, 2),
//           critiques: [
//               {
//                   id: 1,
//                   title: "Just one thing",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ ]
//               }
//           ]
//       },
//       {
//           version: 3,
//           name: "One thing fixed another way",
//           ...new Submission(5, 3),
//           critiques: [
//               {
//                   id: 1,
//                   title: "Just one thing",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ ]
//               }
//           ]
//       },
//       {
//           version: 4,
//           name: "Two things fixed",
//           ...new Submission(5, 4),
//           critiques: [
//               {
//                   id: 1,
//                   title: "You missed a spot",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ 5 ]
//               }
//           ]
//       },
//       {
//           version: 5,
//           name: "Missed spot fixed",
//           ...new Submission(5, 5),
//           critiques: [
//               {
//                   id: 1,
//                   title: "Just one thing",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ ]
//               }
//           ]
//       },
//       {
//           version: 6,
//           name: "Another look",
//           ...new Submission(5, 6),
//           critiques: [
//               {
//                   id: 1,
//                   title: "One thing you could fix",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ 7 ]
//               }
//           ]
//       },
//       {
//           version: 7,
//           name: "A new angle",
//           ...new Submission(5, 7),
//           critiques: [
//               {
//                   id: 1,
//                   title: "One last thing",
//                   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//                   improvements: [ 8 ]
//               }
//           ]
//       },
//       {
//           version: 8,
//           name: "One last fix",
//           ...new Submission(5, 8),
//           critiques: [ ]
//       }
//   ],
//   testedSubmissions: [ 1, 3, 5 ],
//   untestedSubmissions: [ 2, 4, 6, 7, 8],
//   originalSubmissions: [ 1, 6 ]
// }
}

const article = Article.sampleArticle()



function Prototype(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/page/:article/work"
          render={(props) => (
            <DevelopmentOverview 
              article={article} 
              history={props.history}
              match={props.match}
            />
          )}
        />
        <Route
          path="/page/:article/version/:version/critique/:critique"
          render={(props) => (
            <SubmissionCritique 
              article={article} 
              history={props.history}
              match={props.match}
            />
          )}
        />
        <Route
          exact path="/page/:article/version/:version/work"
          render={(props) => (
            <SubmissionDevelopment 
              article={article} 
              history={props.history}
              match={props.match}
            />
          )}
        />
        <Route
          exact path="/page/:article/version/:version"
          render={(props) => (
            <ArticleView 
              article={article} 
              history={props.history}
              match={props.match}
            />
          )}
        />
      </Switch>
    </Router>
  )
}



export default Prototype
