/* "use client"; */

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "MMAPP",
  description: "Mapping MMA",
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