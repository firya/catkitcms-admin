import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['crumbs'],
    
    router: null,
    applicationController: null,
    crumbs: Ember.A(),
    
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
    
    test: function () {
      console.log(this.breadCrumbsp.set('123') );
    }.observes('activeItem'),
   
   /**
    * Fill page crumbs from 
    */
   didReceiveAttrs() {
    var defaultPaths = this.get("pathNames"),
        menuList = this.get('menuList');

    this.crumbs.addObject(Ember.Object.create({
      caption:'home',
      link:'main'
    }));

    for(let path of defaultPaths){
      if(menuList[path]){
        this.crumbs.addObject(Ember.Object.create({
          caption: menuList[path],
          link: path
        }));
      }
    }   
  }
  
});