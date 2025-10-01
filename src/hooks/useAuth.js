// hooks/useAuth.tsx
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load auth state + profile
  useEffect(() => {
    const fetchUserAndProfile = async () => {
      setLoading(true);
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setError(authError?.message || "Not signed in");
        setLoading(false);
        return;
      }

      setUser(user);
      const { data: profile, error: profileError } = await supabase
        .from("user_profiles")
        .select("data")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.log("profileError: ", profileError);
        setError(profileError.message);
        setLoading(false);
        return;
      }

      setProfile(profile.data);
      setLoading(false);
    };

    fetchUserAndProfile();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setUser(null);
          setProfile(null);
        } else if (session?.user) {
          setUser(session.user);
        }
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;
    if (user) {
      await supabase.from("user_profiles").insert([{ id: user.id, data: {} }]);
      setUser(user);
      setProfile({});
    }

    setLoading(false);
    return user;
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setUser(data.user);

    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("data")
      .eq("id", data.user.id)
      .single();

    if (!profileError) {
      setProfile(profile.data);
    }

    setLoading(false);
    return data.user;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  const updateProfile = async (newData) => {
    if (!user) return;
    const { error } = await supabase
      .from("user_profiles")
      .upsert({ id: user.id, data: newData });

    if (!error) setProfile(newData);
    else setError(error.message);
  };

  return {
    user,
    profile,
    signUp,
    signIn,
    signOut,
    updateProfile,
    loading,
    error,
  };
}
