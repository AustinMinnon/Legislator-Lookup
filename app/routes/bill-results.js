import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/bills?apikey=ea6154d3cc2649458c792d61e26b0160&query=" + params.bill;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
