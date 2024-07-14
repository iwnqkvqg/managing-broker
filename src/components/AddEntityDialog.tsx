import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { Entity } from "@/data/entities";
import { useDispatch, useSelector } from "@/store";
import {
  addEntity,
  closeAddEntityDialog,
  selectIsAddEntityDialogOpen,
  setCurrentEntity,
} from "@/store/managingBrokerSlice";

const AddEntityDialog = () => {
  const isAddEntityDialogOpen = useSelector(selectIsAddEntityDialogOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAddEntityDialog());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newEntity = Object.fromEntries(
      formData.entries(),
    ) as unknown as Entity;
    dispatch(addEntity(newEntity));
    dispatch(setCurrentEntity(newEntity));
    dispatch(closeAddEntityDialog());
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      open={isAddEntityDialogOpen}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle component="h6">Add manually</DialogTitle>
      <DialogContent sx={{ padding: "8px 24px 8px 24px !important" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "8px 0 8px 0",
          }}
        >
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            fullWidth
            label="Legal name"
            name="name"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            fullWidth
            label="Address"
            name="address"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            fullWidth
            label="City"
            name="city"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            fullWidth
            label="Country"
            name="country"
            variant="outlined"
          />
        </CardContent>
      </DialogContent>

      <DialogActions sx={{ margin: "0 1rem 1rem 1rem" }}>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEntityDialog;
