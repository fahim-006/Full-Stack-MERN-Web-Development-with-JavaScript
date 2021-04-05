let cartlist = document.querySelector('#cart-list');
//add to cart's function
let carts;
/*start the button onClick funtion*/
function cartItem(id, name, price,quantity){
        
        // cart Class
    class cart {
        constructor(id, name, price,quantity) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

     // UI Class
     class UI {
        static addToCartlist(cart) {
            let list = document.querySelector('#cart-list');
            let row = document.createElement('tr');
            row.innerHTML = ` 
            <td>${id}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td id='quantity'>${quantity}</td>
            <td><a href='#' class="delete">X</a></td>`;
    
            list.appendChild(row);
        }
    
        static showAlert(message) {
            alert(message);
        }
    
        static deleteFromCart(target) {
            if (target.hasAttribute('href')) {
                target.parentElement.parentElement.remove();
                Store.removeItems(target.parentElement.previousElementSibling.textContent.trim());
            }
        }

        static addToOldCartItem(id,name,price,newQuantity){
            Store.removeItems(id);
            let cartforQuanUpdate = new cart(id, name, price,newQuantity);
            Store.addCart(cartforQuanUpdate);
            location.reload();
        }
    }

    // Local Storage Class for function
class Store {
    static getCarts() {  //getcarts
        let carts; //carts
        if (localStorage.getItem('carts') === null) {
            carts = [];
        } else {
            carts = JSON.parse(localStorage.getItem('carts'));
        }
        return carts;
    }

    static addCart(cart) {
        let carts = Store.getCarts();
        carts.push(cart);

        localStorage.setItem('carts', JSON.stringify(carts));
    }

    static removeItems(id) {
        let carts = Store.getCarts();

        carts.forEach((cart, index) => {
            if(cart.id === id) {
                carts.splice(index, 1);
            }
        })

        localStorage.setItem('carts', JSON.stringify(carts));
    }
} 

    let cart1 = new cart(id, name, price,quantity);

    let cartss = Store.getCarts();
    let flag = 0;
    
            cartss.forEach(cart => {
            //UI.addToCartlist1(cart);
            if(cart.id == id){
                 console.log('cart.id == id');
                cart.quantity = parseInt(cart.quantity) + 1;
                console.log(cart.quantity);
                UI.addToOldCartItem(id,cart.name,cart.price,cart.quantity);
                flag = 1;
                
            }
        });

        if(flag==0 && cartss.length!=0){
            //console.log('cart.id er else');
            UI.addToCartlist(cart1);
            Store.addCart(cart1);
        }  

        if (cartss.length==0){
          //console.log('cartss.length');
            UI.addToCartlist(cart1);
            Store.addCart(cart1);
        }
   
    
    UI.showAlert("Item Added!", "success");

    }

 /*end of the button onClick funtion*/

// Local Storage Class exess

class Store1 {
    static getCarts1() {  //getcarts
        let carts1=[]; //carts
        if (localStorage.getItem('carts') === null) {
            carts1 = [];
        } else {
            carts1 = JSON.parse(localStorage.getItem('carts'));
        }
        return carts1;
    }
    static displayCarts() {
        let carts = Store1.getCarts1();

        carts.forEach(cart => {
            UI1.addToCartlist1(cart);  
        });
    }

    static removeCart(id) {
        let carts = Store1.getCarts1();
        carts.forEach((cart, index) => {
            if(cart.id === id) {
                carts.splice(index, 1);
            }
        })

        localStorage.setItem('carts', JSON.stringify(carts));
    }
    
}
//end Local Storage Class exess

  // UI1 Class
  class UI1 {
    static addToCartlist1(cart) {
        let list1 = document.querySelector('#cart-list');
        let row1 = document.createElement('tr');
        row1.innerHTML = `
        <td>${cart.id}</td>
        <td>${cart.name}</td>
        <td>${cart.price}</td>
        <td>${cart.quantity}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list1.appendChild(row1);
        

    }


    static showAlert(message) {
        alert(message);
    }

    static deleteFromCart(target) {
        if (target.hasAttribute('href')) {
            var theString= target.parentElement.parentElement.textContent.trim();
            var firstLine = theString.split('\n')[0];
            target.parentElement.parentElement.remove(); 
            Store1.removeCart(firstLine);
        }
    }
}

//end of UI1 class

function removeCart(e) {
    UI1.deleteFromCart(e.target);
    e.preventDefault();
}

cartlist.addEventListener('click', removeCart);
document.addEventListener('DOMContentLoaded', Store1.displayCarts());

