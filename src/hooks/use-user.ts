import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store';

export default function useUser() {
  return useSelector(selectCurrentUser);
}
