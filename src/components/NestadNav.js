import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const Footer = () => <div>Footer</div>;
const ArtistInfo = () => <div>ArtistInfo</div>;
const ArtistMedia = () => <div>ArtistMedia</div>;
const ArtistLineup = () => <div>ArtistLineUp</div>;
const NotFound = () => <div>NotFound</div>;
//const { BrowserRouter, Switch, Route, Link, withRouter } = ReactRouterDOM;

let Router = BrowserRouter;

class ArtistProfilePageNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div className="ArtistProfilePage">
        <ArtistInfo />

        <Link to={`${match.url}`}>Artist Media</Link>
        <Link to={`${match.url}/lineup`}>Line-up</Link>
        <Link to={`${match.url}/gigs`}>Gigs</Link>
        <Switch>
          <Route exact path={`${match.url}`} component={ArtistMedia} />
          <Route path={`${match.url}/lineup`} component={ArtistLineup} />
        </Switch>
      </div>
    );
  }
}

const renderProfile = (user, id, type, match) => {
  if (1 || type === "artist") {
    return <ArtistProfilePageNew id={id} match={match} />;
  } else {
    return "bla";
  }
};

const Profile = ({ loading, user, id, type, match }) => (
  <div>{!loading && renderProfile(user, id, type, match)}</div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/u/22">Test user</Link>
        <Switch>
          <Route path="/u/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


