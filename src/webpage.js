import './App.css'
import { useState } from "react"
import Bankimg from './Image/headerImg.jpg'
import googleBtn from './Image/googlePlayBtn.png'
import AppBtn from './Image/appleStoreBtn.png'
import visionImg from './Image/visionImage.jpg'
import missionImg from './Image/missionImg.png'
import Dollars from './Image/account1.png'
import DollarsImg from './Image/account2.png'
import Euros from './Image/dollars.jpg'
import EurosSafe from './Image/EurosInSafe.png'
import Bitcoin from './Image/naira.png'
import Naira from './Image/Bitcoin.png'
import testimonial1 from './Image/testimonials.jpg'
import testimonial2 from './Image/testimonials(1).jpg'
import testimonial3 from './Image/testimonials(2).jpg'
import testimonial4 from './Image/testimonials(3).jpg'
import testimonial5 from './Image/testimonials(5).png'
import testimonial6 from './Image/testimonials(6).png'




function Navbar(){
  const Style={
    nav:{
      width:'100%',
      display:'flex',
      justifyContent: 'space-between',
      alignItems:'center',
      padding: '.5rem'
    },
    listBtnCont:{
       display:'flex',
       width:'75%',
       justifyContent:'space-between',
       alignItems:'center',
       padding:'.5rem 0rem'
    },
    h1:{
           fontSize:'2rem'
        },
        span:{
          color: 'blue'
        },
        ul:{
          listStyle:'none',
          display:'flex',
          width:'22rem',
          justifyContent:'space-around'
        },
        li:{
            padding:'.5rem'
        },
        btn:{
            padding:'1rem',
            border: 'none',
            background:'blue',
            fontSize:'1rem',
            fontWeight: 'bold',
            borderRadius:'1rem',
            color:'white'
        },
        icon:{
          fontSize:'2rem',
          display:'none',
          background:'none',
          border:'none'
        },
        link:{
          color: 'black',
          textDecoration:'none'
        }
    }

const [displayMenu, setDisplayMenu]=useState(false)

  function displayIcon(){
    setDisplayMenu(!displayMenu)
  }

  function Help(){
    
    //USING THIS CAN SLOW THE BROWSERS

    // document.querySelectorAll('.links-item').forEach((link)=>{
    //   link.addEventListener('click', function (e){
    //     e.preventDefault();
    //     let r= link.getAttribute('href')
        
    //     document.querySelector(r).scrollIntoView({behavior:'smooth'})
    //   })
    // })

    document.querySelector('.navlist').addEventListener('click', (e)=>{
      e.preventDefault()
      
      if (e.target.classList.contains('links-item')){
        let link = e.target.getAttribute('href')
        document.querySelector(link).scrollIntoView({behavior:'smooth'})
        
      }
    })

  }

    return (
        <nav style={Style['nav']} className="navCont">
            <h1 style={Style['h1']}>PAY<span style={Style['span']}>ME</span></h1>
           
            <div style={Style['listBtnCont']} className="listCont" 
            >
            <ul style={Style['ul']} className="navlist" >
                <li style={Style['li']}  className="navCont-li" onClick={Help}><a href='#hero' style={Style['link']} className='links-item'>Personal</a></li>
                <li style={Style['li']}  className="navCont-li" onClick={Help}><a href='#Goals' style={Style['link']} className='links-item'>Goals</a></li>
                <li style={Style['li']}  className="navCont-li" onClick={Help}><a href='#Testimonies' style={Style['link']} className='links-item'>Testimonies</a></li>
                <li style={Style['li']}  className="navCont-li" onClick={Help}><a href='#Contact' style={Style['link']} className='links-item'>Contact</a></li>
            </ul>
            <button style={Style['btn']} className="openAcc" >Open Account</button>
            </div>
       
            <button className="menu-icon" style={Style['icon']}  onClick={displayIcon}><i className="fa-solid fa-bars"></i></button>
        </nav>
    )
}


