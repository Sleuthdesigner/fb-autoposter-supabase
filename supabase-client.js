// ============================================
// Scalz.ai Facebook AutoPoster — Supabase API Wrapper
// ============================================

class SupabaseClient {
  constructor() {
    this.user = null;
  }

  // ---- AUTH ----

  async signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    this.user = data.user;
    return data;
  }

  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.user = data.user;
    return data;
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    this.user = null;
  }

  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (session) this.user = session.user;
    return session;
  }

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange((event, session) => {
      this.user = session?.user || null;
      callback(event, session);
    });
  }

  // ---- POSTS ----

  async createPost(post) {
    const { data, error } = await supabase
      .from('posts')
      .insert({ ...post, user_id: this.user.id })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async createPosts(posts) {
    const withUser = posts.map(p => ({ ...p, user_id: this.user.id }));
    const { data, error } = await supabase
      .from('posts')
      .insert(withUser)
      .select();
    if (error) throw error;
    return data;
  }

  async getPosts(filters = {}) {
    let query = supabase.from('posts').select('*').eq('user_id', this.user.id);
    if (filters.status) query = query.eq('status', filters.status);
    if (filters.category) query = query.eq('category', filters.category);
    if (filters.date) query = query.eq('scheduled_date', filters.date);
    query = query.order('scheduled_time', { ascending: true });
    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  async updatePost(id, updates) {
    const { data, error } = await supabase
      .from('posts')
      .update(updates)
      .eq('id', id)
      .eq('user_id', this.user.id)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async deletePost(id) {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
      .eq('user_id', this.user.id);
    if (error) throw error;
  }

  async getPostStats() {
    const today = new Date().toISOString().split('T')[0];
    const { data: allPosts, error } = await supabase
      .from('posts')
      .select('status, category, scheduled_date')
      .eq('user_id', this.user.id);
    if (error) throw error;

    const todayPosts = allPosts.filter(p => p.scheduled_date === today);
    return {
      total: allPosts.length,
      todayGenerated: todayPosts.length,
      scheduled: allPosts.filter(p => p.status === 'scheduled').length,
      published: allPosts.filter(p => p.status === 'published').length,
      byCategory: {
        business: allPosts.filter(p => p.category === 'business').length,
        ai: allPosts.filter(p => p.category === 'ai').length,
        motivation: allPosts.filter(p => p.category === 'motivation').length
      }
    };
  }

  // ---- SCHEDULES ----

  async getSchedule() {
    const { data, error } = await supabase
      .from('schedules')
      .select('*')
      .eq('user_id', this.user.id)
      .single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async upsertSchedule(schedule) {
    const { data, error } = await supabase
      .from('schedules')
      .upsert({ ...schedule, user_id: this.user.id }, { onConflict: 'user_id' })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  // ---- SETTINGS ----

  async getSettings() {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('user_id', this.user.id)
      .single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async upsertSettings(settings) {
    const { data, error } = await supabase
      .from('settings')
      .upsert({ ...settings, user_id: this.user.id }, { onConflict: 'user_id' })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  // ---- ACTIVITY LOG ----

  async logActivity(action, details = '') {
    const { error } = await supabase
      .from('activity_log')
      .insert({ user_id: this.user.id, action, details });
    if (error) console.error('Activity log error:', error);
  }

  async getActivityLog(limit = 20) {
    const { data, error } = await supabase
      .from('activity_log')
      .select('*')
      .eq('user_id', this.user.id)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data;
  }

  // ---- IMAGE UPLOAD (Supabase Storage) ----

  async uploadImage(file, filename) {
    const path = `${this.user.id}/${filename}`;
    const { data, error } = await supabase.storage
      .from('post-images')
      .upload(path, file, { upsert: true });
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage
      .from('post-images')
      .getPublicUrl(path);
    return publicUrl;
  }
}

// Global instance
const db = new SupabaseClient();
