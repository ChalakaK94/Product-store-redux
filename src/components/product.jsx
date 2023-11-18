import { useEffect, useState } from "react"
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function Products(){


    const [products, getProducts]= useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result => getProducts(result))
        // return () => {
        //     cleanup
        // };
    }, []);

    const cards = products.map(product=>(
        <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100" >
                <div className="text-align-center">
                    <Card.Img variant="top" src={product.image}  style={{width:'100px', height:'130px' }}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    USD: {product.Price}
                    </Card.Text>
                  
                </Card.Body>

                <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product List</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}