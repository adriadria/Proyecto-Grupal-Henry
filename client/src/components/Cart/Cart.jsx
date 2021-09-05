import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../../redux/actions/index";
import BeatLoader from "react-spinners/BeatLoader";
import {
  Container,
  Grid,
  Card,
  Button,
  Typography,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";

const Cart = () => {
  const dispatch = useDispatch();
  const stateListProducts = useSelector((state) => state.cart.listProducts);

  const listProducts = stateListProducts.map((elem, idx) => (
    <Card key={idx} style={{ margin: 20, padding: 20 }} variant="outlined">
      <CardContent>
        <img src={elem.image_url} alt={elem.name} width="200" height="200" />
        <Typography variant="h5" component="h2">
          {elem.name}
        </Typography>
        <Typography variant="body2">Precio: $ {elem.price * elem.quantity}</Typography>
        <Typography>Cantidad: {elem.quantity}</Typography>
        <ButtonGroup disableElevation variant="contained">
          <Button
            color="primary"
            onClick={() =>
              dispatch(updateQuantity({ id: elem._id, value: "max" }))
            }
          >
            +
          </Button>
          <Button
            color="primary"
            onClick={() =>
              dispatch(updateQuantity({ id: elem._id, value: "min" }))
            }
          >
            -
          </Button>
        </ButtonGroup>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(removeFromCart(elem._id))}
      >
        Remove
      </Button>
    </Card>
  ));

  if (!listProducts) {
    return <BeatLoader />;
  }
  if (!listProducts.length) {
    return (
      <Container style={{ margin: 50 }}>
        <Typography>Cart is empty. Go to the shop and add products</Typography>
        <Link to="/">
          <Button style={{ margin: 50 }} variant="contained" color="secondary">
            SHOP
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Grid container justifyContent="center">
      <Link to="/">
        <Button variant="contained" color="primary">
          Volver
        </Button>
      </Link>
      <Grid item style={{ margin: 20 }}>
        {/* Precio total: {total} */}
        {listProducts}
        <Grid item>
          {listProducts.length && (
            <Link to="/checkout">
              <Button
                style={{ margin: 30 }}
                variant="contained"
                color="primary"
              >
                CHECKOUT
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
