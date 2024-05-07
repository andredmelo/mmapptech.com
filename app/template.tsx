/* "use client"; */

import { Metadata } from 'next';
export const MetaData: Metadata = {
  title: "MMAPP",
  description: "Mapping MMA, This should work",
  creator: 'André Melo',
};

export default function Template({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
      <div>
        {children}
      </div>
  )
}