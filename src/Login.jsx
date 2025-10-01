import { Button } from "@chakra-ui/react";
import { signInWithGoogle } from "./services/firebase";

export const Login = () => {
  return <Button onClick={signInWithGoogle}>Login</Button>;
};
