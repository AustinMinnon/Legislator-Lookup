import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('bill-results', {path: '/bill-results/:bill'});
  this.route('committee-results', {path: '/committee-results/:committee/:subCommittee'});
  this.route('sub-Committee', {path: '/sub-Committee/:committee_id'});
});

export default Router;
