function(instance, properties, context) {

 instance.data.sound = new Howl({
     src: [properties.sound_file],
     preload: properties.preload_bool,
     loop: properties.loop_bool,
     html5: properties.html5_bool,
     rate: properties.playback_rate,
     volume: properties.volume,
     onend: function() {
         instance.triggerEvent('on_end', function(err) {});
     },
 });

}