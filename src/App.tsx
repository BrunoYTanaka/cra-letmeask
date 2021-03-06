import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { AuthProvider } from './context/AuthContext'
import { AdminRoom } from './pages/Admin-Room';
import { Room } from './pages/Room';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={NewRoom} path="/rooms/new" />
          <Route component={Room} path="/rooms/:id" />
          <Route component={Room} path="/rooms/:id" />
          <Route component={AdminRoom} path="/admin/rooms/:id" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
