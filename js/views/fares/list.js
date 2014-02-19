/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/fares/list.html',
    'collections/Fares',
    'views/fares/faresCollection'
], function($, _, Backbone, Events, StackMob, Vm, faresListTemplate, FaresCollection, FaresCollectionView){

    var FaresList = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            var collection = new FaresCollection();
            
            var query = new StackMob.Collection.Query();
            
			query.setExpand(1);
            
            collection.query(query, {
                success: function(fares) {
                    var faresCollectionView = new FaresCollectionView({collection : fares});
                    faresCollectionView.render();
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(faresListTemplate);
        }
    });

    return FaresList;
});