import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Catalogue from './pages/Catalogue/Catalogue';
import About_us from './pages/About_us/About_us';
import AddReservation from './components/AddReservation/AddReservation';
import AddClient from './components/AddClient/AddClient';
import Reservations_views from './components/Admins/Reservations_views/Reservations_views';
import Clients_Views from './components/Admins/Clients_views/Clients_views';
import Admins_views from './components/Admins/Admins_views/Admins_views';
import Tables from './components/Admins/Tables/Tables';
import Form_admin from './components/Admins/Form_admin/Form_admin';
import Menu from './components/Menu/Menu';
import Schelude from './components/Schedule/Schelude';
import Location from './components/Location/Location';
import ConfirmationReservation from './components/ConfirmationReservation/ConfirmationReservation'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Register></Register>
    },
    {
      path: "/cliente_reservar",
      element: <AddClient></AddClient>
    },
    {
      path: "/contactos",
      element: <Catalogue></Catalogue>
    },
    {
    path: "/nosotros",
    element: <About_us></About_us>
    },
    {
      path: '/reservar',
      element: <AddReservation></AddReservation>
    },
    {
    path: "/confirmacion",
    element: <ConfirmationReservation></ConfirmationReservation>
    },
    {
      path: '/admin_reservaciones',
      element: <Reservations_views></Reservations_views>
    },
    {
      path: '/admin_clientes',
      element: <Clients_Views></Clients_Views>
    },
    {
      path: '/admins',
      element: <Form_admin></Form_admin>
    },
    {
      path: '/admins_vistas',
      element: <Admins_views></Admins_views>
    },
    {
      path: '/admin_mesas',
      element: <Tables></Tables>
    },
    {
      path: '/horario',
      element: <Schelude></Schelude>
    },
    {
      path: '/ubicacion',
      element: <Location></Location>
    },
    {
      path: '/menu',
      element: <Menu></Menu>
    },


    // la pagina de 404 es siempre la ultima.
    {
      path: "/*",
      element: <NotFound></NotFound>
    },
  ])



  return (
    <>
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
    </>
    );
}

export default App;
