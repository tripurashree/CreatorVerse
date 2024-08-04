import { BrowserRouter as Router, useRoutes} from 'react-router-dom';
import ShowCreator from './pages/ShowCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import Header from './header';

const App = () =>{
  const routes = useRoutes([
    { path: "/", element: <ShowCreator/>},
    { path: "/creator/:id", element: <ViewCreator/>},
    { path: "/edit/:id", element: <EditCreator/>},
    { path: "/add", element: <AddCreator/>},
  ]);
  return (
    <>
    <Header/>
    {routes}
    </>
  );
};

export default function WrappedApp(){
  return(
    <Router>
      <App/>
    </Router>
  )
}