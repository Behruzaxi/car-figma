import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsConditionsPage } from "../pages/TermsConditionsPage";



export const navbar = [
    {
        path: `/home`,
        element: <HomePage />,
        name: "HomePage",
        id: 1
    },
    {
        path: `/cars`,
        element: <CarsPage />,
        name: "CarsPage",
        id: 2
    },
    {
        path: `/book`,
        element: <BookNowPage />,
        name: "BookNowPage",
        id: 3
    },
    {
        path: `/terms`,
        element: <TermsConditionsPage />,
        name: "TermsConditionsPage",
        id: 4
    }
]