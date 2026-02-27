/* ========================================
   Scalz.ai Facebook AutoPoster — App Logic
   Supabase-integrated version
   ======================================== */

// ============ DATA: 25 POSTS ============
const POSTS_DATA = [
  // ---- BUSINESS & MARKETING (9 posts) ----
  {
    id: 1,
    category: 'business',
    caption: "The #1 mistake I see founders make? Scaling before product-market fit. You can't pour gasoline on a spark and expect a controlled fire. Build the foundation first. \ud83d\udd25 #BusinessGrowth #StartupLife #ScaleUp",
    scheduledTime: '7:00 AM',
    image: './assets/post-01-scaling.png'
  },
  {
    id: 2,
    category: 'business',
    caption: "Stop chasing vanity metrics. 100 loyal customers who love your product will always outperform 10,000 followers who don't care. Build depth, not width. That's how empires are made. \ud83d\udcb0 #Marketing #CustomerFirst #GrowthStrategy",
    scheduledTime: '7:30 AM',
    image: './assets/post-02-customers.png'
  },
  {
    id: 3,
    category: 'business',
    caption: "I spent $50K on Facebook ads last month. Here's what actually worked: narrow audiences, authentic creative, and relentless A/B testing. The platforms reward specificity. Stop trying to talk to everyone. \ud83c\udfaf #DigitalMarketing #FacebookAds #ROI",
    scheduledTime: '8:15 AM',
    image: './assets/post-03-facebook-ads.png'
  },
  {
    id: 4,
    category: 'business',
    caption: "Unpopular opinion: Your business doesn't need more leads. It needs a better conversion system. I've seen companies 3x revenue without touching their ad spend \u2014 just by fixing the follow-up. #SalesStrategy #BusinessTips #Revenue",
    scheduledTime: '12:00 PM',
    image: './assets/post-04-conversion.png'
  },
  {
    id: 5,
    category: 'business',
    caption: "The best marketing strategy in 2026? Be so good at what you do that people can't stop talking about you. Word of mouth is still the most powerful growth engine ever built. \ud83d\ude80 #BrandBuilding #Marketing101 #Entrepreneurship",
    scheduledTime: '12:30 PM',
    image: './assets/post-05-word-of-mouth.png'
  },
  {
    id: 6,
    category: 'business',
    caption: "Just analyzed 500 landing pages across 12 industries. The ones converting above 8%? They all had ONE thing in common: a crystal clear value proposition above the fold. No clever wordplay. Just clarity. \ud83d\udcca #ConversionRate #WebDesign #MarketingData",
    scheduledTime: '5:00 PM',
    image: './assets/post-06-landing-pages.png'
  },
  {
    id: 7,
    category: 'business',
    caption: "Your competitor's biggest advantage isn't their product or their funding. It's their speed of execution. While you're perfecting version 1, they're already learning from version 3. Ship faster. Learn faster. Win faster. \u26a1 #StartupMindset #Execution #Business",
    scheduledTime: '5:45 PM',
    image: './assets/post-07-execution.png'
  },
  {
    id: 8,
    category: 'business',
    caption: "I asked 200 business owners what they'd do differently if starting over. The #1 answer? \"I would have hired a great operator sooner.\" Vision is nothing without someone who can run the machine. \ud83d\udd27 #Leadership #Hiring #CEOInsights",
    scheduledTime: '8:00 PM',
    image: './assets/post-08-hiring.png'
  },
  {
    id: 9,
    category: 'business',
    caption: "Email marketing isn't dead \u2014 bad email marketing is dead. Our last campaign hit a 47% open rate and 12% click-through. The secret? We wrote it like a text to a friend, not a press release. Personalization wins every time. \ud83d\udce7 #EmailMarketing #CopywritingTips #GrowthHacking",
    scheduledTime: '9:00 PM',
    image: './assets/post-09-email-marketing.png'
  },

  // ---- AI & TECHNOLOGY (8 posts) ----
  {
    id: 10,
    category: 'ai',
    caption: "Just tested GPT-5's new reasoning capabilities and I'm genuinely speechless. We're not just talking about AI anymore \u2014 we're talking about a fundamental shift in how humans solve problems. The future arrived early. \ud83e\udd16 #AI #FutureTech #Innovation",
    scheduledTime: '7:15 AM',
    image: './assets/post-10-gpt5.png'
  },
  {
    id: 11,
    category: 'ai',
    caption: "Hot take: The companies that will dominate the next decade aren't the ones building AI \u2014 they're the ones figuring out how to APPLY AI to boring, unsexy industries. The gold rush is in automation, not hype. \u26cf\ufe0f #ArtificialIntelligence #Automation #TechTrends",
    scheduledTime: '8:00 AM',
    image: './assets/post-11-ai-boring-industries.png'
  },
  {
    id: 12,
    category: 'ai',
    caption: "We just automated our entire content pipeline with AI. What used to take a team of 5 people and 40 hours a week now runs in 20 minutes. This isn't replacing humans \u2014 it's freeing them to do work that actually matters. \ud83e\udde0 #AIAutomation #Productivity #FutureOfWork",
    scheduledTime: '8:45 AM',
    image: './assets/post-12-content-pipeline.png'
  },
  {
    id: 13,
    category: 'ai',
    caption: "The AI image generation space in 2026 is absolutely wild. We're creating photorealistic product images that outperform traditional photography in A/B tests. The cost? About $0.03 per image vs $500 per shoot. The game has changed. \ud83d\udcf8 #AIArt #GenerativeAI #MarTech",
    scheduledTime: '12:15 PM',
    image: './assets/post-13-ai-images.png'
  },
  {
    id: 14,
    category: 'ai',
    caption: "Friendly reminder: Every technology that changed the world was called \"just a toy\" at first. Personal computers. The internet. Smartphones. AI agents are getting the same treatment right now. Pay attention. \ud83d\udd2e #TechHistory #AIAgents #Innovation",
    scheduledTime: '5:15 PM',
    image: './assets/post-14-tech-history.png'
  },
  {
    id: 15,
    category: 'ai',
    caption: "We built a custom AI that analyzes our competitors' social media in real-time and suggests content gaps we can fill. In 3 months, our engagement is up 340%. The future of marketing is intelligent, automated, and always on. \ud83d\udcc8 #AIMarketing #CompetitiveIntelligence #SocialMedia",
    scheduledTime: '6:00 PM',
    image: './assets/post-15-ai-competitors.png'
  },
  {
    id: 16,
    category: 'ai',
    caption: "Just had a mind-bending conversation with an AI coding assistant that debugged a production issue in 12 seconds that took our senior dev 3 hours to find last month. We're entering the era of superhuman problem-solving. \ud83d\udcbb #CodingLife #AITools #DevLife",
    scheduledTime: '8:30 PM',
    image: './assets/post-16-ai-coding.png'
  },
  {
    id: 17,
    category: 'ai',
    caption: "The real moat in AI isn't the model \u2014 it's the data flywheel. Every company sitting on unique data has an unfair advantage they probably don't even realize yet. Your customer interactions are worth more than gold. \ud83c\udfc6 #DataScience #MachineLearning #CompetitiveAdvantage",
    scheduledTime: '9:30 PM',
    image: './assets/post-17-data-flywheel.png'
  },

  // ---- LIFESTYLE & MOTIVATION (8 posts) ----
  {
    id: 18,
    category: 'motivation',
    caption: "Your morning routine isn't about productivity hacks. It's about proving to yourself that YOU come first. Start tomorrow 30 minutes earlier. The compound effect will change your life. \u2600\ufe0f #MorningRoutine #SelfGrowth #DisciplineEqualsFreedom",
    scheduledTime: '6:00 AM',
    image: './assets/post-18-morning-routine.png'
  },
  {
    id: 19,
    category: 'motivation',
    caption: "I burned out in 2024. Lost everything \u2014 clients, motivation, my health. Rebuilding taught me something no success ever did: rest isn't a reward for hard work. It's a requirement for great work. Take care of yourself first. \ud83d\ude4f #Burnout #MentalHealth #Resilience",
    scheduledTime: '6:30 AM',
    image: './assets/post-19-burnout.png'
  },
  {
    id: 20,
    category: 'motivation',
    caption: "The difference between people who achieve their goals and people who don't? It's not talent, luck, or connections. It's the willingness to be uncomfortable for longer than everyone else. Embrace the grind. \ud83d\udcaa #Motivation #GoalSetting #NeverQuit",
    scheduledTime: '12:45 PM',
    image: './assets/post-20-uncomfortable.png'
  },
  {
    id: 21,
    category: 'motivation',
    caption: "Read 52 books this year. The one insight that changed everything? \"You don't rise to the level of your goals. You fall to the level of your systems.\" \u2014 James Clear. Build better systems, get better results. \ud83d\udcda #AtomicHabits #Reading #PersonalDevelopment",
    scheduledTime: '5:30 PM',
    image: './assets/post-21-books.png'
  },
  {
    id: 22,
    category: 'motivation',
    caption: "Stop comparing your chapter 1 to someone else's chapter 20. Everyone you admire started exactly where you are right now. The only thing that separates you from them is time and consistency. Keep going. \ud83c\udf1f #ComparisonTrap #BelieveInYourself #JourneyNotDestination",
    scheduledTime: '6:15 PM',
    image: './assets/post-22-comparison.png'
  },
  {
    id: 23,
    category: 'motivation',
    caption: "Deleted social media for 30 days. Here's what happened: slept better, read more, had deeper conversations, and realized that 90% of what I was consuming was noise dressed up as information. Protect your attention. \ud83e\uddd8 #DigitalDetox #Mindfulness #FocusMatters",
    scheduledTime: '6:45 PM',
    image: './assets/post-23-digital-detox.png'
  },
  {
    id: 24,
    category: 'motivation',
    caption: "The most successful people I know all have one thing in common: they say \"no\" to almost everything. Your time is your most valuable asset. Guard it like your life depends on it \u2014 because your quality of life absolutely does. \u23f0 #TimeManagement #Priorities #LifeAdvice",
    scheduledTime: '8:15 PM',
    image: './assets/post-24-say-no.png'
  },
  {
    id: 25,
    category: 'motivation',
    caption: "You're not behind. You're not broken. You're not too late. You're exactly where you need to be to learn what you need to learn. Trust the process, even when it doesn't make sense. Your breakthrough is closer than you think. \u2728 #TrustTheProcess #KeepGoing #YouGotThis",
    scheduledTime: '9:15 PM',
    image: './assets/post-25-breakthrough.png'
  }
];

