import LayersIcon from '@mui/icons-material/Layers';
import CameraIcon from '@mui/icons-material/Camera';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import KeyIcon from '@mui/icons-material/Key';
import ExtensionIcon from '@mui/icons-material/Extension';

export const NavItems = [
  {
    name: 'Overview',
    Icon: LayersIcon,
    path: '/overview'
  },
  {
    name: 'Edge resources',
    Icon: CameraIcon,
    children: [
      {
        name: 'Nodes',
        Icon: BubbleChartIcon,
        path: '/test'
        // path: '/nodes'
      }
    ]
  },
  {
    name: 'Edge Deployments',
    Icon: ControlCameraIcon,
    children: [
      {
        name: 'Deployments',
        Icon: ExtensionIcon,
        path: '/deployments'
      },
      {
        name: 'Configmaps',
        Icon: SettingsApplicationsIcon,
        path: '/configmaps'
      },
      {
        name: 'Secrets',
        Icon: KeyIcon,
        path: '/secrets'
      }
    ]
  }
];
