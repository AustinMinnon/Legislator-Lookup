import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      committeeLookup() {
        debugger;
      var params= {
        committee: this.get('committee')
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
