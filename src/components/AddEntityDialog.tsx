import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface AddEntityDialogProps {
  isDialogVisible: boolean;
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddEntityDialog = (props: AddEntityDialogProps) => {
  return (
    <Dialog
      fullWidth
      open={props.isDialogVisible}
      onClose={props.onClose}
      PaperProps={{
        component: "form",
        onSubmit: props.onSubmit,
      }}
    >
      <DialogTitle component="h6">Add manually</DialogTitle>
      <DialogContent sx={{ padding: "8px 24px 8px 24px !important" }}>
        <CardContent
          sx={{
            padding: "8px 0 8px 0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            autoFocus
            InputLabelProps={{ shrink: true }}
            required
            name="name"
            label="Legal name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            InputLabelProps={{ shrink: true }}
            required
            name="address"
            label="Address"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            InputLabelProps={{ shrink: true }}
            name="city"
            label="City"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            InputLabelProps={{ shrink: true }}
            required
            name="country"
            label="Country"
            fullWidth
            variant="outlined"
          />
        </CardContent>
      </DialogContent>

      <DialogActions sx={{ margin: "0 1rem 1rem 1rem" }}>
        <Button onClick={props.onClose} color="secondary">
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
