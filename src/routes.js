import PrivateRoute from "./components/PrivateRoute";
import Layout from "./pages/DeveloperArea/pages/Layout";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";

const routes =  [
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            // {
            //     index:true,
            //     element:<Home></Home>
            // },
            // {
            //     path:'layout',
            //     auth:true,
            //     element:<Layout></Layout>
            // }
        ]
    }
]

const authCheck = routes => routes.map(route=>{
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authCheck( route.children)
    }
    return route
})


export default authCheck(routes);