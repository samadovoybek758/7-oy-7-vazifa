import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
    const cart = useSelector(state => state.cart.cart)
    const nameRef = useRef()
    const emailRef = useRef()
    const ageRef = useRef()
    const formRef = useRef()

    const dispatch = useDispatch()
    
    function add_cart(e) {
        e.preventDefault()
    
        const cart ={
          name: nameRef.current.value,
          email: emailRef.current.value,
          age: ageRef.current.value,
          id: Date.now()
        }
        dispatch({type: 'ADD_CART', payload: cart})
    
        formRef.current.value = ' '
        nameRef.current.value = '';
        emailRef.current.value = '';
        ageRef.current.value = '';
      }
    
      function delet_btn(id) {
        dispatch({type: 'REMOVE_CART', payload: id})
      }
    
      function clear_btn(e) {
        dispatch({type: 'CLEAR_CARTS'})
      }

      
  return (
    <div>
          <div ref={formRef} className='mt-6 wrapper max-w-[500px] mx-auto p-5 bg-slate-400 rounded-md flex flex-col gap-3 mb-6'>
              <input ref={nameRef} className='input' type="text" placeholder='Enter name...'/>
              <input ref={emailRef} className='input' type="email" placeholder='Enter email...'/>
              <input ref={ageRef} className='input' type="number" placeholder='Enter age...'/>
              <button onClick={add_cart} className='btn btn-accent'>Add to cart</button>
              <button onClick={(e) => {clear_btn(e)}} className='btn btn-warning'>Clear carts</button>
          </div>
          <div className='flex gap-3 mx-auto flex-wrap max-w-[1000px]  '>
            {
              cart.length > 0 && cart.map(function (value) {
                return (
                  <div key={value.id} className='w-[300px] p-5 bg-slate-400 rounded-md text-center'>
                    <h1>{value.name}</h1>
                    <h2>{value.email}</h2>
                    <h3>{value.age}</h3>
                    <button onClick={(e) => {delet_btn(value.id)}} className='btn btn-error w-full mt-2'>Delet</button>
                  </div>
                )
              })
            }
          </div>
    </div>
  )
}

export default Cart