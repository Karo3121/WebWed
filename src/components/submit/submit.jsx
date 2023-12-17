
import s from "./submit.module.css"

function Submit() {
    return ( <>
        <div className={s.submitBigDiv}>
            <div className={s.subSmallDiv}>

                <h1 className={s.h1HraverBIg}>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h1>
                <p>Կսպասենք պատասխանի մինչև 19.01.2024</p>
                <form action="https://formspree.io/f/mgejgwbq" method="POST" className={s.inputSend}> 
                    <div className={s.radioBigDiv}>
                        
                        <div className={s.radioDiv}>
                            <input type="radio" name="ներկայությունը" required className={s.inpRadio} id="radio1"  value="Կգամ"/>
                            <p>Կգամ</p>
                        </div>
                        
                        <div className={s.radioDiv}>
                            <input type="radio" name="ներկայությունը" required className={s.inpRadio} id="radio2"  value="Չեմ կարողանա գալ"/>
                            <p>Չեմ կարողանա գալ</p>
                        </div>

                    </div>

                
                    <p>Խնդրում ենք նշեք ձեր անուն-ազգանունը և հյուրերի թիվը</p>

                
                    <input type="text" name="Անուն" required className={s.inp} placeholder="Անուն Ազգանուն" id="inps" />
                    <button type="submit" className={s.btn} id="btn">Ուղարկել</button>
                </form>


                </div>
        </div>
    </> );
}

export default Submit;