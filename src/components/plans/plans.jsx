
import Plan from "./plan/plan";
import s from "./plans.module.css"
import img1 from "../../img/plans/plansPng1.png"
import img2 from "../../img/plans/plansPng2.png"
import img3 from "../../img/plans/plansPng3.png"
import img4 from "../../img/plans/plansPng4.png"



function Plans() {

    let planArr =[
        {
            id:1,
            img:img1,
            txt1:"Միջոցառման սկիզբը",
            txt2:"Հարսի տուն",
            time:"13:00"
        },
        {
            id:2,
            img:img2,
            txt1:"Ֆոտոսեսիա",
            txt2:"Հուզիչ պահերը շարունակվում են",
            time:"15:00"
        },
        {
            id:3,
            img:img3,
            txt1:"Պսակադրություն",
            txt2:"Սուրբ Աստվածածին Եկեղեցի",
            time:"15:30"
        },
        {
            id:4,
            img:img4,
            txt1:"Հարսանյաց հանդիսություն",
            txt2:"«Արայի Ամրոց» ռեստորան",
            time:"18:00"
        },
    ]



    return ( <>
        <div className={s.plansBigDiv}>
            <div className={s.planText}>
                Ծրագիր
            </div>
            <div className={s.planDiv}>
                {
                    planArr.map((i) =>{
                        return <Plan key={i.id} data={i}/>

                    })
                }

            </div>
        </div>
    </> );
}

export default Plans;