import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function AdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser?.email === "okumusteve21@gmail.com" || currentUser?.email === "lauraomondi23@gmail.com" || currentUser?.email === "cyrilmwalimuke@gmail.com" ? <Outlet /> : <Navigate to='/login' />;
}