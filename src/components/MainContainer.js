import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IdeaContainer from './IdeaContainer';
import GeneratorBar from './GeneratorBar';
import AddContent from './AddContent';

const MainContainer = ({ setCurrentIdeaId, setIdeasData}) => {

  return (
    <div id="main-content">
      <Switch>
        <Route path="/add-content">
          <AddContent />
        </Route>
        <Route path="/:ideaId" render={routeProps => 
          <>
            <GeneratorBar setIdeasData={setIdeasData} />
            <IdeaContainer 
              ideaId={routeProps.match.params.ideaId}
              setCurrentIdeaId={setCurrentIdeaId}
            />
          </>
        } />
        <Route path="/">
          <GeneratorBar setIdeasData={setIdeasData} />
          <p>Generate a new idea above, or select one from history on left.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

// TODO: consider refactoring routing to something like this:
// https://gist.github.com/jefflau/85ea8f071dc0ab81f61b0e8a7d9e5b23
