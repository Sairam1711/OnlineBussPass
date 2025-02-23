import supabase from './supabaseClient';

const handleAuthAction = async (action, ...args) => {
  try {
    const result = await action(...args); // Call the function with arguments
    return { success: true, data: result, error: null }; // Return success response
  } catch (error) {
    //console.error(`Error in ${action.name}:`, error.message); // Log error in console
    return { success: false, data: null, error: error.message }; // Return error response
  }
};

const authService = {
  // Sign up user
  signUp: async ({ email, password, fullName, phone }) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { fullName, phone }
        }
    });

    if (error) throw error;

    // Insert additional details into Users table
    const { user } = data;
    const { error: userError } = await supabase.from("users").insert([
        {
             user_id: user.id,
             name: fullName,
             email,
            
        }
    ]);

    if (userError) throw userError;
    
    return data;
},

  // Log in user
  signIn: ({ email, password }) => handleAuthAction(async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }),

  // Log out user
  signOut: () => handleAuthAction(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }),

  // Get current user
  getUser: () => handleAuthAction(async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  }),
  getUserIdentities: async() => {
    const user = await supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        // Deep copy using structuredClone (recommended)
        return structuredClone(data.session.user.identities);
        
        // Alternative: JSON deep copy
        // return JSON.parse(JSON.stringify(data.session.user.identities));
      }
      return null;
    });
  
    return user;
  }
};

export default authService;