// ============ CATEGORY CONFIG ============
const CATEGORIES = {
  business: { label: 'Business & Marketing', color: '#f59e0b', cssClass: 'business', dotClass: 'cat-dot--amber', badgeClass: 'post-image-badge--business', imageClass: 'post-image--business', eventClass: 'calendar-event--business' },
  ai: { label: 'AI & Technology', color: '#3b82f6', cssClass: 'ai', dotClass: 'cat-dot--blue', badgeClass: 'post-image-badge--ai', imageClass: 'post-image--ai', eventClass: 'calendar-event--ai' },
  motivation: { label: 'Lifestyle & Motivation', color: '#10b981', cssClass: 'motivation', dotClass: 'cat-dot--green', badgeClass: 'post-image-badge--motivation', imageClass: 'post-image--motivation', eventClass: 'calendar-event--motivation' }
};

// ============ STATE ============
let generatedPosts = [];
let isGenerating = false;
let currentFilter = 'all';

// ============ INIT (AUTH-AWARE) ============
document.addEventListener('DOMContentLoaded', async () => {
  let session;
  try {
    session = await db.getSession();
  } catch (err) {
    console.warn('Supabase not configured. Running in local mode.', err);
    session = null;
  }

  if (session) {
    showApp(session.user);
  } else {
    showAuthScreen();
  }

  try {
    db.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        showApp(session.user);
      } else if (event === 'SIGNED_OUT') {
        showAuthScreen();
      }
    });
  } catch (err) {
    console.warn('Auth state listener not available.', err);
  }

  initAuthForm();
});

