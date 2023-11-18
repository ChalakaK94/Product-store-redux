import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice";

export default function Cart(){
    const cartData = useSelector(state => state.cart);
    const d = useDispatch();

    function removeItem(id){
        d(remove(id))
    }

    const cards = cartData.map(product=>(
        <div className="col-md-12" style={{marginBottom:'10px'}}>
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
                    <Button variant="danger"  onClick={()=> removeItem(product.id)}
                    >Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return(
        <div>{cards}</div>
    )
}