import { createHistory } from 'history';
import ReactGA from 'react-ga';

const trackingId = 'UA-167810877-1';
ReactGA.initialize(trackingId, {
  debug: true,
});

const history = createHistory();
history.listen((location) => {
  ReactGA.pageview(location.pathname);
});

// workaround for initial visit
if (
  window.performance &&
  performance.navigation.type === performance.navigation.TYPE_NAVIGATE
) {
  ReactGA.pageview('/');
}

export default history;
