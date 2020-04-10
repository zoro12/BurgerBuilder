import React,{Component} from "react";
import Aux from "../../../hoc/Aux1/Aux1";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('OrderSummary did update');
}

  render(){

    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
  
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Total Price: </p>
        <p>
          <strong>Continue to Checkout?{this.props.price}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
      </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
      </Button>
      </Aux>
    );
  }
};

export default OrderSummary;
