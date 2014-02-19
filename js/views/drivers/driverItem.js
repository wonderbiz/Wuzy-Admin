/**
 * Created by johnpogosyan on 2/10/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'constants',
    'text!templates/drivers/driverItem.html',
    'views/drivers/detail'
], function($, _, Backbone, Events, StackMob, Vm, Const, driversItemTemplate, DriverDetailView){

    var DriverItem = Backbone.View.extend({
        tagName: 'tr',
        initialize: function(){

        },

        events: {
            'click .detail-link' : 'showDetail',
            'click .delete-button': 'deleteDriver'
        },

        showDetail: function(e){
            e.preventDefault();
            var detailView = new DriverDetailView({model:this.model});
            detailView.render();

            Events.trigger(Const.INTERNAL_NAVIGATION_EVENT_NAME, { INTERNAL_NAVIGATION_PATH: 'driver/'+this.model.id });
        },

        deleteDriver: function(){
            var that = this;
            this.model.destroy({
                success: function(){
                    that.remove();
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(_.template(driversItemTemplate, {driver: this.model.toJSON()}));

            return this;
        }
    });

    return DriverItem;
});