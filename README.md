# O-Auth-Third-Party
Login with Google, Facebook, Discord, Github,....

Use supabase to login with Discord

npm i
npm start

https://supabase.com/
https://discord.com/developers

*craete connect discord to supabase

npx create-react-app project-name
npm i @supabase/auth-ui-react @supabase/auth-ui-shared @supabase/supabase-js react-router-dom

Note create env with create-react-app 

** Link github https://gist.github.com/Haugen/f6d685f18b4bd8a3cf5bcf6272577c5b

1.Create a new file named .env in the root of your project.
2.In your new .env file, add a new key=value pair. For security reasons, you must prepend your key with REACT_APP, for example REACT_APP_API_KEY=abcdefg123456789
3.Restart your server development server. In order for React to find and register your newly created environment variable you must restart your server. Do this every time you add or change a variable.
4.Your new variables will now be available throughout your React app via the global process.env object. In our case, we could get our API key using process.env.REACT_APP_API_KEY.

Doc:
1: https://supabase.com/docs/guides/auth/quickstarts/react