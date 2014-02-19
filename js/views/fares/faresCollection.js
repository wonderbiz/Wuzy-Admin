/**
 * Created by johnpogosyan on 2/11/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/fares/faresCollection.html',
    'views/fares/fareItem'
], function ($, _, Backbone, Events, StackMob, Vm, faresCollectionTemplate, FareItemView) {

    var FaresList = Backbone.View.extend({
        el: '.fares-table',

        initialize: function () {

        },

        render: function () {
            this.$el.html(faresCollectionTemplate);
            this.collection.each(function (fare) {

                var fareItemView = new FareItemView({ model: fare });

                this.append(fareItemView.render().el);
               
            }, this.$el.children('.table').children('tbody'));
        }
    });

    return FaresList;
});