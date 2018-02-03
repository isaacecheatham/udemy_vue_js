/*global Vue*/

new Vue({
   el: '#app',
   data: {
       counter: 0,
       x: 0,
       y: 0
   },
   methods: {
      increase: function(arg, event) {
         this.counter += arg;
      },
      updateCoordinates: function(event) {
         this.x = event.clientX;
         this.y = event.clientY;
      },
      alertMe: function() {
         alert('Alert');
      }
   }
});