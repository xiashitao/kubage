import React from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Stack } from '@mui/material';

export default function NodeDetail(props: any) {
  const router = useRouter();
  const { nodeId } = router.query;
  console.log('nodeId', nodeId);
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        width: 'calc(100% - 32px)',
        padding: '16px',
        height: 'calc(100% - 32px)'
      }}
    >
      <Box sx={{ width: 'calc(100% - 32px)', padding: '16px' }}>
        <Stack direction="row" sx={{ padding: '8px 0' }}>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Stack direction="row" spacing={8}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography alignItems="center" variant="body1" component="div">
                  Name:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  节点
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={4}>
                <Typography variant="body1" component="div">
                  Status:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  故障
                </Typography>
              </Stack>
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography variant="body1" component="div">
                  ID:
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  dc58947
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Button variant="contained">View Yaml</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            Annotations:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            Create Time:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2023-12-12 12:12:12
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          width: 'calc(100% - 32px)',
          marginTop: '60px',
          height: '70%',
          padding: '16px',
          border: '1px solid #ccc'
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Node Detail
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            Host:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ubuntu
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            System:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ubuntu 18.04.6 LTS x86_64 Linux 5.4.0-1041-aws
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            Internet (Adapter:IP):
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2023-12-12 12:12:12
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography variant="body1" component="div">
              Specification:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2 Core 4G
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Typography variant="body1" component="div">
              Container Runtime Version:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              docker 20.10.7
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ padding: '8px 0' }}
        >
          <Typography variant="body1" component="div">
            Edge Side Software Version:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1.0.0
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
