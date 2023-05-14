import { InfoCircle } from 'tabler-icons-react';
import { Tooltip } from '@mantine/core';
import React from 'react';

type Props = {
  label: string;
}

export const Info: React.FC<Props> = ({ label }) => {
  return (
    <Tooltip label={label}>
      <span>
        <InfoCircle size={20} />
      </span>
    </Tooltip>
  )
}

