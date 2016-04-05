import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/committees?apikey=" +key+ "&chamber=" + params.committee + "&subcommittee="+ params.subCommittee;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },

  actions: {
    subCommitteeLookup() {
      console.log("hey");
      // var params = {
      //   parentCommitee: committee.committee_id;
      //
      // }
    }
  }
});
