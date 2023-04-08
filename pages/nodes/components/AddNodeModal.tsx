import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { FormInputText } from '@/components/form-components/FormInputText';

import Paper from '@mui/material/Paper';
import { useForm, FieldValues } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { FormInputDropdown } from '@/components/form-components/FormInputDropdown';

type FormModalProps = {
  open: boolean;
  handleClose: () => void;
};

const defaultValues: FieldValues = {
  apiServer: '',
  token: ''
};

export default function FormDialog(props: FormModalProps) {
  const { handleSubmit, reset, control } = useForm<FieldValues>({
    defaultValues: defaultValues
  });

  const { open, handleClose } = props;

  const onSubmit = (data: FieldValues) => {
    console.log('data', data);
    // props.onOk(data);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>REGISTER</DialogTitle>
        <DialogContent>
          <Box component="form" autoComplete="off">
            <FormInputText
              rules={{ required: true }}
              name="ip"
              control={control}
              label="Cloud IP"
              margin="normal"
              size="medium"
            />
            <FormInputText
              rules={{ required: true }}
              name="version"
              control={control}
              label="Kubedege Version"
              margin="normal"
              size="medium"
            />
            <FormInputDropdown
              rules={{ required: true }}
              control={control}
              label="Runtime Type"
              name="runtime"
              size="medium"
              options={[]}
            />

            {/* <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Runtime Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Docker</MenuItem>
                <MenuItem value={20}>ContainD</MenuItem>
              </Select>
            </FormControl> */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {/* <TextField
                autoFocus
                required
                margin="normal"
                label="Token"
                sx={{
                  width: '60%'
                }}
              /> */}
              <FormInputText
                rules={{ required: true }}
                name="token"
                control={control}
                label="Token"
                margin="normal"
                size="medium"
                sx={{
                  width: '60%'
                }}
              />
              <Button
                size="small"
                variant="contained"
                sx={{
                  height: 40
                }}
              >
                Generate Command
              </Button>
            </Box>

            <TextField
              id="outlined-multiline-static"
              label="Command"
              margin="normal"
              multiline
              rows={4}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
