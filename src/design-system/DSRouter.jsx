import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import DSLayout from './DSLayout';

import FoundationsSection      from './sections/FoundationsSection';
import ButtonSection           from './sections/ButtonSection';
import IconButtonSection       from './sections/IconButtonSection';
import NotificationBadgeSection from './sections/NotificationBadgeSection';
import FeedbackSection         from './sections/FeedbackSection';
import ToggleSection           from './sections/ToggleSection';
import RadioSection            from './sections/RadioSection';
import CheckboxSection         from './sections/CheckboxSection';
import InputTextSection        from './sections/InputTextSection';
import IconsSection            from './sections/IconsSection';
import BadgeSection           from './sections/BadgeSection';
import StatCardSection        from './sections/StatCardSection';
import TableSection           from './sections/TableSection';
import NavItemSection         from './sections/NavItemSection';
import SidebarSection         from './sections/SidebarSection';
import LogoSection            from './sections/LogoSection';
import PaginationSection      from './sections/PaginationSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DSLayout />,
    children: [
      { index: true, element: <Navigate to="/foundations" replace /> },
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

export default function DSRouter() {
  return <RouterProvider router={router} />;
}