function Hero(){
    const Styles={
        hero:{
            display:'flex',
            alignItems:'center',
            padding: '1rem',
            justifyContent:'center',
            alignItems:'center',
            gap:'2rem'
        },
        img:{
            width:'40rem'
        },
        text:{
            fontSize:'3rem',
            marginBottom:'2rem',
            color:'black', 
            textAlign:'center'
        },
        textCont:{
            width:'50rem'
        },
        textSpan:{
           color:'blue'
        },
        paragraph:{
            textAlign:'center',
            fontSize:'1.3rem'
        },
        btnCont:{
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           gap:'.5rem',
           marginTop:'2rem'
        },
        linkImg:{
            width:'10rem'
        }
    }
    return(
        <div style={Styles['hero']} className="hero-section" id='hero'>
            <img src={Bankimg} alt="Bank-img" style={Styles['img']} className='hero-img'/>
            <div style={Styles['textCont']} className='text-cont'>
              <h2 style={Styles['text']}>
                Transform Your Financial Journey with PAYME: <span style={Styles['textSpan']}>Simplify,
                 Secure, Succeed!</span></h2>
                <p style={Styles['paragraph']} className='heroParagraph'>
                    Seamlessly manage your money, effortlessly pay bills, shop 
                    with confidence, and take control of your financial future, 
                    all in one convenient PayME!
                </p>
                <div style={Styles['btnCont']}>
                <a href=""><img src={googleBtn} alt='' style={Styles['linkImg']}/></a>
                <a href=""><img src={AppBtn} alt='' style={Styles['linkImg']} /></a>
                </div>
            </div>
            
        </div>
    )
}


const Goals= function(){
   
  const Styles={
    Goals:{
        display: 'flex',
        marginTop: '2rem',
        justifyContent:'center',
        alignItems:'center',
        gap: '2rem',
        padding:'1rem',

    },
    img:{
        width:'100%'
    },
    textCont:{
        width:'40rem',
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:'1rem',
        gap:'1rem',
        height:'100%'
    },
    text:{
        fontSize:'1.7rem',
        marginBottom:'1rem',
        
    },
    Content:{
        fontSize:'1.2rem',
        lineHeight:'2rem'
    }
  }

  return(
    <div style={Styles['Goals']} className="Goals-cont" id='Goals'>
       <div style={Styles['textCont']}  className='missionVissionContainer'>
          <img src={visionImg} alt="visionImg"  style={Styles['img']} className='goalImg'/>
          <div style={Styles['Content']}>
            <h2 style={Styles['text']}>VISION:</h2>
              At PayME, we imagine a future where technology makes banking easier 
              for everyone. We're committed to creating a simple, safe, and affordable 
              way for you to manage your money. By focusing on what you need and using 
              the latest technology, we want to be the best digital bank out there. 
              Our goal is to help you control your finances effortlessly, so you can 
              achieve your dreams.
          </div>
       </div>
       
       <div style={Styles['textCont']} className='missionVissionContainer'>
         <img src={missionImg} alt="MissionImg" style={Styles['img']} className='goalImg'/>
         <div style={Styles['Content']}>
        <h2 style={Styles['text']}>MISSION:</h2>
            At PayME, we imagine a future where technology makes banking easier 
            for everyone. We're committed to creating a simple, safe, and affordable 
            way for you to manage your money. By focusing on what you need and using 
            the latest technology, we want to be the best digital bank out there. 
            Our goal is to help you control your finances effortlessly, so you can 
            achieve your dreams.
          </div>
       </div>
    </div>
  )
}


function Image(){
    const Styles={
        pictureGrid:{
            marginTop:'2rem'
        },
        h2text:{
          paddingLeft:'1rem'
        },
       imgContainer:{
         display:'grid',
         gridTemplateColumns: 'auto auto auto',
         marginTop:'1rem',
         padding: '1rem',
         gap:'2rem'
       },
       imgCont:{
        width: '100%',
        height: '90%',
       },
       img:{
          width:'100%',
          height:'100%',
       }
     }
    return(
        <div style={Styles['pictureGrid']} className="Currencies" id='Currencies'>
          <h2 style={Styles['h2text']}>YOU CAN OPEN ACCOUNT FOR DIFFERENT CURRENCIES:</h2>
        <div style={Styles['imgContainer']}>

               <div className="img" style={Styles['imgCont']}>
                 <img src={Naira} alt="img" style={Styles['img']} />
               </div>

            <div style={Styles['imgCont']}>
              <img src={Bitcoin} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={Dollars} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={Euros} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={DollarsImg} alt="img" style={Styles['img']}/>
            </div>

             <div style={Styles['imgCont']}>
              <img src={EurosSafe} alt="img" style={Styles['img']}/>
             </div>
        </div>
        </div>
    )
}

