export default {
  nodes: '/api/v1/nodes',
  node: '/api/v1/nodes/{nodeId}',

  deployments: '/apis/apps/v1/namespaces/default/deployments',

  devices: '/apis/devices.kubeedge.io/v1alpha2/namespaces/default/devices',

  deviceModels:
    '/apis/devices.kubeedge.io/v1alpha2/namespaces/default/devicemodels',

  rules: '/apis/rules.kubeedge.io/v1/namespaces/default/rules'
};
