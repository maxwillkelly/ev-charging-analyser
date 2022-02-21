import { useQueryClient } from "react-query";
import { useCarStore } from "../stores/useCarStore";
import { useUserStore } from "../stores/useUserStore";

const useLogout = (): (() => void) => {
  const { reset } = useCarStore();
  const { logout } = useUserStore();
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries();
    reset();
    logout();
  };
};

export default useLogout;
