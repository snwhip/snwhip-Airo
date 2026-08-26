import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import WritingPage from './pages/writing';
import WebDigitalPage from './pages/web-digital';
import LeadersAndEffectiveLeadershipPage from './pages/writing/leaders-and-effective-leadership';
import FarscapeIntelligentFictionPage from './pages/writing/farscape-intelligent-fiction';
import ApplesNewGravityPage from './pages/writing/apples-new-gravity';
import AboutPage from './pages/about';
import CommunicationsPage from './pages/communications';
import ContactPage from './pages/contact';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';
const NotFoundPage = ProdNotFoundPage;
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/writing',
  element: <WritingPage />
}, {
  path: '/writing/leaders-and-effective-leadership',
  element: <LeadersAndEffectiveLeadershipPage />
}, {
  path: '/writing/farscape-intelligent-fiction',
  element: <FarscapeIntelligentFictionPage />
}, {
  path: '/writing/apples-new-gravity',
  element: <ApplesNewGravityPage />
}, {
  path: '/web-digital',
  element: <WebDigitalPage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/communications',
  element: <CommunicationsPage />
}, {
  path: '/contact',
  element: <ContactPage />
}, {
  path: '*',
  element: <NotFoundPage />
}];

// Types for type-safe navigation
export type Path = '/';
export type Params = Record<string, string | undefined>;
