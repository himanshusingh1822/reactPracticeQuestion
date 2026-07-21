import {createBrowserRouter} from 'react-router'
import SearchDebounce from './questions/debouncing/SearchDebounce';
import ModelApp from './questions/reusableModal/ModelApp';
import PaginationApp from './questions/pagination/PaginationApp';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<main> <h1>React Coding Questions</h1> </main>
    },
    {
        path:'/searchDebounce',
        element:<SearchDebounce />
    },
    {
        path:'/reusableModel',
        element:<ModelApp/>
    },
    {
        path:'/pagination',
        element:<PaginationApp />
    }
])