import React from 'react';

import Card from '../components/card';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

const baseURL = `${BASE_URL}jsonfake2/pedidos`;

function ListagemPedidos() {
  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-pedidos`);
  };

  const editar = (id) => {
    navigate(`/cadastro-pedidos/${id}`);
  };

  const [dados, setDados] = React.useState(null);

  async function excluir(id) {
    let data = JSON.stringify({ id });
    let url = `${baseURL}/${id}`;
    console.log(url);
    await axios
      .delete(url, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        mensagemSucesso(`Pedido excluído com sucesso!`);
        setDados(
          dados.filter((dado) => {
            return dado.id !== id;
          })
        );
      })
      .catch(function (error) {
        mensagemErro(`Erro ao excluir o pedido`);
      });
  }

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;
  return (
    <div className='container'>
      <Card title='Listagem de Pedidos'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                className='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Novo Pedido
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Código</th>
                    <th scope='col'>Valor Total</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Tipo de Entrega</th>
                    <th scope='col'>Data de Entrega</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.codigo}</td>
                      <td>{"R$" + dado.valorTotal.toFixed(2)}</td>
                      <td>{dado.status.charAt(0).toUpperCase() + dado.status.slice(1)}</td>
                      <td>{dado.tipoEntrega.charAt(0).toUpperCase() + dado.tipoEntrega.slice(1)}</td>
                      <td>{dado.dataEntrega === "" ? "---" : dado.dataEntrega}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction='row'>
                          <IconButton
                            aria-label='edit'
                            style={{ color: "white" }}
                            onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            style={{ color: "red" }}
                            onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ListagemPedidos;
