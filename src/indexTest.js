import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Profile from './components/profile/profile';
import Mailbox from './components/mailbox';
import TechList from './components/techList';
// // const link = React.createElement(
// //   'a',
// //   {
// //     href: 'https://reactjs.org/',
// //     target: '_blank',
// //   },
// //   'react website',
// // );
// // const image = React.createElement('img', {
// //   src:
// //     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
// //   alt: 'Tacos With Lime',
// //   width: 640,
// // });
// // const title = React.createElement('h2', null, 'Tacos With Lime');
// // const price = React.createElement('p', null, 'Price: 10.99$');
// // const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// // const product = React.createElement('div', null, image, title, price, button);

// const Product = ({ name, price, imgUrl }) => (
//   <div>
//     <img src={imgUrl} alt="tacos" width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// // ReactDOM.render(
// //   <Product name="Tacos With crime" price="11.99" />,
// //   document.querySelector('#root'),
// // );
// const App = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );
const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];
const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);
Product.defaultProps = {
  imgUrl:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
};
Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
const App = () => (
  <div>
    <TechList books={favouriteBooks} />
    <h1>Best selling products</h1>
    <Mailbox name="john" unreadMessages={[1]} />

    <Product name="Tacos With Lime" price={10.99} />
    <Product
      // imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
      price={14.29}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