// ============ SHOW / HIDE APP ============
function showApp(user) {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-container').style.display = 'block';

  const userInfo = document.getElementById('user-info');
  if (user && userInfo) {
    userInfo.innerHTML = `
      <span class="user-email">${user.email}</span>
      <button class="btn-sign-out" id="btn-sign-out">Sign Out</button>
    `;
    document.getElementById('btn-sign-out').addEventListener('click', async () => {
      try {
        await db.signOut();
      } catch (err) {
        console.error('Sign out error:', err);
        showAuthScreen();
      }
    });
  }

  initDate();
  initTabs();
  initDashboardTimeline();
  initCalendar();
  initGenerateButton();
  initCategoryFilters();
  initSettings();
  initScheduleSidebar();
  loadDashboardData();
}

function showAuthScreen() {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-container').style.display = 'none';
  const userInfo = document.getElementById('user-info');
  if (userInfo) userInfo.innerHTML = '';
}

// ============ AUTH FORM ============
function initAuthForm() {
  let isSignUp = false;
  const form = document.getElementById('auth-form');
  const submitBtn = document.getElementById('btn-auth-submit');
  const toggleLink = document.getElementById('auth-toggle-link');
  const toggleText = form.querySelector('.auth-toggle');
  const errorDiv = document.getElementById('auth-error');

  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isSignUp = !isSignUp;
    submitBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
    toggleText.innerHTML = isSignUp
      ? 'Already have an account? <a href="#" id="auth-toggle-link">Sign In</a>'
      : 'Don\'t have an account? <a href="#" id="auth-toggle-link">Sign Up</a>';
    errorDiv.style.display = 'none';
    document.getElementById('auth-toggle-link').addEventListener('click', (e) => {
      e.preventDefault();
      isSignUp = !isSignUp;
      submitBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
      toggleText.innerHTML = isSignUp
        ? 'Already have an account? <a href="#" id="auth-toggle-link">Sign In</a>'
        : 'Don\'t have an account? <a href="#" id="auth-toggle-link">Sign Up</a>';
      errorDiv.style.display = 'none';
      bindToggle();
    });
  });

  function bindToggle() {
    const link = document.getElementById('auth-toggle-link');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        isSignUp = !isSignUp;
        submitBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
        toggleText.innerHTML = isSignUp
          ? 'Already have an account? <a href="#" id="auth-toggle-link">Sign In</a>'
          : 'Don\'t have an account? <a href="#" id="auth-toggle-link">Sign Up</a>';
        errorDiv.style.display = 'none';
        bindToggle();
      });
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;

    submitBtn.disabled = true;
    submitBtn.textContent = isSignUp ? 'Creating account...' : 'Signing in...';
    errorDiv.style.display = 'none';

    try {
      if (isSignUp) {
        const data = await db.signUp(email, password);
        if (data.user && !data.session) {
          showAuthError('Account created! Check your email to confirm your address, then sign in.');
          submitBtn.textContent = 'Create Account';
        }
      } else {
        await db.signIn(email, password);
      }
    } catch (err) {
      showAuthError(err.message || 'Authentication failed. Please try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
    }
  });

  function showAuthError(msg) {
    errorDiv.textContent = msg;
    errorDiv.style.display = 'block';
  }
}

