import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HeroUIProvider} from '@heroui/react'
import { TodoStore } from './stores/todoStore.jsx'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <HeroUIProvider>
    <Provider store={TodoStore}>
    <App />
    </Provider>
  </HeroUIProvider>
  ,
);
