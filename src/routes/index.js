import { applyRouterMiddleware, browserHistory } from 'react-router';
import { createOnEnter } from 'lib/route-data';
import { useScroll } from 'react-router-scroll';

import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';

import App from 'routes/App';
import AboutIndex from 'routes/AboutIndex';
import AboutCareers from 'routes/AboutCareers';
import AboutCulture from 'routes/AboutCulture';
import BasicPage from 'routes/BasicPage';
import BlogArticle from 'routes/BlogArticle';
import BlogIndex from 'routes/BlogIndex';
import CategoryPage from 'routes/CategoryPage';
import Contact from 'routes/Contact';
import ErrorPage from 'routes/ErrorPage';
import GenomicTestingIndex from 'routes/GenomicTestingIndex';
import GenomicTestingOrder from 'routes/GenomicTestingOrder';
import GenomicTestingProduct from 'routes/GenomicTestingProduct';
import Home from 'routes/Home';
import PagesIndex from 'routes/PagesIndex';
import PartnershipsBiopharma from 'routes/PartnershipsBiopharma';
import PartnershipsIndex from 'routes/PartnershipsIndex';
import PartnershipsInsightsProduct from 'routes/PartnershipsInsightsProduct';
import PartnershipsInstitutions from 'routes/PartnershipsInstitutions';
import PartnershipsTrialsProduct from 'routes/PartnershipsTrialsProduct';
import Styleguide from 'routes/Styleguide';
import BrandArchitecture from 'routes/StrategyBrandArchitecture';
import CorporateLogos from 'routes/CorporateLogos';
import ProductLogos from 'routes/ProductLogos';

function shouldUpdateScroll(prev, next) {
  return (prev && prev.location.pathname !== next.location.pathname)
    || (next.location.hash !== '');
}

function Routes(client, onUpdate) {
  const addDataToRoute = createOnEnter(client);
  return (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll(shouldUpdateScroll))} onUpdate={onUpdate}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={addDataToRoute} />

        <Route path="style-guide" component={Styleguide} />

        <Route path="about">
          <IndexRoute component={AboutIndex} onEnter={addDataToRoute} />
          <Route path="careers" component={AboutCareers} onEnter={addDataToRoute} />
          <Route path="our-culture" component={AboutCulture} onEnter={addDataToRoute} />
        </Route>

        <Route path="blog">
          <IndexRoute component={BlogIndex} onEnter={addDataToRoute} />
          <Route path="page/:pageNum" component={BlogIndex} onEnter={addDataToRoute} />
          <Route path=":slug" component={BlogArticle} onEnter={addDataToRoute} />
          <Route path="topic/:slug" component={CategoryPage} onEnter={addDataToRoute} />
        </Route>

        <Route path="contact" component={Contact} onEnter={addDataToRoute} />

        <Route path="genomic-testing">
          <IndexRoute component={GenomicTestingIndex} onEnter={addDataToRoute} />
          <Route path="order" component={GenomicTestingOrder} onEnter={addDataToRoute} />
          <Route path=":slug" component={GenomicTestingProduct} onEnter={addDataToRoute} />
        </Route>

        <Route path="insights-and-partnerships">
          <IndexRoute component={PartnershipsIndex} onEnter={addDataToRoute} />
          <Route path="biopharma-partnerships" component={PartnershipsBiopharma} onEnter={addDataToRoute} />
          <Route path="institutional-partnerships" component={PartnershipsInstitutions} onEnter={addDataToRoute} />
          <Route path="foundation-smarttrials" component={PartnershipsTrialsProduct} onEnter={addDataToRoute} />
          <Route path="foundation-insights" component={PartnershipsInsightsProduct} onEnter={addDataToRoute} />
        </Route>

        <Route path="pages">
          <IndexRoute component={PagesIndex} onEnter={addDataToRoute} />
          <Route path=":slug" component={BasicPage} onEnter={addDataToRoute} />
        </Route>

        <Route path="strategy">
          <Route path="design-principles" component={AboutCareers} />
          <Route path="customer-insights" component={AboutCulture} />
          <Route path="brand-architecture" component={BrandArchitecture} />
        </Route>

        <Route path="guidance">
          {/* <IndexRoute component={PagesIndex} onEnter={addDataToRoute} /> */}
          <Route path="corporate-logos" component={CorporateLogos} />
          <Route path="product-logos" component={ProductLogos} />
        </Route>

        <Route path="error" component={ErrorPage} status={400} />
        <Route path="*" component={ErrorPage} status={404} message="Page Not Found" />
      </Route>
    </Router>
  );
}

export default Routes;
