import * as Icon from "react-bootstrap-icons";
import "./styles.css";

const CartWidget = ({ itemCount, onClickCart }) => {
  return (
    <div className="CartWidget-container btn btn-dark" onClick={onClickCart}>
      <Icon.Cart2 />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
