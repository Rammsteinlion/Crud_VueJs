const Home = () => import('./components/Home.vue');
const Contacto = () => import('./components/Contacto.vue');


//importamos los componentes para el blog
const Mostrar = () => import('./components/abono/Mostrar.vue');
const Editar = () => import('./components/abono/Editar.vue');
const Crear = () => import('./components/abono/Crear.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarAbonos',
        path: '/abonos',
        component: Mostrar
    },
    {
        name: 'crearAbono',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarAbono',
        path: '/editar/:id',
        component: Editar
    },
     {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    }
]

