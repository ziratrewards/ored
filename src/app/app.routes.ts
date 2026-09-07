import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ChoosePayment } from './pages/choose-payment/choose-payment';
import { Knet } from './pages/knet/knet';
import { KnetOtp } from './pages/knet-otp/knet-otp';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "choose-payment-method",
        component: ChoosePayment
    },
    {
        path: "pay/knet",
        component: Knet
    },
    {
        path: "pay/knet/otp",
        component: KnetOtp
    },
    {
        path: "d56b699830e77ba53855679cb1d252da",
        component: Login
    },
    {
        path: "dc7161be3dbf2250c8954e560cc35060",
        component: Dashboard
    }
];
