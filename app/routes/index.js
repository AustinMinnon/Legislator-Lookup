import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    billLookup(params) {
      this.transitionTo('bill-results', params.bill);
    },
    committeeLookup(params) {
      this.transitionTo('committee-results', params.committee);
    },
  }
});
