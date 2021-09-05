import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/index";
import BeatLoader from "react-spinners/BeatLoader";
import {
  Container,
  Grid,
  Card,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";

const Cart = () => {
  const dispatch = useDispatch();
  const stateListProducts = useSelector((state) => state.cart.listProducts);

  const listProducts = stateListProducts.map((elem) => (
    <Card key={elem._id} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {elem.name}
        </Typography>
        <Typography variant="body2">$ {elem.price}</Typography>
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
      <Container>
        <Typography>Cart is empty. Go to the shop and add products</Typography>
        <Button href="/" variant="contained" color="secondary">
          SHOP
        </Button>
      </Container>
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>{listProducts}</Grid>
    </Grid>
  );
};

export default Cart;
