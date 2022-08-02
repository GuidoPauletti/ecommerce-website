import React from "react";
import { SingleProduct } from "../Common/SingleProduct";

const product = [
    {image:"assets/img/producto01.jpeg", title:"Hecho a mano", subtitle:"Especial para vos", description:" Pellentesque in interdum ligula. Nunc sit amet risus et sem dictum rhoncus vitae vitae mi. Proin fringilla dui ut sem tristique, vel rhoncus nunc cursus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."},
    {image:"assets/img/producto02.jpeg", title:"Aritos", subtitle:"A mi estilo", description:"Vivamus id diam sit amet enim consequat mollis. Fusce nibh dolor, auctor in pulvinar quis, maximus sed ex. Vestibulum tempus augue id tortor eleifend pulvinar. "},
    {image:"assets/img/producto03.jpeg", title:"Piedritas", subtitle:"Sleccionadas por mi", description:" Praesent pharetra augue est, vel mattis massa faucibus at. Ut pulvinar sollicitudin consequat. Aenean ut ante et leo molestie ultricies sagittis a felis."},
]

export const Products = () => (
    <div>
        {product.map((item, index) => (
            <SingleProduct
                {...item} key={index}
            />
        ))}
    </div>
)