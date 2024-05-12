// 'use client';
// import React, { ReactNode } from 'react';
// import 'styles/App.css';
// import 'styles/Contact.css';
// // import '@asseinfo/react-kanban/dist/styles.css';
// // import 'styles/Plugins.css';
// import 'styles/MiniCalendar.css';
// import 'styles/index.css';

// import dynamic from 'next/dynamic';

// const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

// const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
//   ssr: false,
// });

// export default function AppWrappers({ children }: { children: ReactNode }) {
//   // @ts-expect-error
//   return <NoSSR>{children}</NoSSR>;
// }


'use client';
import React, { ReactNode } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
// import '@asseinfo/react-kanban/dist/styles.css';
// import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';
import 'styles/index.css';

import dynamic from 'next/dynamic';

// Define a placeholder component for NoSSR
const _NoSSR = ({ children }: any) => <React.Fragment>{children}</React.Fragment>;

// Dynamically import the NoSSR component with ssr option set to false
const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

// Define AppWrappers component to wrap children with NoSSR
export default function AppWrappers({ children }: { children: ReactNode }) {
  return <NoSSR>{children}</NoSSR>;
}
