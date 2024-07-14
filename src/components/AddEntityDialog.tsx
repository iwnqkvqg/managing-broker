import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Entity } from "@/components/EntityInfo";
import { addEntity } from "@/services/managingBrokerApi";
import { useDispatch, useSelector } from "@/store";
import {
  setCurrentEntity,
  closeAddEntityDialog,
  selectIsAddEntityDialogOpen,
} from "@/store/managingBrokerSlice";
import { Country } from "@/data/country";

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
    addEntity(newEntity)
      .then(() => {
        dispatch(setCurrentEntity(newEntity));
        dispatch(closeAddEntityDialog());
      })
      .catch(console.error);
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
      <DialogTitle component="h6">New Legal Entity</DialogTitle>
      <Typography
        color="secondary"
        sx={{ paddingX: "24px", position: "relative", top: "-1rem" }}
        variant="body2"
      >
        All fields are required
      </Typography>
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
            InputLabelProps={{ shrink: true, required: false }}
            autoComplete="off"
            autoFocus
            fullWidth
            label="Name"
            name="name"
            placeholder="Microsoft"
            required
            variant="outlined"
          />
          <TextField
            InputLabelProps={{ shrink: true, required: false }}
            autoComplete="off"
            fullWidth
            label="Address"
            name="address"
            placeholder="47 Quai d'Issy-les-Moulineaux"
            required
            variant="outlined"
          />
          <TextField
            InputLabelProps={{ shrink: true, required: false }}
            fullWidth
            label="City"
            name="city"
            placeholder="Paris"
            required
            variant="outlined"
          />
          <Autocomplete
            fullWidth
            options={Object.values(Country)}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{ shrink: true, required: false }}
                fullWidth
                label="Country"
                name="country"
                placeholder="France"
                required
                variant="outlined"
              />
            )}
          />
        </CardContent>
      </DialogContent>

      <DialogActions sx={{ margin: "0 1rem 1rem 1rem" }}>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEntityDialog;
