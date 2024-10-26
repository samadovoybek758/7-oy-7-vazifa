import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo concept.svg';
import img1 from '../assets/call.svg'
import img2 from '../assets/email.svg';
import img3 from '../assets/build.svg'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import Cart from './components/Cart';


function Main() {
  const theme = useSelector(state => state.theme.theme)


  const navigate = useNavigate()
  const { t, i18n } = useTranslation();


  const dispatch = useDispatch()

  

  useEffect(() =>{
    if (theme === 'light') {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
      }
    }else if (theme === 'dark'){
      document.body.classList.add('dark')
    }
  },[theme])


  function click_check(e) {
    if (e.target.checked) {
      dispatch({type : 'DARK'})
    }else{
      dispatch({type : 'LIGHT'})
    }
  }
  

 

  // useEffect(() =>{
  //   i18n.changeLanguage(lang)    
  // },[lang]);

  function to_cart(e) {
    e.preventDefault()

    navigate('/cart')
  }
  return (
    <div>
      <div className='dark:bg-black'>

        <div className='navbar max-w-[1170px] mx-auto flex justify-between pt-4 pb-4 ' >
          <div className='flex gap-3 '>
            <img src={logo} alt="" />
            <h1 className='dark:text-white text-4xl font-bold'>Brave</h1>
          </div>
          <ul className='flex gap-12 dark:text-white'>
            <li><a href="/">Templates</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Resources</a></li>
          </ul>
          <input type="checkbox" className='checkbox' onChange={(e) =>{click_check(e)}} />
          <button className='dark:bg-purple-700   btn btn-primary rounded-2xl'>Start Free Trial</button>

          <select className='select bg-slate-500' >
            <option value="uz">uz</option>
            <option value="rus">rus</option>
            <option value="eng">eng</option>
          </select>

          <button className='btn btn-info' onClick={to_cart}>TO CART</button>
        </div>
       
        <div className='main max-w-[1440px] mx-auto pt-[70px] font-sans dark:text-white '>
          
            <div className='max-w-[852px] mx-auto  text-center'>
            <h3 className='text-2xl font-bold mb-6'>Contact Us</h3>
            <h1 className='text-5xl font-bold mb-8'>Say <span className='text-blue-500'>Hello!</span> We’re always here to help.</h1>
            <p className='text-2xl font-normal'>Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you.</p>

            </div>

            <div className='max-w-[870px] flex flex-col gap-6 mx-auto mt-[100px] mb-24'>
              <div className='flex gap-8'>

                <div className='dark:bg-black px-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img1} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>CALL US</span>
                    <span className='text-3xl font-semibold'>+1 (214) 960 4130</span>
                  </div>
                </div>

                <div className='dark:bg-black pt-[28px] pb-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img2} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>Email Us</span>
                    <span className='text-2xl font-semibold'>hello@aiinfo.com</span>
                  </div>
                </div>

              </div>

              <div className='dark:bg-black w-full pt-[28px] pb-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img3} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>HEADQUARTERS</span>
                    <span className='text-3xl font-semibold'>12720 Hillcrest Road Suite 980, Dallas, TX 75230</span>
                  </div>
                </div>

            </div>
        
        </div>
        <footer className='dark:bg-slate-500 footer max-w-[1440px]  mx-auto pt-[138px] pb-[138px] px-[305px] text-center mb-24 flex justify-center items-center '>
          <div>
            <h1 className='dark:text-black text-5xl font-semibold text-white '>Sign up for your free 14 day trial now!</h1>
            <button className='dark:bg-purple-700 btn btn-primary mt-[49px] mx-auto'>Get Started for free</button>
          </div>
        </footer>

         
      </div>
    </div>
  )
}

export default Main