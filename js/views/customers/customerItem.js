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
    'text!templates/customers/customerItem.html',
    'views/customers/detail'
], function($, _, Backbone, Events, StackMob, Vm, Const, customersItemTemplate, CustomerDetailView){

    var CustomerItem = Backbone.View.extend({
        tagName: 'tr',
        initialize: function(){

        },

        events: {
            'click .detail-link' : 'showDetail',
            'click .delete-button': 'deleteCustomer'
        },

        showDetail: function(e){
            e.preventDefault();
            var detailView = new CustomerDetailView({model:this.model});
            detailView.render();

            Events.trigger(Const.INTERNAL_NAVIGATION_EVENT_NAME, { INTERNAL_NAVIGATION_PATH: 'customer/'+this.model.id });
        },

        deleteCustomer: function(){
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
            this.$el.html(_.template(customersItemTemplate, {customer: this.model.toJSON()}));

            return this;
        }
    });

    return CustomerItem;
});