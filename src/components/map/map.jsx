

import s from "./map.module.css"
import ekex from "../../img/map/ekexeci.jpg"
import rest from "../../img/map/rest.jpg"
import MapSmall from "./mapSmall/mapSmall";




function Map() {

    let mapArr = [
        {
            id:1,
            title:"Սուրբ Աստվածածին Եկեղեցի",
            img:ekex,
            map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48769.77939468408!2d44.44278444863281!3d40.184338400000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce3fa165abd%3A0x649724f070a14954!2z0KbQtdGA0LrQvtCy0Ywg0KHQstGP0YLQvtC5INCR0L7Qs9C-0LzQsNGC0LXRgNC4INCa0LDRgtC-0LPQuNC60LU!5e0!3m2!1sru!2sam!4v1702494037563!5m2!1sru!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id:2,
            title:"«Արայի Ամրոց» ռեստորան",
            img:rest,
            map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.2788722568557!2d44.49686674558802!3d40.225101335636644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd5501eab90b%3A0x2f73df1bc5f13783!2sArai%20Amroc!5e0!3m2!1sru!2sam!4v1702494076321!5m2!1sru!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
    
    ]


    return ( <>
        <div className={s.mapBigDiv}>
            {
                mapArr.map((i) => {
                    return <MapSmall key={i.id} data={i} />
                })
            }


        </div>
    
    </> );
}

export default Map;





























