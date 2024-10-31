import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Funcionarios from '../pages/Funcionarios';
import Clientes from '../pages/Clientes';
import FormCliente from '../pages/Clientes/form/FormCliente';
import FormFuncionario from '../pages/Funcionarios/forms';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />

      <MyRoute exact path="/clientes" component={Clientes} isClosed />
      <MyRoute exact path="/clientes/edit/:id" component={FormCliente} />
      <MyRoute exact path="/clientes/cadastrar" component={FormCliente} />

      <MyRoute exact path="/funcionarios" component={Funcionarios} isClosed />
      <MyRoute
        exact
        path="/funcionarios/edit/:id"
        component={FormFuncionario}
      />
      <MyRoute
        exact
        path="/funcionarios/cadastrar"
        component={FormFuncionario}
      />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
