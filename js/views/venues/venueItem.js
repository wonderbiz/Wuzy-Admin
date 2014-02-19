/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'constants',
    'text!templates/venues/venueItem.html',
    'views/venues/detail'
], function($, _, Backbone, Events, StackMob, Vm, Const, venuesItemTemplate, VenueDetailView){

    var VenueItem = Backbone.View.extend({
        tagName: 'tr',
        initialize: function(){

        },

        events: {
            'click .detail-link' : 'showDetail',
            'click .delete-button': 'deleteVenue'
        },

        showDetail: function(e){
            e.preventDefault();
            var detailView = new VenueDetailView({model:this.model});
            detailView.render();

            Events.trigger(Const.INTERNAL_NAVIGATION_EVENT_NAME, { INTERNAL_NAVIGATION_PATH: 'venue/'+this.model.id });
        },

        deleteVenue: function(){
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
            this.$el.html(_.template(venuesItemTemplate, {venue: this.model.toJSON()}));

            return this;
        }
    });

    return VenueItem;
});