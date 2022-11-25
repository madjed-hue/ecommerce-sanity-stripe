import Link from "next/link";
import React from "react";

const Cancel = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p>You have just canceled your payment!</p>

        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
