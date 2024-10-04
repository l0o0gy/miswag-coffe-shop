import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function FormDialog({ open, onClose, selectedCup, coffeeCount, coffeePrice, data, id ,name}) {
    const [showAlert, setShowAlert] = React.useState(false);

    const handleSubmit = (event) => {

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            onClose();
        }, 3000);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                }}
            >
                <DialogTitle>Your Order</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are ordering {coffeeCount} cup(s) of {data.name}. Cup size: {selectedCup?.toUpperCase()}.
                        <br />
                        Total Price: {coffeePrice} IQD.
                        <br />
                        Please enter your phone number and address to complete the order.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        required
                        margin="dense"
                        id="address"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit">Order Now</Button>
                </DialogActions>
            </Dialog>
            {showAlert && (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Thank you for ordering from Miswag! Our team will contact you within a few minutes.
                </Alert>
            )}
        </React.Fragment>
    );
}