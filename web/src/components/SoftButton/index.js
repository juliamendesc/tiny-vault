/**
=========================================================
* Soft UI Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { HTMLAttributes, forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for SoftButton
import SoftButtonRoot from "@/components/SoftButton/SoftButtonRoot";

const SoftButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
    <SoftButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </SoftButtonRoot>
  )
);

// Setting default values for the props of SoftButton
SoftButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
  fullWidth: false,
  disabled: false,
  onClick: () => {},
  ownerState: {},
};

// Typechecking props for the SoftButton
SoftButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  fullWidth: PropTypes.bool, // Define the fullWidth prop
  disabled: PropTypes.bool, // Define the disabled prop
  onClick: PropTypes.func, // Define the onClick prop
  children: PropTypes.node.isRequired,
};

export default SoftButton;
