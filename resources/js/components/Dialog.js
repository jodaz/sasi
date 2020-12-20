import * as React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogActions
} from '@material-ui/core';
import { Button } from 'react-admin';
import IconCancel from '@material-ui/icons/Cancel';
import IconCheck from '@material-ui/icons/CheckCircleOutline';

export default function(props) {
    const {
        title,
        ariaLabel,
        fullWidth,
        handleClick,
        submitLabel,
        action,
        open
    } = props;

    return (
        <Dialog
            fullWidth={fullWidth && true}
            open={open}
            onClose={handleClick}
            aria-label={ariaLabel}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                <Button label="Cancelar" onClick={handleClick}>
                    <IconCancel />
                </Button>
                <Button
                    label={submitLabel ? submitLabel : 'Enviar'}
                    alignIcon="right"
                    onClick={() => {
                        handleClick();
                        action();
                    }}
                    color="primary"
                >
                    <IconCheck />
                </Button>
            </DialogActions>
        </Dialog>
    );
}