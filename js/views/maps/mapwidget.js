/**
 * Created by frimoldi on 03/02/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/maps/map.html'
], function($, _, Backbone, Events, StackMob, Vm, MapWidgetTemplate){

    var geocoder;
    var mapWidgetView = Backbone.View.extend({
        el: '.map-widget',

        map: undefined,
        marker: undefined,

        initialize: function(){

        },

        render: function (){
            this.$el.html(MapWidgetTemplate);

            var that = this;
            var addresspicker = $( "#addressSearch" ).addresspicker();
            var addresspickerMap = $( "#addressSearch" ).addresspicker(
                {
                    map: "#map-canvas",
                    typeaheaddelay: 5000
                }
            );
            require(['async!https://maps.googleapis.com/maps/api/js?sensor=false'], function(){
                var mapOptions = {
                    center: new google.maps.LatLng(34.11052047333408, -118.05969711193848 ),
                    zoom: 15,
                    regionBias: "us",
                };
                that.map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

                that.marker = new google.maps.Marker({
                    position: mapOptions.center,
                    map: that.map,
                    draggable: true,
                    title: 'New venue'
                });
                addresspickerMap.on("addressChanged", function(evt, address) {
                    that.trigger('coordinateUpdated',{
                        latitude: address.geometry.location.lat(),
                        longitude: address.geometry.location.lng(),
                    });
                    alert(address.geometry.location.lat() +"," + address.geometry.location.lng())
                    console.log(address);
                });
                addresspickerMap.on("positionChanged", function(evt, markerPosition) {
                    markerPosition.getAddress( function(address) {
                        if (address) {
                            $("#addressSearch").val(address.formatted_address);
                        }
                    })
                });

                geocoder = new google.maps.Geocoder();

                var notifyPositionChanges =  function(){
                    that.trigger('coordinateUpdated', {
                        latitude: that.marker.position.lat(),
                        longitude: that.marker.position.lng()
                    });

                    var latLng = new google.maps.LatLng(that.marker.position.lat(), that.marker.position.lng());
                    geocoder.geocode({'latLng': latLng}, function(results, status){
                        if (status == google.maps.GeocoderStatus.OK) {
                            that.trigger('addressUpdated', results[0].formatted_address);
                        }
                        console.log(results);
                    });
                };

                google.maps.event.addListener(that.marker, 'dragend', notifyPositionChanges);

                notifyPositionChanges();
            });
        }


    });

    return mapWidgetView;
});