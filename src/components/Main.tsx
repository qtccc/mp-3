import { ReactNode } from 'react';
import '../css/main.css'; // Import main styles

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => (
  <main>
    {children}
  </main>
);

export default Main;