import React from 'react';
import useSWR from 'swr';

import OutlineCard from '../components/OutlineCard';

import api from '@/api';

const fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args)
    .then(res => res.json())
    .catch(err => console.log('err', err));

export default function Overview() {
  const { data: nodes, error: nodesError } = useSWR(api.nodes, fetcher);
  const { data: deployments, error: deploymentsError } = useSWR(
    api.deployments,
    fetcher
  );
  const { data: devices, error: devicesError } = useSWR(api.devices, fetcher);
  const { data: rules, error: rulesError } = useSWR(api.rules, fetcher);
  return (
    <OutlineCard
      contentArray={[
        { label: 'Nodes', value: nodes?.items?.length || 0 },
        { label: 'Deployments', value: deployments?.items?.length || 0 },
        { label: 'Devices', value: devices?.items?.length || 0 },
        { label: 'Rules', value: rules?.items?.length || 0 }
      ]}
    />
  );
}
