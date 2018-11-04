import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 3
    }
  ];

  constructor(public navCtrl: NavController, public ToastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  // Remove an item
  removeItem(item, index) {
    console.log("Removing item - ", item, index);
    const toast = this.ToastCtrl.create({
      message: "Removing item - " + item.name + " ...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1)
  }

// Adding Item function
  addItem() {
    console.log("Adding item");
    this.showAddItemPrompt();
  }

  // This creates a prompt that allows the user to add an item
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter an item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [ 
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked', data);
          }
        },
        {
          text: 'Save',
          handler: item=> {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
