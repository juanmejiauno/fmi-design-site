import ReactGA from 'react-ga';


const GA_TRACKING_CODE = process.env.gaTrackingCode;
const notProduction = process.env.NODE_ENV !== 'production';
const notTesting = process.env.NODE_ENV !== 'test';

if (notTesting && typeof window !== 'undefined') {
  ReactGA.initialize(GA_TRACKING_CODE, { debug: notProduction });
  if (notProduction) ReactGA.set({ sendHitTask: null });
}

/***********************************
  Tracking Functions
***********************************/

export function sendPageview() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export function sendLoginEvent() {
  ReactGA.event({
    category: 'User',
    action: 'Logged In',
  });
}

export function sendLogoutEvent() {
  ReactGA.event({
    category: 'User',
    action: 'Logged Out',
  });
}
