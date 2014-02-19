/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/venues/new.html',
    'models/venue',
    'views/maps/mapwidget'
], function($, _, Backbone, Events, StackMob, Vm, NewVenueTemplate, Venue, MapWidgetView){

    var coordinate;
    var newVenueView = Backbone.View.extend({
        el: '.page',

        initialize: function(){

        },

        events: {
            'submit #newVenueForm': 'createNewVenue'
        },

        createNewVenue: function(e){
            e.preventDefault();

            var name = $('#nameInput').val();
            var type = $('#typeInput').val();
            var address = $('#addressInput').val();
            var description = $('#descriptionTextArea').val();
            console.log(this);
            var location = new StackMob.GeoPoint(coordinate.latitude, coordinate.longitude);

            var newVenue = new Venue({
                'name': name,
                'bussiness_type': type,
                'address': address,
                'venue_description': description,
                'location': location
            });

            newVenue.create({
                success: function(){
                    alert("Venue '"+newVenue.toJSON().name+"' created !");
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        coordinateUpdated: function(newCoordinate){
            $('#coordinateInput').val(newCoordinate.latitude + ' ; ' + newCoordinate.longitude);
            coordinate = newCoordinate;
        },

        addressUpdated: function(address){
            $('#addressInput').val(address);
        },

        render: function (){
            this.$el.html(NewVenueTemplate);
            this.mapWidgetView = new MapWidgetView();
            this.mapWidgetView.on('coordinateUpdated', this.coordinateUpdated);
            this.mapWidgetView.on('addressUpdated', this.addressUpdated);
            this.mapWidgetView.render();
        }
    });

    return newVenueView;
});