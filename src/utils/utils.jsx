import { HomePage } from "../pages/HomePage";
import { CarsPage } from "../pages/CarsPage";
import { BookNowPage } from "../pages/BookNowPage";
import { TermsConditionsPage } from "../pages/TermsConditionsPage";


export const navbar = [
    {
        path: '/',
        element: <HomePage/>,
        name: "Home",
        id: 1
    },
    {
        path: '/cars',
        element: <CarsPage/>,
        name: "Cars",
        id: 2
    },
    {
        path: '/book',
        element: <BookNowPage/>,
        name: "Book Now",
        id: 3
    },
    {
        path: '/terms',
        element: <TermsConditionsPage/>,
        name: "Terms and Conditions",
        id: 4
    },
]