import React from 'react';

import CustomizedTables from '@/components/CustomTable';
import FilterTable from '@/components/FilterTable';
import Navigation from '@/components/Navigation';
import LayersIcon from '@mui/icons-material/Layers';
import CameraIcon from '@mui/icons-material/Camera';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import KeyIcon from '@mui/icons-material/Key';
import ExtensionIcon from '@mui/icons-material/Extension';

type Props = {};

const navItems = [
  {
    name: 'Overview',
    Icon: LayersIcon
  },
  {
    name: 'Edge resources',
    Icon: CameraIcon,
    children: [
      {
        name: 'Nodes',
        Icon: BubbleChartIcon
      }
    ]
  },
  {
    name: 'Edge Deployments',
    Icon: ControlCameraIcon,
    children: [
      {
        name: 'Deployments',
        Icon: ExtensionIcon
      },
      {
        name: 'Configmaps',
        Icon: SettingsApplicationsIcon
      },
      {
        name: 'Secrets',
        Icon: KeyIcon
      }
    ]
  }
];

export default function test({}: Props) {
  return (
    <>
      <Navigation navItems={navItems} />
    </>
  );
}
