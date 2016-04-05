import Ember from 'ember';

export function isParent(params) {
  var isSub = params[0];

  if(isSub === false){
    return Ember.String.htmlSafe('<button class="btn btn-success">See sub-committees</button>')
  }
}

export default Ember.Helper.helper(isParent);