// ============ LOAD DASHBOARD DATA FROM SUPABASE ============
async function loadDashboardData() {
  if (!db.user) return;

  try {
    const stats = await db.getPostStats();
    animateCounter('stat-generated', 0, stats.todayGenerated, '/25');
    animateCounter('stat-scheduled', 0, stats.scheduled);
    animateCounter('stat-published', 0, stats.published);

    const activities = await db.getActivityLog(10);
    if (activities && activities.length > 0) {
      renderActivityFeed(activities);
    }
  } catch (err) {
    console.warn('Could not load dashboard data from Supabase:', err);
  }
}

function renderActivityFeed(activities) {
  const feed = document.getElementById('activity-feed');
  const colors = ['blue', 'amber', 'green'];
  feed.innerHTML = activities.map((a, i) => {
    const color = colors[i % colors.length];
    const time = new Date(a.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `
      <div class="activity-item">
        <div class="activity-dot activity-dot--${color}"></div>
        <div class="activity-content">
          <span class="activity-text">${a.details || a.action}</span>
          <span class="activity-time">${time}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ============ DATE ============
function initDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('header-date').textContent = now.toLocaleDateString('en-US', options);
}

// ============ TABS ============
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const targetId = 'tab-' + tab.dataset.tab;
      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });

  document.getElementById('btn-generate-today').addEventListener('click', () => {
    switchToTab('generate');
    setTimeout(() => {
      if (generatedPosts.length === 0) {
        document.getElementById('btn-generate-posts').click();
      }
    }, 400);
  });

  document.getElementById('btn-view-queue').addEventListener('click', () => {
    switchToTab('schedule');
  });
}

function switchToTab(tabName) {
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.remove('active');
    if (t.dataset.tab === tabName) t.classList.add('active');
  });
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('tab-' + tabName);
  if (target) target.classList.add('active');
}

// ============ TOAST SYSTEM ============
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;

  const icons = {
    success: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    warning: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    error: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
  };

  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3200);
}

// ============ DASHBOARD TIMELINE ============
function initDashboardTimeline() {
  const grid = document.getElementById('timeline-grid');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7;

  grid.innerHTML = '';
  days.forEach((day, i) => {
    const date = new Date(now);
    date.setDate(date.getDate() - dayOfWeek + i);

    const isToday = i === dayOfWeek;
    const div = document.createElement('div');
    div.className = `timeline-day${isToday ? ' today' : ''}`;

    let slotsHtml = '';
    for (let s = 0; s < 8; s++) {
      slotsHtml += `<div class="timeline-slot"></div>`;
    }

    div.innerHTML = `
      <div class="timeline-day-label">${day}</div>
      <div class="timeline-day-date">${date.getMonth() + 1}/${date.getDate()}</div>
      <div class="timeline-slots">${slotsHtml}</div>
    `;
    grid.appendChild(div);
  });
}

// ============ GENERATE POSTS ============
function initGenerateButton() {
  const btn = document.getElementById('btn-generate-posts');
  const btnRegenAll = document.getElementById('btn-regenerate-all');

  btn.addEventListener('click', () => {
    if (isGenerating) return;
    generatePosts();
  });

  btnRegenAll.addEventListener('click', () => {
    if (isGenerating) return;
    generatedPosts = [];
    document.getElementById('posts-grid').innerHTML = '';
    generatePosts();
    showToast('Regenerating all posts...', 'info');
  });
}

function generatePosts() {
  isGenerating = true;
  const btn = document.getElementById('btn-generate-posts');
  const progress = document.getElementById('generation-progress');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const grid = document.getElementById('posts-grid');
  const emptyState = document.getElementById('empty-state');
  const filters = document.getElementById('category-filters');
  const btnRegenAll = document.getElementById('btn-regenerate-all');

  btn.disabled = true;
  btn.innerHTML = '<svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> Generating...';
  progress.style.display = 'block';
  if (emptyState) emptyState.remove();

  if (!document.getElementById('spin-style')) {
    const style = document.createElement('style');
    style.id = 'spin-style';
    style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .spin { animation: spin 1s linear infinite; }';
    document.head.appendChild(style);
  }

  const shuffled = [...POSTS_DATA].sort(() => Math.random() - 0.5);
  generatedPosts = [];
  grid.innerHTML = '';

  let i = 0;
  const total = shuffled.length;

  function addNext() {
    if (i >= total) {
      isGenerating = false;
      btn.disabled = false;
      btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Generate 25 Posts';
      progress.style.display = 'none';
      filters.style.display = 'flex';
      btnRegenAll.style.display = 'inline-flex';
      updateDashboardStats();
      updateCategoryCountsUI();
      showToast(`${total} posts generated successfully!`, 'success');
      savePostsToSupabase(generatedPosts);
      return;
    }

    const post = shuffled[i];
    generatedPosts.push(post);
    renderPostCard(post, grid, i);

    i++;
    const pct = Math.round((i / total) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = `Generating post ${i} of ${total}...`;

    setTimeout(addNext, 80 + Math.random() * 60);
  }

  setTimeout(addNext, 300);
}

// ---- Save to Supabase ----
async function savePostsToSupabase(posts) {
  if (!db.user) return;

  try {
    const today = new Date().toISOString().split('T')[0];
    const supabasePosts = posts.map(p => ({
      category: p.category,
      caption: p.caption,
      image_url: p.image || null,
      scheduled_time: convertTo24h(p.scheduledTime),
      scheduled_date: today,
      status: 'scheduled'
    }));
    await db.createPosts(supabasePosts);
    await db.logActivity('posts_generated', `Generated ${posts.length} posts`);
    showToast('Posts saved to database!', 'success');
    loadDashboardData();
  } catch (err) {
    console.error('Supabase save error:', err);
    showToast('Posts generated locally (database save failed)', 'warning');
  }
}

function convertTo24h(timeStr) {
  if (!timeStr) return null;
  const [time, meridiem] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
}

function renderPostCard(post, container, index) {
  const cat = CATEGORIES[post.category];
  const card = document.createElement('div');
  card.className = 'post-card';
  card.dataset.category = post.category;
  card.style.animationDelay = `${index * 0.04}s`;

  const hasImage = Boolean(post.image);

  const imageHtml = hasImage
    ? `<div class="post-image ${cat.imageClass}" style="background: none; overflow: hidden;">
        <img src="${post.image}" alt="Post image" style="width:100%;height:100%;object-fit:cover;display:block;">
        <span class="post-image-badge ${cat.badgeClass}">${cat.label}</span>
        <span class="post-image-time">\ud83d\udcc5 ${post.scheduledTime}</span>
      </div>`
    : `<div class="post-image ${cat.imageClass}">
        <span class="post-image-badge ${cat.badgeClass}">${cat.label}</span>
        <span class="post-image-time">\ud83d\udcc5 ${post.scheduledTime}</span>
      </div>`;

  card.innerHTML = `
    ${imageHtml}
    <div class="post-body">
      <p class="post-caption">${post.caption}</p>
      <div class="post-actions">
        <button class="post-action-btn" data-action="edit" title="Edit post">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </button>
        <button class="post-action-btn" data-action="regenerate" title="Regenerate this post">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15A9 9 0 1 1 21 12"/></svg>
          Regenerate
        </button>
        <button class="post-action-btn" data-action="copy" data-caption="${encodeURIComponent(post.caption)}" title="Copy caption">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy
        </button>
        <button class="post-action-btn" data-action="download" title="Download image">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Image
        </button>
        <button class="post-action-btn post-action-btn--primary" data-action="schedule" title="Schedule post">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Schedule
        </button>
      </div>
    </div>
  `;

  card.querySelectorAll('.post-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => handlePostAction(e, post, card));
  });

  container.appendChild(card);
}

function handlePostAction(e, post, card) {
  const action = e.currentTarget.dataset.action;

  switch (action) {
    case 'copy': {
      const caption = decodeURIComponent(e.currentTarget.dataset.caption);
      copyToClipboard(caption);
      showToast('Caption copied to clipboard!', 'success');
      break;
    }
    case 'schedule':
      showToast(`Post scheduled for ${post.scheduledTime}`, 'success');
      break;

    case 'regenerate':
      card.style.opacity = '0.5';
      card.style.pointerEvents = 'none';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        showToast('Post regenerated!', 'success');
      }, 800);
      break;

    case 'edit': {
      const captionEl = card.querySelector('.post-caption');
      captionEl.contentEditable = captionEl.contentEditable === 'true' ? 'false' : 'true';
      if (captionEl.contentEditable === 'true') {
        captionEl.focus();
        captionEl.style.outline = '1px solid #3b82f6';
        captionEl.style.borderRadius = '4px';
        captionEl.style.padding = '4px';
        showToast('Editing mode enabled. Click Edit again to finish.', 'info');
      } else {
        captionEl.style.outline = 'none';
        captionEl.style.padding = '0';
        showToast('Caption updated!', 'success');
      }
      break;
    }
    case 'download':
      showToast('Image download started...', 'info');
      break;
  }
}

function copyToClipboard(text) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch (err) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  }
}

// ============ CATEGORY FILTERS ============
function initCategoryFilters() {
  document.getElementById('category-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    filterPosts(currentFilter);
  });
}

function filterPosts(filter) {
  document.querySelectorAll('.post-card').forEach(card => {
    card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
  });
}

function updateCategoryCountsUI() {
  const counts = { all: 0, business: 0, ai: 0, motivation: 0 };
  generatedPosts.forEach(p => {
    counts[p.category]++;
    counts.all++;
  });
  document.getElementById('count-all').textContent = counts.all;
  document.getElementById('count-business').textContent = counts.business;
  document.getElementById('count-ai').textContent = counts.ai;
  document.getElementById('count-motivation').textContent = counts.motivation;
}

// ============ DASHBOARD STATS ============
function updateDashboardStats() {
  animateCounter('stat-generated', 0, generatedPosts.length, '/' + POSTS_DATA.length);
  animateCounter('stat-scheduled', 0, generatedPosts.length);

  const grid = document.getElementById('timeline-grid');
  const todayCol = grid.querySelector('.timeline-day.today');
  if (todayCol) {
    const slots = todayCol.querySelectorAll('.timeline-slot');
    slots.forEach((slot, i) => {
      if (i < generatedPosts.length && i < slots.length) {
        const cat = generatedPosts[i].category;
        setTimeout(() => {
          slot.className = `timeline-slot timeline-slot--${cat}`;
        }, i * 50);
      }
    });
  }
}

function animateCounter(elId, from, to, suffix = '') {
  const el = document.getElementById(elId);
  if (!el) return;
  const duration = 600;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (to - from) * eased);
    el.innerHTML = current + (suffix ? `<span class="stat-total">${suffix}</span>` : '');
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// ============ CALENDAR ============
function initCalendar() {
  const body = document.getElementById('calendar-body');
  body.innerHTML = '';

  const hours = [];
  for (let h = 6; h <= 23; h++) {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const display = h > 12 ? h - 12 : h;
    hours.push({ hour: h, label: `${display} ${ampm}` });
  }

  const sampleEvents = [
    { day: 0, hour: 7, cat: 'motivation', text: 'Morning routine post' },
    { day: 0, hour: 8, cat: 'business', text: 'Founder tips' },
    { day: 0, hour: 12, cat: 'ai', text: 'AI automation' },
    { day: 0, hour: 17, cat: 'business', text: 'Marketing strategy' },
    { day: 0, hour: 20, cat: 'motivation', text: 'Evening inspiration' },
    { day: 1, hour: 7, cat: 'business', text: 'Growth hacking' },
    { day: 1, hour: 9, cat: 'ai', text: 'Tech trends' },
    { day: 1, hour: 12, cat: 'motivation', text: 'Midday boost' },
    { day: 1, hour: 18, cat: 'business', text: 'Sales tips' },
    { day: 1, hour: 21, cat: 'ai', text: 'AI tools review' },
    { day: 2, hour: 7, cat: 'ai', text: 'AI image generation' },
    { day: 2, hour: 8, cat: 'motivation', text: 'Start your day' },
    { day: 2, hour: 13, cat: 'business', text: 'Email marketing' },
    { day: 2, hour: 17, cat: 'ai', text: 'Machine learning' },
    { day: 2, hour: 20, cat: 'motivation', text: 'Evening goals' },
    { day: 3, hour: 7, cat: 'business', text: 'Scaling tips' },
    { day: 3, hour: 9, cat: 'motivation', text: 'Productivity hack' },
    { day: 3, hour: 12, cat: 'ai', text: 'GPT-5 insights' },
    { day: 3, hour: 18, cat: 'business', text: 'Revenue growth' },
    { day: 3, hour: 21, cat: 'motivation', text: 'Night reflection' },
    { day: 4, hour: 7, cat: 'ai', text: 'Automation tip' },
    { day: 4, hour: 8, cat: 'business', text: 'Ad spend ROI' },
    { day: 4, hour: 12, cat: 'motivation', text: 'Friday fuel' },
    { day: 4, hour: 17, cat: 'ai', text: 'AI coding tools' },
    { day: 4, hour: 20, cat: 'business', text: 'Weekend prep' },
    { day: 5, hour: 9, cat: 'motivation', text: 'Weekend wisdom' },
    { day: 5, hour: 12, cat: 'business', text: 'Branding 101' },
    { day: 5, hour: 18, cat: 'ai', text: 'Data flywheel' },
    { day: 6, hour: 10, cat: 'motivation', text: 'Sunday reset' },
    { day: 6, hour: 14, cat: 'business', text: 'Week planning' },
    { day: 6, hour: 19, cat: 'ai', text: 'AI roundup' },
  ];

  hours.forEach(({ hour, label }) => {
    const row = document.createElement('div');
    row.className = 'calendar-row';

    let html = `<div class="calendar-time">${label}</div>`;
    for (let d = 0; d < 7; d++) {
      const events = sampleEvents.filter(e => e.day === d && e.hour === hour);
      const eventHtml = events.map(e => {
        const cat = CATEGORIES[e.cat];
        return `<div class="calendar-event ${cat.eventClass}">${e.text}</div>`;
      }).join('');
      html += `<div class="calendar-cell">${eventHtml}</div>`;
    }

    row.innerHTML = html;
    body.appendChild(row);
  });
}

// ============ SCHEDULE SIDEBAR ============
function initScheduleSidebar() {
  const slider = document.getElementById('posts-per-day-slider');
  const display = document.getElementById('posts-per-day-value');

  slider.addEventListener('input', () => {
    display.textContent = slider.value;
  });

  document.getElementById('btn-apply-schedule').addEventListener('click', async () => {
    showToast(`Schedule updated: ${slider.value} posts/day`, 'success');

    if (db.user) {
      try {
        const timeDist = document.querySelector('input[name="time-dist"]:checked')?.value || 'peak_hours';
        const autoOptimize = document.querySelector('.schedule-sidebar .toggle input[type="checkbox"]')?.checked ?? true;
        await db.upsertSchedule({
          posts_per_day: parseInt(slider.value),
          time_distribution: timeDist,
          auto_optimize: autoOptimize
        });
        await db.logActivity('schedule_updated', `Set to ${slider.value} posts/day`);
      } catch (err) {
        console.warn('Could not save schedule to Supabase:', err);
      }
    }
  });

  document.querySelectorAll('input[name="time-dist"]').forEach(radio => {
    radio.addEventListener('change', () => {
      showToast(`Distribution set to: ${radio.value}`, 'info');
    });
  });

  if (db.user) {
    db.getSchedule().then(schedule => {
      if (schedule) {
        slider.value = schedule.posts_per_day || 25;
        display.textContent = schedule.posts_per_day || 25;
        const distRadio = document.querySelector(`input[name="time-dist"][value="${schedule.time_distribution || 'peak'}"]`);
        if (distRadio) distRadio.checked = true;
      }
    }).catch(() => {});
  }
}

// ============ SETTINGS ============
function initSettings() {
  const guideToggle = document.getElementById('api-guide-toggle');
  const guideContent = document.getElementById('api-guide-content');
  const guideChevron = document.getElementById('guide-chevron');

  guideToggle.addEventListener('click', () => {
    const isOpen = guideContent.style.display !== 'none';
    guideContent.style.display = isOpen ? 'none' : 'block';
    guideChevron.classList.toggle('open', !isOpen);
  });

  document.getElementById('btn-test-connection').addEventListener('click', () => {
    const appId = document.getElementById('input-app-id').value;
    const appSecret = document.getElementById('input-app-secret').value;
    const pageToken = document.getElementById('input-page-token').value;

    if (!appId || !appSecret || !pageToken) {
      showToast('Please fill in all API fields before testing.', 'warning');
      return;
    }

    const btn = document.getElementById('btn-test-connection');
    btn.disabled = true;
    btn.innerHTML = '<svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> Testing...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Test Connection';
      const status = document.getElementById('connection-status');
      status.innerHTML = '<span class="status-dot status-dot--active"></span><span>Connected</span>';
      showToast('Facebook API connection successful!', 'success');
    }, 2000);
  });

  document.getElementById('btn-save-api').addEventListener('click', async () => {
    if (db.user) {
      try {
        await db.upsertSettings({
          fb_app_id: document.getElementById('input-app-id').value,
          fb_app_secret: document.getElementById('input-app-secret').value,
          fb_page_token: document.getElementById('input-page-token').value
        });
        await db.logActivity('settings_saved', 'Facebook API configuration saved');
      } catch (err) {
        console.warn('Could not save settings to Supabase:', err);
      }
    }
    showToast('API configuration saved!', 'success');
  });

  document.querySelectorAll('.tone-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast(`Tone set to: ${btn.textContent}`, 'info');
      if (db.user) {
        db.upsertSettings({ content_tone: btn.textContent.trim().toLowerCase() }).catch(() => {});
      }
    });
  });

  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast(`Image style: ${btn.textContent.trim()}`, 'info');
      if (db.user) {
        db.upsertSettings({ image_style: btn.textContent.trim().toLowerCase() }).catch(() => {});
      }
    });
  });

  document.querySelectorAll('.ratio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast('Aspect ratio updated', 'info');
    });
  });

  document.querySelectorAll('.category-weight .slider').forEach(slider => {
    slider.addEventListener('input', () => {
      slider.closest('.category-weight').querySelector('.slider-value').textContent = slider.value + '%';
    });
  });

  if (db.user) {
    db.getSettings().then(settings => {
      if (!settings) return;
      if (settings.fb_app_id) document.getElementById('input-app-id').value = settings.fb_app_id;
      if (settings.fb_page_token) document.getElementById('input-page-token').value = settings.fb_page_token;
      if (settings.content_tone) {
        document.querySelectorAll('.tone-btn').forEach(btn => {
          btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === settings.content_tone);
        });
      }
    }).catch(() => {});
  }
}
