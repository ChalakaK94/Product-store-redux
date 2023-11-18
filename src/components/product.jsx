import { useEffect } from "react"
import { Alert, Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";


export default function Products(){

    const d = useDispatch();
    const {data:products,status} = useSelector(state=> state.products)

    useEffect(() => {
       d(getProducts())
    }, []);

  function addToCart(product){
        d(add(product))
    }

    if(status === StatusCode.LOADING){
        return <div>Loading...</div>
    }

    if(status === StatusCode.ERROR){
        return <Alert key="danger" variant="danger">Something went wrong, Please try again!</Alert>
    }
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
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
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