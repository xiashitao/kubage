import * as React from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { FormInputDate } from '@/components/form-components/FormInputDate';
import AddNodeModal from './components/AddNodeModal';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  render?: (value: any, record: any) => React.ReactNode;
}

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
];

export default function Nodes() {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [addModalVisible, setAddModalVisible] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    {
      id: 'name',
      label: 'Name/ID',
      minWidth: 170,
      render: (value: number, record) => (
        <Button
          variant="text"
          onClick={() => {
            router.push(`/nodes/${111}`);
          }}
        >
          {value}
        </Button>
      )
    },
    { id: 'code', label: 'Status', minWidth: 100 },
    {
      id: 'population',
      label: 'Host/Internet',
      minWidth: 170,
      align: 'right',
      render: (value: number) => value.toLocaleString('en-US')
    },
    {
      id: 'size',
      label: 'Create Time',
      minWidth: 170,
      align: 'right',
      render: (value: number) => value.toLocaleString('en-US')
    },
    {
      id: 'version',
      label: 'Version',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'density',
      label: 'Operation',
      minWidth: 170,
      align: 'right',
      render: (value: number, record) => <Button variant="text">Delete</Button>
    }
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleModalClose = () => {
    setAddModalVisible(false);
  };

  return (
    <Paper
      variant="outlined"
      square
      sx={{ width: 'calc(100% - 32px)', overflow: 'hidden', padding: '16px' }}
    >
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <SearchAppBar />
        <Button
          size="small"
          variant="contained"
          onClick={() => setAddModalVisible(true)}
        >
          Register
        </Button>
      </Paper>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.render ? column.render(value, row) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <AddNodeModal open={addModalVisible} handleClose={handleModalClose} />
    </Paper>
  );
}

const SearchAppBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: '1px solid #ccc'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
