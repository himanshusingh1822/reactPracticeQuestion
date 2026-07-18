import {createBrowserRouter} from 'react-router'
import SearchDebounce from './questions/debouncing/SearchDebounce';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<main> <h1>React Coding Questions</h1> </main>
    },
    {
        path:'/searchDebounce',
        element:<SearchDebounce />
    }
])