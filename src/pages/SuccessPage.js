import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { SUPABASE_KEY, SUPABASE_URL } from "../base";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const SuccessPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((val) => {
        console.log(val);
        //value.data.user
        if (val.data?.user) {
          setUser(val.data?.user);
        }
      });
    }
    getUserData();
  }, []);

  const hanldeLogout = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  };
  console.log(Object.keys(user))
  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>SuccessPage</h1>
            <button onClick={hanldeLogout} style={{ height: "30px" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>User is not logged in</h1>
            <button onClick={()=>navigate("/")} style={{ height: "30px" }}>
              Go back home!
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default SuccessPage;
