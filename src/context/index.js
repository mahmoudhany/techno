import React, { Component, createContext } from 'react';
import { LinkData } from './LinkData';
import { socialData } from './socialData';
import { Firestore } from '../utility/firebase';

const ProductContext = createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {

  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: LinkData,
    socialIcons: socialData,
    cart: [],
    order: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false,
    search: '',
    price: 0,
    min: 0,
    max: 0,
    company: 'all',
    shipping: false
  }

  async componentDidMount() {
    let docRef = await Firestore.collection("products").doc("products");
    docRef.get().then(async (doc) => {
      this.setState({ loading: true })
      if (doc.exists) {
        let products = await doc.data().items
        this.setProducts(products)
        this.setState({ loading: false })
      } else {
        console.log("No such document!");
        this.setState({ loading: false })
      }
    }).catch((error) => {
      this.setState({ loading: false })
      console.log("Error getting document:", error);
    });

    // Firestore.collection("products").doc('products').set({ items })
    //   .then(function () {
    //     console.log("Document successfully written!");
    //   })
    //   .catch(function (error) {
    //     console.error("Error writing document: ", error);
    //   });

  }

  setOrder = () => {
    let order = [...this.state.cart]
    localStorage.setItem('order', JSON.stringify(order))
    this.setState({ order: order })
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

    let maxPrice = Math.max(...storeProducts.map(item => item.price))

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      order: this.getStorageOrder(),
      singleProduct: this.getStorageProduct(),
      loading: false,
      price: maxPrice,
      max: maxPrice
    }, () => {
      this.addTotals()
    })
  }

  //////////// local storage /////////////
  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
    localStorage.setItem('order', JSON.stringify(this.state.order))
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
  // get order from local storage
  getStorageOrder = () => {
    let order;
    if (localStorage.getItem('order')) {
      order = JSON.parse(localStorage.getItem('order'))
    } else {
      order = []
    }
    return order
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

  // # Cart functionality
  openCart = () => { this.setState({ cartOpen: true }) }
  closeCart = () => { this.setState({ cartOpen: false }) }

  increment = (id) => {
    let tempCart = [...this.state.cart]
    const cartItem = tempCart.find(item => item.id === id)
    cartItem.count++;
    cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2))
    this.setState(() => (
      { cart: [...tempCart] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }
  decrement = (id) => {
    let tempCart = [...this.state.cart]
    const cartItem = tempCart.find(item => item.id === id)
    cartItem.count--;
    if (cartItem.count === 0) {
      this.removeItem(id)
    } else {
      cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2))
      this.setState(() => (
        { cart: [...tempCart] }
      ), () => {
        this.addTotals()
        this.syncStorage()
      })
    }
  }

  removeItem = (id) => {
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id)

    this.setState(() => (
      { cart: [...tempCart] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }
  clearCart = () => {
    this.setState(() => (
      { cart: [] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }
  clearOrder = () => {
    this.setState(() => (
      { order: [] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }
  handleChange = ({ target }) => {
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    },
      this.sortData
    )

  }
  sortData = () => {
    const { storeProducts, price, company, shipping, search } = this.state
    let tempProducts = [...storeProducts]
    let tempPrice = parseInt(price)
    tempProducts = tempProducts.filter(product => product.price <= tempPrice)

    if (company !== 'all') {
      tempProducts = tempProducts.filter(product => product.company === company)
    }
    else if (search !== '') {
      tempProducts = tempProducts.filter(product => {
        let tempSearch = search.toLowerCase().trim()
        let tempTitle = product.title.toLowerCase().trim()
        return tempTitle.includes(tempSearch)
      })
    }
    else if (shipping) {
      tempProducts = tempProducts.filter(product => product.freeShipping === true)
    }
    this.setState({
      filteredProducts: tempProducts
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.openCart,
        addToCart: this.addToCart,
        setSingleProduct: this.setSingleProduct,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        clearOrder: this.clearOrder,
        handleChange: this.handleChange,
        setOrder: this.setOrder
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


export { ProductProvider, ProductConsumer, ProductContext };
