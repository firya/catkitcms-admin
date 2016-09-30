import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({
    mainMenuItems: Ember.A([{
            caption: 'menu.activity',
        }, {
            caption: 'menu.content',
            route: 'content',
            links: Ember.A([{
                    caption: 'menu.pages',
                    route: 'content.pages'
                }, {
                    caption: 'menu.catalogs',
                    route: 'content.catalogs'
                }, {
                    caption: 'menu.lists',
                    route: 'content.lists'
                }, {
                    caption: 'menu.cache',
                    route: 'content.cache'
                }
            ])
        }, {
            caption: 'menu.tempates',
            links: Ember.A([{
                    caption: 'menu.blocks',
                    route: 'templates.blocks'
                }, {
                    caption: 'menu.pages',
                    route: 'templates.pages'
                }, {
                    caption: 'menu.catalogs',
                    route: 'templates.catalogs'
                }
            ])
        }, {
            caption: 'menu.system',  
        }, {
            caption: 'menu.help',  
        }
    ])
});
