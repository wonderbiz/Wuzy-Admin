define([
    'jquery',
    'lodash',
    'backbone',
    'vm',
    'events',
    'wuzy-stackmob',
    'text!templates/layout.html',
    'text!templates/layout-full-page.html'
], function($, _, Backbone, Vm, Events, StackMob, layoutTemplate, layoutFullPageTemplate){
    var navBar;
    var sideBar;
    var that;
    var AppView = Backbone.View.extend({
        el: 'body',
        initialize: function () {
            Events.on('userLoggedIn', this.render);
            Events.on('userLoggedOut', this.render);
            that = this;
        },
        render: function () {
            StackMob.isLoggedIn({
                yes: function(){
                    $(that.el).html(layoutTemplate);
                    that.renderLayout();
                },
                no: function(){
                    $(that.el).html(layoutFullPageTemplate);
                }
            });
        },

        renderLayout: function() {
            var that = this;
            require(['views/header/navbar'], function(NavigationBarView){
                navBar = Vm.create(that, 'NavigationBar', NavigationBarView, {});
                navBar.render();
            });

            require(['views/header/sidebar'], function(SideBarView){
                sideBar = Vm.create(that, 'SideBar', SideBarView, {});
                sideBar.render();
            });
        }
    });

  return AppView;
});
