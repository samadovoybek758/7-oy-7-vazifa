import React, { useEffect} from 'react';
import logo from '../assets/logo concept.svg';
import img1 from '../assets/call.svg'
import img2 from '../assets/email.svg';
import img3 from '../assets/build.svg'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {useNavigate } from 'react-router-dom';


function Main() {
  const theme = useSelector(state => state.theme.theme)
  const lang = useSelector(state =>state.lang.lang)
  console.log(lang);

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
  
  function change_select(e) {
    let val = e.target.value
    dispatch({type: val})
    
  }

 

  useEffect(() =>{
    i18n.changeLanguage(lang)    
  },[lang]);

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
            <h1 className='dark:text-white text-4xl font-bold'>{t('Brave')}</h1>
          </div>
          <ul className='flex gap-12 dark:text-white'>
            <li><a href="/">{t('Templates')}</a></li>
            <li><a href="/">{t('Features')}</a></li>
            <li><a href="/">{t('Pricing')}</a></li>
            <li><a href="/">{t('Resources')}</a></li>
          </ul>
          <input type="checkbox" className='checkbox' onChange={(e) =>{click_check(e)}} />
          <button className='dark:bg-purple-700   btn btn-primary rounded-2xl'>Start Free Trial</button>

          <select onChange={change_select} className='select bg-slate-500' >
          <option defaultValue value="en">eng</option>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            
          </select>

          <button className='btn btn-info' onClick={to_cart}>TO CART</button>
        </div>
       
        <div className='main max-w-[1440px] mx-auto pt-[70px] font-sans dark:text-white '>
          
            <div className='max-w-[852px] mx-auto  text-center'>
            <h3 className='text-2xl font-bold mb-6'>{t('Contact')}</h3>
            <h1 className='text-5xl font-bold mb-8'>Say <span className='text-blue-500'>Hello!</span> We’re always here to help.</h1>
            <p className='text-2xl font-normal'>{t('p')}</p>

            </div>

            <div className='max-w-[870px] flex flex-col gap-6 mx-auto mt-[100px] mb-24'>
              <div className='flex gap-8'>

                <div className='dark:bg-black px-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img1} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>{t('CALL')}</span>
                    <span className='text-3xl font-semibold'>+1 (214) 960 4130</span>
                  </div>
                </div>

                <div className='dark:bg-black pt-[28px] pb-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img2} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>{t('Email')}</span>
                    <span className='text-2xl font-semibold'>hello@aiinfo.com</span>
                  </div>
                </div>

              </div>

              <div className='dark:bg-black w-full pt-[28px] pb-[28px] pr-[80px] pl-[40px] flex items-center gap-[22.33px] bg-white rounded-md'>
                  <img src={img3} alt="" />
                  <div className='flex flex-col'>
                    <span className='text-2xl font-medium mb-2'>{t('HEADQUARTERS')}</span>
                    <span className='text-3xl font-semibold'>12720 Hillcrest Road Suite 980, Dallas, TX 75230</span>
                  </div>
                </div>

            </div>
        
        </div>
        <footer className='dark:bg-slate-500 footer max-w-[1440px]  mx-auto pt-[138px] pb-[138px] px-[305px] text-center mb-24 flex justify-center items-center '>
          <div>
            <h1 className='dark:text-black text-5xl font-semibold text-white '>{t('Sign')}</h1>
            <button className='dark:bg-purple-700 btn btn-primary mt-[49px] mx-auto'>Get Started for free</button>
          </div>
        </footer>

         
      </div>
    </div>
  )
}

export default Main