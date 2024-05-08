
import s from "./footer.module.css"
import logo from "../../img/foooter/logo.png"
import messImg from "../../img/foooter/mess.png"
import phoneImg from "../../img/foooter/phone.png"
import ttImg from "../../img/foooter/tiktoc.png"
import inst from "../../img/foooter/insagram.png"



function Footer() {
    return ( <>
        <div className={s.footerBigDiv}>
            <div className={s.footerSmallDiv}>
                <div className={s.footerContent}>
                    <div className={s.logo}>
                        <img src={logo} className={s.logoImg}  alt="" />
                        <h1>WebWed</h1>
                    </div>



                    <div className={s.contact}>
                        <h1>Հետադարձ կապ</h1>
                        <div className={s.contactsDiv}>
                            <div>
                                <img src={messImg} alt="" />
                                <h1>webwedcompany@gmail.com</h1>
                            </div>
                            <div>
                                <img src={phoneImg} alt="" />
                                <h1> <br />  +374 96 50 31 02</h1>
                            </div>
                            
                        </div>

                    </div>


                    <div className={s.socialMedia}>

                        <h1>Սոց ցանցեր</h1>

                        <div>
                            <a href="https://www.tiktok.com/@WebWedcompany" target="_blank"><img src={ttImg} className={s.tiktoc} alt="" /></a>
                            <a href="https://www.instagram.com/_webwed_?igshid=NGVhN2U2NjQ0Yg==" target="_blank"><img src={inst} alt="" className={s.inst} /></a>
                        </div>


                    </div>

                </div>


                <div className={s.iconsBy}>
                    Icon by
                    <a href="https://www.freepik.com/icon/arch_7909417#fromView=search&term=Wedding&track=ais&page=1&position=2" target="_blanck"> madness</a> 
                    ,
                    <a href="https://www.freepik.com/icon/church_8447486#fromView=search&term=church&track=ais&page=1&position=38&uuid=d5394d77-1bc9-4666-a6f6-f9df9858df71" target="_blanck">Vector Squad</a>
                </div>

            </div>

        </div>
    
    </> );
}

export default Footer;
