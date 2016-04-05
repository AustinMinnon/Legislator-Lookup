import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      committeeLookup() {
      var params= {
        committee: this.get('committee')
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
