import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' });
  this.route('login');
  this.route('content', {}, function(){
      this.route('pages', function(){
          this.route('page', { path: '/:page_id' });
      });
      this.route('catalogs', function(){
          this.route('catalog', { path: '/:catalog_id' });
      });
      this.route('cache');
      this.route('lists');
  });
  this.route('templates', {}, function(){
      this.route('blocks');
      this.route('pages');
      this.route('catalogs');
      this.route('forms');
  })
});

export default Router;
