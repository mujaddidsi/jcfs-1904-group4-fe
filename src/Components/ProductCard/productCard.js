import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../Config/axios";

import "./style.css";
import { Card } from 'react-bootstrap';
import { Button } from '@mui/material';

function ProductCard(props) {
    const [cartId, setCartId] = useState([]);

    const { product_id, product_name, price, product_image_name } = props.products;
    const user_id = useSelector((state) => state.auth.user_id);

    const addToCartHandler = async () => {
        try {
            const res = await axios.get(`/cart/${user_id}/${product_id}`)
            const { cart } = res.data;

                if (cart) {
                    setCartId(cart.cart_id);
                } else {
                    const res = await axios.post(`/cart/add/${user_id}`)
                    const { insertId } = res.data;
                    setCartId(insertId)
                }
    
            if (cart) {
    
                try {
                    const resGet = await axios.get(`/cart/id/${user_id}`)
                    const { cart_id } = resGet.data;

                    const res = await axios.put(`/cart/quantity/${cart_id.cart_id}`,
                    {
                      product_id: product_id,
                      quantity: cart.quantity + 1
                    })
    
                    alert("Successfully updated cart")
                } catch (error) {
                    console.log(alert(error.message))
                }
    
            } else {
    
                try {
                    const resGet = await axios.get(`/cart/id/${user_id}`)
                    const { cart_id } = resGet.data;

                    const res = await axios.post(`/cart/details`,
                    {
                      cart_id: cart_id.cart_id,
                      product_id: product_id,
                      quantity: 1
                    })
    
                    alert("Successfully added to cart")
                } catch (error) {
                    console.log(alert(error.message))
                }
            }
        } catch (error) {
            console.log(alert(error.message))
        }
    };

    return (
        <div>
            <Card className="kartu" style={{ width: '250px', height: '450px', borderRadius: '5px', boxShadow: '0 4px 4px 0 rgb(0, 0, 0, 0.2)', backgroundColor: '#eaeaea', marginInline: '20px', marginBottom: '40px'}}>
                <Card.Img variant="top" src={product_image_name} style={{width: '248px', height: '248px', objectFit: 'cover'}}/>
                <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Subtitle style={{fontSize: '20px'}}>Rp. {price.toLocaleString('id-ID')}</Card.Subtitle>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        <Button variant="outlined" color="error" style={{width: '100%'}} href={`/products/${product_id}`}>
                            Details
                        </Button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        <Button variant="contained" color="success" style={{width: '100%'}} onClick={addToCartHandler}>
                            Add to Cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProductCard;