import React from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/material";
import useDebouncedClick from "../../helper/useDebouncedClick";

export interface MuiButtonProps extends ButtonProps {
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  sx?: SxProps<Theme>;
  debounceMs?: number;
}

const Button: React.FC<MuiButtonProps> = ({
  debounceMs = 0,
  children,
  loading = false,
  disabled,
  fullWidth = false,
  rounded = false,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  sx,
  ...rest
}) => {

    const handleClick = useDebouncedClick(rest.onClick, debounceMs);

    return (
        <MuiButton
            variant={variant}
            color={color}
            size={size}
            disabled={disabled || loading}
            fullWidth={fullWidth}
            startIcon={loading ? <CircularProgress size={20} /> : startIcon}
            endIcon={!loading ? endIcon : undefined}
            onClick={loading ? undefined : handleClick}
            sx={{
                borderRadius: rounded ? "999px" : "4px",
                textTransform: "none",
                fontWeight: 500,
                ...sx,
            }}
            {...rest}
        >
            {loading ? "Loading..." : children}
        </MuiButton>
    );
}

export default Button;