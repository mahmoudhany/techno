import { AsyncComponent } from '../components'

import HomePage from './HomePage'
const AboutPage = AsyncComponent(() => import('./AboutPage'));
const CartPage = AsyncComponent(() => import('./CartPage'));
const ContactPage = AsyncComponent(() => import('./ContactPage'));
const DefaultPage = AsyncComponent(() => import('./DefaultPage'));
const ProductsPage = AsyncComponent(() => import('./ProductsPage'));
const SingleProductPage = AsyncComponent(() => import('./SingleProductPage'));
const SignupPage = AsyncComponent(() => import('./SignupPage'));
const LoginPage = AsyncComponent(() => import('./LoginPage'));
const OrderPage = AsyncComponent(() => import("./OrderPage"));

export { AboutPage, CartPage, ContactPage, DefaultPage, HomePage, ProductsPage, SingleProductPage, SignupPage, LoginPage, OrderPage };
