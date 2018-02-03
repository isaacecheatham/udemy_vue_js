/*global Vue*/

new Vue({
   el: '#app',
   data: {
       counter: 0,
       secondCounter: 0
   },
   computed: {
      output: function() {
         return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
      }
   },
   watch: {
      counter: function(val) {
         var vthis = this;
         setTimeout(function() {
            vthis.counter = 0;
         }, 2000);
      }
   },
   methods: {
      result: function() {
         return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
      }
   }
});