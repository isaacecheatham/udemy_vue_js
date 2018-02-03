/*global Vue*/

new Vue({
   el: '#app',
   data: {
       name: 'Isaac',
       age: 24,
       img: "https://www.enterprise.co.uk/content/dam/global-vehicle-images/cars/VAUX_INSI_2014.png"
   },
   methods: {
       ageTimes3: function() {
           return this.age * 3;
       },
       randomNum: function() {
          return Math.random();
       }
   }
});