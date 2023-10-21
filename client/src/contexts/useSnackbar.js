import { createContext, forwardRef, useContext, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarContext = createContext();

export function SnackBarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [message, setMessage] = useState(false);

  const showSnackbar = (message, severity = "success") => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <SnackBarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackBarContext);
}
