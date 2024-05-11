import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
} from 'react-icons/md';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Patient',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'add-patient',
  },
  {
    name: 'Patient List',
    layout: '/admin',
    path: 'patient-list',
    icon: <MdPerson className="h-6 w-6" />,
  }
];
export default routes;
