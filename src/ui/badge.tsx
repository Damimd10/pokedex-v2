import React from 'react';

import { Text, View } from './index';

interface BadgeProps {
  backgroundColor: string;
  children: React.ReactNode;
}

export const Badge = ({ backgroundColor, children }: BadgeProps) => {
  return (
    <View
      className="mx-0.5 inline-flex items-center rounded-md px-2 py-1 ring-1 ring-inset"
      style={{ backgroundColor: backgroundColor }}
    >
      <Text className="text-xs font-medium text-gray-50">{children}</Text>
    </View>
  );
};
