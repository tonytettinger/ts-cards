import { Cards } from "./Cards";
import { Container, Box, Heading } from "@chakra-ui/react";
import { Login } from "./Login";
import { useState, useEffect } from "react";
import { auth } from "./services/firebase";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import { supabase } from "./services/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

// const fetchToken = async () => {
//   const user = auth.currentUser;
//   if (user) {
//     const token = await user.getIdToken();
//     console.log("Token:", token);
//   }
// };

export default function App() {
  // const [token, setToken] = useState(null);
  // const [user, setUser] = useState(null);

  // const { session, loading } = useAuth();

  return (
    <Container maxW="900px" bg="white">
      <Box as="section">
        {/* {session ? (
          <div>Session</div>
        ) : (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        )} */}
        <Heading as="h1" size="xl" p="2">
          Twilight Struggle Cards
        </Heading>
        <Cards />
      </Box>
    </Container>
  );
}
