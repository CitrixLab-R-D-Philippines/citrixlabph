import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { CgUser } from 'react-icons/cg'
import {HiOutlineTrash} from 'react-icons/hi'
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

import { Login } from './login';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  } from 'mdb-react-ui-kit';


const Cart = () => {
  const cartRef = useRef();
  const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <h2>Login</h2>
      
        <div> {/* LOGIN */}
            <MDBContainer fluid className='my-5'> 
              <MDBRow className='g-0 align-items-center'>
                <MDBCol col='6'>
                  <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                    <MDBCardBody className='p-5 shadow-5 text-center'>

                      <h2 className="fw-bold mb-5">Sign up now</h2>

                      <MDBRow>
                        <MDBCol col='6'>
                          <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                        </MDBCol>

                        <MDBCol col='6'>
                          <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                        </MDBCol>
                      </MDBRow>

                      <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
                      <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

                      <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                      </div>

                      <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                      <div className="text-center">

                        <p>or sign up with:</p>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='facebook-f' size="sm"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='twitter' size="sm"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='google' size="sm"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='github' size="sm"/>
                        </MDBBtn>

                      </div>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol col="6">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4" alt="" />
                </MDBCol>

              </MDBRow>

              </MDBContainer>
            </div>



      <div className='cart-container'>
        <div className='cart-items'>
          {cartItems.length < 1 && (
            <div className='empty-cart'>
              <CgUser size={150} />
              <h1>Sign in</h1>
            </div>
          )}

          


          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id} className='item-card'>
              <div className='item-image'>
                <img src={urlFor(item?.image[0])} alt='img' />
              </div>
              <div className='item-details'>
                <div className='name-and-remove'>
                  <h3>{item.name}</h3>  
                  <button type='buttin' onClick={() => onRemove(item)} className='remove-item'>
                  <HiOutlineTrash size={28} />  
                  </button>
                </div>
                <p className='item-tag'>Dress</p>
                <p className='delivery-est'>Delivery Estimation</p>
                <p className='delivery-days'>5 Working Days</p>
                <div className='price-and-qty'>
                  <span className='price'>${item.price * item.quantity}</span>  
                  <div>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                    <span className='num' onClick=''>{item.quantity}</span>
                    <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                  </div>   
                </div>
              </div>
            </div>
            ))}    
        </div>

        {cartItems.length >= 1 && (
        <div className='order-summary'>
          <h3>Order Summary</h3>
          <div className='qty'>
            <p>Quantity</p>
            <span>{totalQty} Product</span>
          </div>
          <div className='subtotal'>
            <p>Sub Total</p>
            <span>${totalPrice}</span>
          </div>
          {/* <div className='total'>
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>  */}
          <div>
            <button className='btn' type='button' onClick={handleCheckout}>Process to Checkout</button>
          </div>         
        </div>
        )}  

      </div>
    </div>
  )
}

export default Cart
