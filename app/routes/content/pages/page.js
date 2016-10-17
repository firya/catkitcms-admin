import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('content.page', params.page_id);
  },
  current_id: 10,
  test() {
    console.log('test');
    Ember.Logger('test');
  }
});

