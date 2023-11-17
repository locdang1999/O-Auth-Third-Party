import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { SUPABASE_KEY, SUPABASE_URL } from "../base";
import { useNavigate } from "react-router-dom";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // console.log(session)
      if (session) {
        // forward to success URL
        navigate("/success");
      } else {
        // forward to localhost:3000
        navigate("/");
      }
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      console.log(event);
      /**
       * Value "event"
       * 1. INITIAL_SESSION
       * 2. SIGNED_IN
       * 3. SIGNED_OUT
       */
      if (event === "SIGNED_IN") {
        // forward to success URL
        navigate("/success");
      } else {
        // forward to localhost:3000
        navigate("/");
      }
    });
    console.log(subscription);
    return subscription.unsubscribe();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord"]}
        />
      </header>
    </div>
  );

  //   const [session, setSession] = useState(null);

  //   useEffect(() => {
  //     supabase.auth.getSession().then(({ data: { session } }) => {
  //       console.log(session);
  //       setSession(session);
  //     });

  //     const {
  //       data: { subscription },
  //     } = supabase.auth.onAuthStateChange((_event, session) => {
  //       console.log(_event, session);
  //       setSession(session);
  //     });

  //     return () => subscription.unsubscribe();
  //   }, []);

  //   if (!session) {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <Auth
  //             supabaseClient={supabase}
  //             appearance={{ theme: ThemeSupa }}
  //             theme="dark"
  //             providers={["discord"]}
  //           />
  //         </header>
  //       </div>
  //     );
  //   } else {
  //     return <div>Logged in!</div>;
  //   }
};
