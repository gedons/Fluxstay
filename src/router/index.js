import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import BookingView from "../views/BookingView.vue";
import DashboardLayout from "../components/DashboardLayout.vue";


  const routes = [
        {
            path: "/",
            name: 'Login',
            component: Login
        },
        {
            path: "/",
            redirect: "/dashboard",
            component: DashboardLayout,
            meta: { requiresAuth: true},
            children: [
                { path: "/dashboard", name: "Dashboard", component: Dashboard },   
                { path: "/dashboard/booking/create", name: "BookingCreate", component: BookingView },                           
            ]
        },      
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    });
    
      router.beforeEach((to, from, next) => {
        const userData = localStorage.getItem('userData');
        if (to.path === '/dashboard') {
            if (userData) {
            next();
            } else {
            next({ name: "Login" }); 
            }
        } else {
            next(); 
        }        
      });
    
    

export default router
