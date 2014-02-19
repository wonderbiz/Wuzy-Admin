/**
 * Created by frimoldi on 30/01/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/header/sidebar.html',
    'constants',
    'models/user'
], function($, _, Backbone, Events, StackMob, Vm, sideBarViewTemplate, Const, UserModel){

    var SideBarView = Backbone.View.extend({
        el: '.sidebar-template',

        initialize: function(){
            this.$el.removeClass('hidden');
        },

        render: function (){
            this.$el.html(sideBarViewTemplate);
        }
    });

    return SideBarView;
});