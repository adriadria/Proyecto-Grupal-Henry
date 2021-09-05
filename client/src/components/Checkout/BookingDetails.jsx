import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  List,
  ListItem,
  Button,
  Typography,
  ListItemText,
} from "@material-ui/core";

const BookingDetails = ({ checkoutData, handleBackStep, handleNextStep }) => {
  const stateListProducts = useSelector((state) => state.cart.listProducts);
  const [Subtotal, setSubtotal] = useState(0);
  return (
  <>
    <List>
      {stateListProducts.map((item) => (
        <ListItem key={item.id}>
          {/* {setSubtotal(Subtotal*item.price*item.quantity)} */}
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
          <Typography variant="body2">
            {item.price*item.quantity}
          </Typography>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText primary="Total price" />
        <Typography variant="body2">
          {/* {checkoutData.live.subtotal.formatted_with_code} */}
          {Subtotal}
        </Typography>
      </ListItem>
    </List>

    <div className="actions">
      <Button
        size="medium"
        onClick={(e) => handleBackStep(e, "order-address")}
        variant="contained"
      >
        Go Back
      </Button>
      <Button
        onClick={(e) => handleNextStep(e, "order-payment")}
        size="medium"
        color="secondary"
        variant="contained"
      >
        Next
      </Button>
    </div>
  </>
  )
}

export default BookingDetails;
