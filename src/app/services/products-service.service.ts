import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor( private httpClient: HttpClient) { }


  getProducts() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProduct', {headers});
  }
  getProductsById(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductById/' + id , {headers});
  }
  getProductsByRange(price1, price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductByRange/' + price1 + '/between/' + price2, {headers});
  }
  getProductsByCategory(category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductByCategory/' + category, {headers});
  }

  addProductToCart(productid) {
    console.log(productid);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cart/addproduct/receive/' + productid, {headers});
  }

  removeProductFromCart(productid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cart/removeproduct/receive/' + productid, {headers});
    this.showCart();
  }

  showCart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cart/showcart/receive', {headers});

  }
  clearCart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cart/clearcart/receive', {headers});

  }

  decreaseQuantityFromCart(productid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cart/decreaseProductQuantity/receive/' + productid,  {headers});

  }

  getTotal() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/cartoh/checkout/receive', {headers});
  }

}
