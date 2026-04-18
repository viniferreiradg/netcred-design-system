import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './styles/tokens.css';
import ClientesPage from './pages/Clientes/ClientesPage';

import DSLayout from './design-system/DSLayout';
import FoundationsSection       from './design-system/sections/FoundationsSection';
import ButtonSection            from './design-system/sections/ButtonSection';
import IconButtonSection        from './design-system/sections/IconButtonSection';
import NotificationBadgeSection from './design-system/sections/NotificationBadgeSection';
import FeedbackSection          from './design-system/sections/FeedbackSection';
import ToggleSection            from './design-system/sections/ToggleSection';
import RadioSection             from './design-system/sections/RadioSection';
import CheckboxSection          from './design-system/sections/CheckboxSection';
import InputTextSection         from './design-system/sections/InputTextSection';
import IconsSection             from './design-system/sections/IconsSection';
import BadgeSection             from './design-system/sections/BadgeSection';
import StatCardSection          from './design-system/sections/StatCardSection';
import TableSection             from './design-system/sections/TableSection';
import NavItemSection           from './design-system/sections/NavItemSection';
import SidebarSection           from './design-system/sections/SidebarSection';
import LogoSection              from './design-system/sections/LogoSection';
import PaginationSection        from './design-system/sections/PaginationSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/clientes" replace />,
  },
  {
    path: '/clientes',
    element: <ClientesPage />,
  },
  {
    path: '/design-system',
    element: <DSLayout />,
    children: [
      { index: true, element: <Navigate to="/design-system/foundations" replace /> },
      { path: 'foundations',        element: <FoundationsSection /> },
      { path: 'logo',               element: <LogoSection /> },
      { path: 'button',             element: <ButtonSection /> },
      { path: 'icon-button',        element: <IconButtonSection /> },
      { path: 'notification-badge', element: <NotificationBadgeSection /> },
      { path: 'feedback',           element: <FeedbackSection /> },
      { path: 'toggle',             element: <ToggleSection /> },
      { path: 'radio',              element: <RadioSection /> },
      { path: 'checkbox',           element: <CheckboxSection /> },
      { path: 'input-text',         element: <InputTextSection /> },
      { path: 'badge',              element: <BadgeSection /> },
      { path: 'icons',              element: <IconsSection /> },
      { path: 'stat-card',          element: <StatCardSection /> },
      { path: 'table',              element: <TableSection /> },
      { path: 'nav-item',           element: <NavItemSection /> },
      { path: 'sidebar',            element: <SidebarSection /> },
      { path: 'pagination',         element: <PaginationSection /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
