import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/main.scss';

const APP_CONTAINER = document.getElementById('app');

if (APP_CONTAINER) {
    const ROOT = createRoot(APP_CONTAINER);

    ROOT.render(<App />);
}