function Testimonials(){
    const Styles={
        pictureGrid:{
            marginTop:'2rem'
        },
        h2text:{
          paddingLeft:'1rem'
        },
       imgContainer:{
         display:'grid',
         gridTemplateColumns: 'auto auto auto',
         marginTop:'1rem',
         padding: '1rem',
         gap:'2rem'
       }, 
       imgCont:{
        width: '100%',
        height: '90%',
       },
       img:{
          width:'100%',
          height:'100%',
       }
    }
    return (
        <div style={Styles['pictureGrid']} id='Testimonies'>
               <h2 style={Styles['h2text']}>TESTIMONIALS FROM OUR CLIENT ALL OVER THE WORLD</h2>
        <div style={Styles['imgContainer']}>

               <div className="img" style={Styles['imgCont']}>
                 <img src={testimonial1} alt="img" style={Styles['img']} />
               </div>

            <div style={Styles['imgCont']}>
              <img src={testimonial2} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={testimonial3} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={testimonial4} alt="img" style={Styles['img']}/>
            </div>

            <div style={Styles['imgCont']}>
              <img src={testimonial5} alt="img" style={Styles['img']}/>
            </div>

             <div style={Styles['imgCont']}>
              <img src={testimonial6} alt="img" style={Styles['img']}/>
             </div>
        </div>
        </div>
    )
}

const ContactForm =function (){
    const Styles={
        form:{
            marginTop: '2rem',
            display:'flex',
            justifyContent:'space-between',
            padding:'1rem',
            gap:'1.3rem',
            background:''
        },
        bankForm:{
          width: '100%'
        },
        formCont:{
          display: 'flex',
          justifyContent:'space-between',
          marginTop:'1rem',
          flexDirection:'column'
        },
        formLabel:{
          width: '10rem',
          marginRight:'1rem',
          padding: '.5rem',
          marginBottom:'.2rem',
          fontSize:'1.5rem'
        },
        formInput:{
             flexGrow:'1',
            padding: '1rem',
            borderRadius: '1rem',
            border:'1px solid blue'
        },
        contactText:{
          width: '100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-around',
          fontSize:'1rem',
          padding:'0'
        },
        submit:{
          width:'100%',
          marginTop:'1rem',
          padding:'1rem',
          borderRadius:'1rem',
          background:'blue',
          border:'none',
          color:'white',
          fontSize:'1.3rem',
          fontWeight:'bold'
        },
        h1form:{
          width:'100%'
        },
        highlight:{
          color:'blue'
        }
    }
    return(
        <div style={Styles['form']} id='Contact' className='formCont'>   
              <form style={Styles['bankForm']}>
        {/* <h1 style={Styles['h1']}>Contact us to know more about our services:</h1> */}
                  <div style={Styles['formCont']}>
                    <label style={Styles['formLabel']}>Name:</label>
                    <input type='text' style={Styles['formInput']} placeholder='Name'></input>
                  </div>
                  <div style={Styles['formCont']}>
                    <label style={Styles['formLabel']}>PhoneNumber:</label>
                    <input type='text' style={Styles['formInput']} placeholder='08187653389'></input>
                  </div>
                  <div style={Styles['formCont']}>
                    <label style={Styles['formLabel']}>Email:</label>
                    <input type='text' style={Styles['formInput']} placeholder='123example@gmail.com'></input>
                  </div>
                 <input type='submit' value='Submit' style={Styles['submit']}/>
              </form>
              <div style={Styles['contactText']} className='textCont'>
                <h1 style={Styles['h1form']} className='textContp'>WE <span style={Styles['highlight']}>SECURE YOUR TRANSACTIONS</span> AND <span style={Styles['highlight']}>PERSONAL INFORMATION</span> </h1>
                <h1 style={Styles['h1form']} className='textContp'>WE <span style={Styles['highlight']}>SIMPLIFY</span> THE PROCESS MAKING BANKING <span style={Styles['highlight']}>EASY AND STRESSFREE</span></h1>
                <h1 style={Styles['h1form']} className='textContp'>KNOW MORE BY FIILINF THE FORM WE ARE HAPPING TO HELP</h1>
              </div>
            </div>
    )
}


function Footer(){

  const style={
    Footer:{
       textAlign:'center',
       marginTop:'1rem'
    }
  }
  return (
    <div style={style['Footer']}>
       @COPYRIGHT  2023
    </div>
  )
}
function Webpage(){
    return(
        <div>
           <Navbar/>
           <Hero />
           <Goals />
           <Image />
           <Testimonials />
           <ContactForm />
           <Footer />
        </div>
    )
}

export default Webpage