import type { ButtonProps } from "@mui/material/Button";
import { useCallback } from 'react';

const useDebouncedClick = (handler?: ButtonProps["onClick"], delay = 0) => {
  return useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!handler) return;
      if (delay <= 0) return handler(event);

      const timeout = setTimeout(() => {
        handler(event);
      }, delay);

      return () => clearTimeout(timeout);
    },
    [handler, delay]
  );
}

export default useDebouncedClick;