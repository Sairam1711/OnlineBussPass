import supabase from "./supabaseClient";

const supabaseService = {
  // |GET| Fetch all records from any table
  getAll: async (table) => {
    const { data, error } = await supabase.from(table).select("*");
    if (error) throw error;
    return data;
  },

  // |GET| Fetch a single record by ID
  getById: async (table, id) => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  getByField: async (table, field, value) => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq(field, value)
      .limit();
    if (error) throw error;
    return data;
  },

  // |POST| Add a new record to any table
  add: async (table, record) => {
    const { data, error } = await supabase.from(table).insert([record]);
    if (error) throw error;
    return data;
  },

  // |PUT| Update a record by ID
  update: async (table, id, updateData) => {
    const { data, error } = await supabase
      .from(table)
      .update(updateData)
      .eq("id", id);
    if (error) throw error;
    return data;
  },
  // |PUT| Update a record by ID
  updateById: async (table, columnName, id, updateData) => {
    const { data, error } = await supabase
      .from(table)
      .update(updateData)
      .eq(columnName, id);
    if (error) throw error;
    return data;
  },
  // |DELETE| Delete a record by ID
  delete: async (table, id) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) throw error;
  },
  callFunction: async function (functionName, payload = {}) {
    try {
      const { data, error } = await supabase.rpc(functionName, payload);

      if (error) throw error;
      return data;
    } catch (err) {
      console.error(`Error calling function ${functionName}:`, err.message);
      return { status: "error", message: err.message };
    }
  },
  getData: async (
    tableName,
    page = 1,
    limit = 10,
    id,
    orderBy = "created_at",
    filters = {}
  ) => {
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    let singleRecord;
  
    let query = supabase
      .from(tableName)
      .select("*", { count: "exact" })
      .order(orderBy, { ascending: false })
      .range(start, end);
  
    // Apply filters dynamically
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        query = query.in(key, value); // Use .in() for multiple values
      } else {
        query = query.eq(key, value); // Use .eq() for single values
      }
    });
  
    // Fetch data by specific ID
    if (id) {
      const { data } = await supabase.from(tableName).select("*").eq("id", id);
      console.log("Fetched object:", data?.[0]);
      singleRecord = data?.[0];
    }
  
    // Execute query
    const { data, count, error } = await query;
    if (error) {
      console.error("Error fetching data:", error);
      return { data: [], total: 0 };
    }
  
    return {
      singleRecord: singleRecord || {},
      data: data || [],
      total: count || 0,
    };
  }
  
};

export default supabaseService;
