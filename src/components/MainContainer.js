import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IdeaContainer from './IdeaContainer';
import GeneratorBar from './GeneratorBar';
import AddContent from './AddContent';

const MainContainer = ({ideaId, setCurrentIdeaId, setIdeasData}) => {




  return (
    <div id="main-content">
      <Switch>
        <Route path="/add-content">
          <AddContent />
        </Route>
        <Route path="/:ideaId" render={routeProps => 
          <IdeaContainer 
            ideaId={routeProps.match.params.ideaId} 
            setIdeasData={setIdeasData} 
            setCurrentIdeaId={setCurrentIdeaId}
          />
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
