import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  let total = 0;
  cartItems.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <div className="container py-5 flex-grow-1">
        <h1 className="fw-bold mb-4">My Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">Your cart is empty</h4>
            <Link to="/products" className="btn btn-primary mt-3">Browse Products</Link>
          </div>
        ) : (
          <>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Seller</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.seller}</td>
                    <td>Rs. {item.price.toLocaleString()}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="fw-bold mt-3">Total: Rs. {total.toLocaleString()}</h4>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
