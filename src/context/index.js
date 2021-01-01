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
    loading: false
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
    })
  }
  // get cart from local storage
  getStorageCart = () => {
    return []
  }
  // get product from local storage
  getStorageProduct = () => {
    return []
  }
  // get Totals
  getTotals = () => {

  }
  // add Totals
  addTotals = () => {

  }
  // get Totals
  syncStorage = () => {

  }

  addToCart = (id) => {
    console.log(id);
  }

  setSingleProduct = (id) => {
    console.log(id);
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
