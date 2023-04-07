import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { useForm, FieldValues } from 'react-hook-form';

import { FormInputText } from '@/components/form-components/FormInputText';

import { GlobalContext } from '@/pages/_app';

import api from '../api';

const defaultValues: FieldValues = {
  apiServer: '',
  token: ''
};

export default function Login() {
  const { toggleIsLogin } = React.useContext(GlobalContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, control } = useForm<FieldValues>({
    defaultValues: defaultValues
  });

  const onSubmit = (data: FieldValues) => {
    setLoading(true);
    fetch(api.nodes, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.apiVersion) {
          toggleIsLogin();
          router.push('/overview');
        }
      })
      .catch(err => {
        console.log('err', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      style={{
        display: 'grid',
        gridRowGap: '20px',
        maxWidth: '600px',
        padding: '120px 220px',
        margin: '0 auto'
      }}
    >
      <Typography variant="h6"> Welcome Kubeedge!</Typography>
      <FormInputText
        name="apiServer"
        control={control}
        label="APIServer Input"
        rules={{ required: true }}
      />
      <FormInputText
        name="token"
        control={control}
        label="Token Input"
        rules={{ required: true }}
      />
      <Button
        variant={'contained'}
        disabled={loading}
        startIcon={
          loading ? <CircularProgress size={20} color={'inherit'} /> : null
        }
        onClick={handleSubmit(onSubmit)}
      >
        {loading ? 'Verifying...' : 'Login in'}
      </Button>
      <Button variant={'outlined'} onClick={() => reset()}>
        Reset
      </Button>
    </Box>
  );
}
