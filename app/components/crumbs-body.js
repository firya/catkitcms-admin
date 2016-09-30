import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['crumbs'],
    
    router: null,
    applicationController: null,
    
    handlerInfos: Ember.computed("applicationController.currentPath", function() {
        return this.get("router").router.currentHandlerInfos;
    }),
    
    pathNames: Ember.computed("handlerInfos.[]", function() {
        return this.get("handlerInfos").map(function(handlerInfo) {
          return handlerInfo.name;
        });
    }),
    
    menuList: Ember.computed('menuItems', function(){
      var list = Ember.A([]);
      for(let item of this.menuItems){
        if(item.route){
          list[item.route] = item.caption;
        }
        if(item.links) {
          for(let item of item.links){
            if(item.route){
              list[item.route] = item.caption;
            }
          }
        }
      }
      return list;
    }),

    breadCrumbs: Ember.computed(
        "pathNames.[]",
        function() {
            
            var defaultPaths = this.get("pathNames"),
                menuList = this.get('menuList');
            
            var breadCrumbs = Ember.A([Ember.Object.create({
              caption:'home',
              link:'main'
            })]);
            
            for(let path of defaultPaths){
              if(menuList[path]){
                breadCrumbs.addObject(Ember.Object.create({
                  caption: menuList[path],
                  link: path
                }));
              }
            }

            return breadCrumbs;
        }
    )
});