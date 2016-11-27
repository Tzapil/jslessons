'use strict';

var app = angular.module('confusionApp', []);
app.controller('menuController', function () {
  var dishes=[
               {
                 name:'Uthapizza',
                 image: 'img/uthapizza.png',
                 category: 'mains',
                 label:'Hot',
                 price:'4.99',
                 description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                 comment: ''
              },
              {
                 name:'Zucchipakoda',
                 image: 'img/zucchipakoda.png',
                 category: 'appetizer',
                 label:'',
                 price:'1.99',
                 description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                 comment: ''
              },
              {
                 name:'Vadonut',
                 image: 'img/vadonut.png',
                 category: 'appetizer',
                 label:'New',
                 price:'1.99',
                 description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                 comment: ''
              },
              {
                 name:'ElaiCheese Cake',
                 image: 'img/elaicheesecake.png',
                 category: 'dessert',
                 label:'',
                 price:'2.99',
                 description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                 comment: ''
              }
              ];

  this.dishes = dishes;

  this.tab = 1;
  this.filtText = "";
  this.select = function(setTab) {
    this.tab = setTab;

    switch(setTab) {
      case 2:
        this.filtText = "appetizer";
        break;
      case 3:
        this.filtText = "mains";
        break;
      case 4:
        this.filtText = "dessert";
        break;
      default:
        this.filtText = "";
    }
  };
  this.isSelected = function (checkTab) {
    return (this.tab === checkTab);
  };
});
