import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
//ccon Browserrouter
// const App = () => {
//     return (
//         <div className="ui container">
//             <BrowserRouter history= {history}>
//                 <div>
//                     <Header></Header>
//                     <Route path="/" exact component={StreamList} />
//                     <Route path="/streams/new" component={StreamCreate} />
//                     <Route path="/streams/edit" exact component={StreamEdit} />
//                     <Route path="/streams/delete" exact component={StreamDelete} />
//                     <Route path="/streams/show" exact component={StreamShow} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

//Con Router
const App = () => {
    return (
        <div className="ui container">
            <Router history= {history}>
                <div>
                    <Header></Header>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;