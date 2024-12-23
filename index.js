
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
   
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        
        existingItem.quantity += quantity;
      } 
      else {
        
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    
    displayItems() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        this.items.forEach(item => {
          console.log(`${item.product.name} (x${item.quantity}) - ${item.getTotalPrice()}€`);
        });
      }
    }
  }
  
  
  const apple = new Product(1, 'Pomme', 0.5);
  const banana = new Product(2, 'Banane', 0.7);
  const orange = new Product(3, 'Orange', 1.2);
  
  
  const myCart = new ShoppingCart();
  

  myCart.addItem(apple, 5);    
  myCart.addItem(banana, 3);   
  myCart.addItem(orange, 2);   
  
 
  myCart.displayItems();
  
  
  
  console.log("Total du panier : " + myCart.getTotal() + "€");
  
  
  myCart.removeItem(2); 
  
  
  myCart.displayItems();
  console.log("Total du panier après suppression : " + myCart.getTotal() + "€");
  