import React from 'react';
import 'bootswatch/dist/slate/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          Pharma
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-funcionarios'
              label='Funcionários'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem 
              render='true' 
              href='/listagem-farmacias' 
              label='Farmácias' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-produtos'
              label='Produtos'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-estoques'
              label='Estoque'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem 
              render='true' 
              href='/listagem-categorias' 
              label='Categorias' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-clientes'
              label='Clientes'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-pedidos'
              label='Pedidos'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-cargos'
              label='Cargos'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem 
              render='true' 
              href='/login' 
              label='Entrar' 
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem 
              render='true' 
              href='/' 
              label='Sair' 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;