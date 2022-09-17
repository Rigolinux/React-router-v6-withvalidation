import { Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFoundUtility({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
export default RoutesWithNotFoundUtility;