import { createBrowserRouter } from 'react-router-dom';
import Root from '@routes/root';
import Home from '@routes/home';
import Welcome from '@welcome/welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Welcome isDarkMode={true} />,  // Ensure this is properly passed
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

export default router;
