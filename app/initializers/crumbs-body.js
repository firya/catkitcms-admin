export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'crumbs-body',
  initialize: function() {
    let application = arguments[1] || arguments[0];
    application.inject("component:crumbs-body", "router", "router:main");
    application.inject("component:crumbs-body", "applicationController", "controller:application");
  }
};
