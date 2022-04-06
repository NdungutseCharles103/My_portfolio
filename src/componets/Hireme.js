import React from 'react'

const Hireme = () => {
  return (
      <>
    <div className="footer">
        <div className="needme" id="hireme">
            <h4>Hire Me</h4>
            <p>looking for a person with above skills? Contact me.</p>
            <div className="contacts-view">
                <div className="Contacts">
                    <img src="Images/Gmail-01.svg" alt=''/>
                    <p>Email me: <a href="https://mail.google.com/mail/u/0/#inbox">ndungutsecharles103@gmail.com</a></p>
                </div>
                <div className="Contacts">
                    <i id="phone" className="fas fa-phone-alt"></i>
                    <i id="phone" className="fab fa-whatsapp"></i>
                    <p>Tel & Whatsapp: +250 787853686</p>
                </div>
                <div className="Contacts">
                    <i id="git" className="fab fa-github"></i>
                    <p>GitHub: <a href="https://github.com/NdungutseCharles103">NdungutseCharles103</a></p>
                </div>
            </div>
        </div>
        <div className="website-right">
            <div className="foot-logo">CaRi</div>
            <div className="foot-copy">
                <p>©️ Charles 2022. All rights reserved.</p>
            </div>
            <div className="foot-icons">
                <address>&nbsp;&nbsp;&nbsp;Nyacyonga, Kigali, Rwanda</address>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hireme