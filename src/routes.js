import PrivateRoute from "./components/PrivateRoute";
import DhiHairTransplant from "./pages/DeveloperArea/pages/DhiHairTransplant";
import Fihair from "./pages/DeveloperArea/pages/Fihair";
import HairTransplant from "./pages/DeveloperArea/pages/HairTransplant";
import Layout from "./pages/DeveloperArea/pages/Layout";
import Mezoterapi from "./pages/DeveloperArea/pages/Mezoterapi";
import SafirFueHairTranplant from "./pages/DeveloperArea/pages/SafirFueHairTranplant";
import Prp from "./pages/DeveloperArea/pages/Prp";
import MainLayout from "./pages/MainLayout";
import ContactPage from "./pages/DeveloperArea/pages/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HairSimulation from "./pages/DeveloperArea/pages/HairSimulation";

const routes =  [
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Layout></Layout>
            },
            {
                path:"hakkimizda",
                element:<Fihair></Fihair>
            },
            {
                path:"sac-ekimi",
                element:<HairTransplant></HairTransplant>
            },
            {
                path:"teknikler/dhi",
                element:<DhiHairTransplant></DhiHairTransplant>
            },
            {
                path:"teknikler/safir-fue",
                element:<SafirFueHairTranplant></SafirFueHairTranplant>
            },
            {
                path:"hizmetler/sac-ekimi",
                element:<HairTransplant></HairTransplant>
            },
            {
                path:"hizmetler/sac-analizi",
                element:<HairTransplant></HairTransplant>
            },
            {
                path:"hizmetler/mezoterapi",
                element:<Mezoterapi></Mezoterapi>
            },
            {
                path:"hizmetler/prp",
                element:<Prp></Prp>
            },
            {
                path:"hizmetler/sac-simulasyonu",
                element:<HairSimulation></HairSimulation>
            },
            {
                path:"contact",
                element:<ContactPage></ContactPage>
            },
            {
                path:"privacy-policy",
                element:<PrivacyPolicy></PrivacyPolicy>
            },
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