import React, { Component, createContext } from 'react';
import { LinkData } from './LinkData';
import { socialData } from './socialData';
import { items } from './productData';

const ProductContext = createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {

  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: LinkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  }

  componentDidMount() {
    this.setProducts(items)
  }

  setProducts = (products) => {
    const storeProducts = products.map(item => {
      const { id } = item.sys
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image }
      return product
    })

    let featuredProducts = storeProducts.filter(item => (
      item.featured === true
    ))

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    }, () => {
      this.addTotals()
    })
  }

  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }
  // get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      cart = []
    }
    return cart
  }
  // get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem('singleProduct') ?
      JSON.parse(localStorage.getItem('singleProduct'))
      : {}

  }
  // get Totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total
      cartItems += item.count
    })
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = parseFloat((subTotal * 0.2).toFixed(2))

    let total = parseFloat((subTotal + tax).toFixed(2))

    return {
      cartItems,
      subTotal,
      tax,
      total
    }

  }
  // add Totals
  addTotals = () => {
    const { cartItems, subTotal, tax, total } = this.getTotals()
    this.setState({
      cartItems: cartItems,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    })

  }


  addToCart = (id) => {
    let tempCart = [...this.state.cart]
    let tempProducts = [...this.state.storeProducts]
    let tempItem = tempCart.find(item => item.id === id)

    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id)
      let total = tempItem.price
      let cartItem = { ...tempItem, count: 1, total }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++;
      tempItem.total = parseFloat((tempItem.price * tempItem.count).toFixed(2))
    }

    this.setState(() => {
      return { cart: tempCart }
    }, () => {
      this.addTotals()
      this.syncStorage()
      this.openCart()
    })
  }

  setSingleProduct = (id) => {
    let product = this.state.storeProducts.find(item => item.id === id)
    localStorage.setItem('singleProduct', JSON.stringify(product))
    this.setState({
      singleProduct: { ...product },
      loading: false
    })
  }

  handleSidebar = () => { this.setState({ sidebarOpen: !this.state.sidebarOpen }) }
  handleCart = () => { this.setState({ cartOpen: !this.state.cartOpen }) }

  openCart = () => { this.setState({ cartOpen: true }) }
  closeCart = () => { this.setState({ cartOpen: false }) }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.openCart,
        addToCart: this.addToCart,
        setSingleProduct: this.setSingleProduct
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


export { ProductProvider, ProductConsumer, ProductContext };
