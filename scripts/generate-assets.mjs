import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Smart Meal AI SVG
const smartMealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg-meal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080D1A"/>
      <stop offset="100%" stop-color="#03060E"/>
    </linearGradient>
    <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563FF"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2563FF" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#2563FF" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="url(#bg-meal)"/>
  
  <!-- Subtle Grid -->
  <g opacity="0.15">
    <line x1="0" y1="100" x2="800" y2="100" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="0" y1="200" x2="800" y2="200" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="0" y1="300" x2="800" y2="300" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="0" y1="400" x2="800" y2="400" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="200" y1="0" x2="200" y2="500" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="400" y1="0" x2="400" y2="500" stroke="#2563FF" stroke-width="0.5"/>
    <line x1="600" y1="0" x2="600" y2="500" stroke="#2563FF" stroke-width="0.5"/>
  </g>

  <!-- App Header -->
  <rect x="30" y="30" width="740" height="50" rx="10" fill="#0C1326" stroke="#2563FF" stroke-opacity="0.2"/>
  <circle cx="60" cy="55" r="10" fill="#2563FF"/>
  <text x="80" y="60" fill="#FFFFFF" font-family="system-ui" font-weight="bold" font-size="14">Smart Meal AI</text>
  <rect x="200" y="45" width="100" height="20" rx="6" fill="#1E293B"/>
  <rect x="315" y="45" width="80" height="20" rx="6" fill="#1E293B"/>
  <rect x="650" y="45" width="100" height="22" rx="11" fill="url(#blue-grad)"/>
  <text x="700" y="60" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">+ New Meal Plan</text>

  <!-- Left Card: AI Calories & Macros -->
  <rect x="30" y="100" width="460" height="360" rx="14" fill="#090E1F" stroke="#1E293B"/>
  <text x="55" y="135" fill="#FFFFFF" font-family="system-ui" font-size="16" font-weight="bold">AI Daily Caloric &amp; Macro Balance</text>
  <text x="55" y="155" fill="#64748B" font-family="system-ui" font-size="12">Target: 2,450 kcal • Protein 180g • Carbs 220g</text>

  <!-- Metric Badges -->
  <rect x="55" y="175" width="120" height="50" rx="8" fill="#131B33" stroke="#2563FF" stroke-opacity="0.3"/>
  <text x="70" y="195" fill="#94A3B8" font-family="system-ui" font-size="11">Daily Intake</text>
  <text x="70" y="215" fill="#38BDF8" font-family="system-ui" font-size="16" font-weight="bold">2,180 kcal</text>

  <rect x="190" y="175" width="120" height="50" rx="8" fill="#131B33" stroke="#2563FF" stroke-opacity="0.3"/>
  <text x="205" y="195" fill="#94A3B8" font-family="system-ui" font-size="11">Metabolic Rate</text>
  <text x="205" y="215" fill="#4ADE80" font-family="system-ui" font-size="16" font-weight="bold">+14.2%</text>

  <rect x="325" y="175" width="145" height="50" rx="8" fill="#131B33" stroke="#2563FF" stroke-opacity="0.3"/>
  <text x="340" y="195" fill="#94A3B8" font-family="system-ui" font-size="11">AI Recommendations</text>
  <text x="340" y="215" fill="#F472B6" font-family="system-ui" font-size="16" font-weight="bold">Optimized</text>

  <!-- Chart Area -->
  <path d="M 55 380 L 110 340 L 180 360 L 250 280 L 320 310 L 390 250 L 460 270 L 460 410 L 55 410 Z" fill="url(#chart-grad)"/>
  <path d="M 55 380 L 110 340 L 180 360 L 250 280 L 320 310 L 390 250 L 460 270" fill="none" stroke="#2563FF" stroke-width="3"/>
  <circle cx="390" cy="250" r="5" fill="#FFFFFF" stroke="#2563FF" stroke-width="3"/>

  <!-- Right Column: Meal Schedule Cards -->
  <rect x="510" y="100" width="260" height="110" rx="12" fill="#0E162E" stroke="#1E293B"/>
  <text x="530" y="130" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="bold">BREAKFAST • 8:30 AM</text>
  <text x="530" y="152" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Avocado &amp; Poached Egg Toast</text>
  <text x="530" y="175" fill="#94A3B8" font-family="system-ui" font-size="12">480 kcal • 24g Protein • 32g Carbs</text>

  <rect x="510" y="225" width="260" height="110" rx="12" fill="#0E162E" stroke="#2563FF" stroke-opacity="0.4"/>
  <text x="530" y="255" fill="#4ADE80" font-family="system-ui" font-size="11" font-weight="bold">AI RECOMMENDED LUNCH</text>
  <text x="530" y="277" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Grilled Salmon Quinoa Bowl</text>
  <text x="530" y="300" fill="#94A3B8" font-family="system-ui" font-size="12">620 kcal • 46g Protein • High Omega-3</text>

  <rect x="510" y="350" width="260" height="110" rx="12" fill="#0E162E" stroke="#1E293B"/>
  <text x="530" y="380" fill="#F59E0B" font-family="system-ui" font-size="11" font-weight="bold">DINNER • 7:45 PM</text>
  <text x="530" y="402" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Tenderloin Beef &amp; Asparagus</text>
  <text x="530" y="425" fill="#94A3B8" font-family="system-ui" font-size="12">540 kcal • 52g Protein • Low Carb</text>
</svg>`;

// 2. AI Career Coach SVG
const careerCoachSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg-career" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0B1A"/>
      <stop offset="100%" stop-color="#040510"/>
    </linearGradient>
    <linearGradient id="purple-blue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#bg-career)"/>
  
  <!-- Subtle Glow Circles -->
  <circle cx="400" cy="180" r="160" fill="#3B82F6" opacity="0.08"/>

  <!-- App Header -->
  <rect x="30" y="30" width="740" height="50" rx="10" fill="#0D1129" stroke="#3B82F6" stroke-opacity="0.2"/>
  <circle cx="60" cy="55" r="10" fill="#8B5CF6"/>
  <text x="80" y="60" fill="#FFFFFF" font-family="system-ui" font-weight="bold" font-size="14">AI Career Coach</text>
  <rect x="220" y="45" width="120" height="20" rx="6" fill="#1E1B4B"/>
  <rect x="630" y="42" width="120" height="26" rx="13" fill="url(#purple-blue)"/>
  <text x="690" y="59" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">Simulate Interview</text>

  <!-- Left Column: Roadmap -->
  <rect x="30" y="100" width="480" height="360" rx="14" fill="#0C0F26" stroke="#1E293B"/>
  <text x="55" y="135" fill="#FFFFFF" font-family="system-ui" font-size="16" font-weight="bold">Personalized AI Career Roadmap</text>
  <text x="55" y="155" fill="#818CF8" font-family="system-ui" font-size="12">Target Role: Senior AI Solutions Engineer (Top 5% Match)</text>

  <!-- Stepper Nodes -->
  <circle cx="75" cy="205" r="16" fill="#22C55E"/>
  <text x="75" y="210" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="12" font-weight="bold">✓</text>
  <line x1="75" y1="225" x2="75" y2="275" stroke="#22C55E" stroke-width="2"/>
  <text x="105" y="202" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Phase 1: Full-Stack Architecture Foundations</text>
  <text x="105" y="220" fill="#94A3B8" font-family="system-ui" font-size="12">Mastered Next.js, Node.js, and TypeScript pipelines</text>

  <circle cx="75" cy="295" r="16" fill="#3B82F6"/>
  <text x="75" y="300" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="12" font-weight="bold">2</text>
  <line x1="75" y1="315" x2="75" y2="365" stroke="#374151" stroke-width="2"/>
  <text x="105" y="292" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="600">Phase 2: LLM Fine-Tuning &amp; Vector Databases</text>
  <text x="105" y="310" fill="#60A5FA" font-family="system-ui" font-size="12">In Progress: 78% completion • Gemini &amp; Pinecone</text>

  <circle cx="75" cy="385" r="16" fill="#374151"/>
  <text x="75" y="390" text-anchor="middle" fill="#9CA3AF" font-family="system-ui" font-size="12" font-weight="bold">3</text>
  <text x="105" y="382" fill="#D1D5DB" font-family="system-ui" font-size="14" font-weight="600">Phase 3: System Design &amp; Technical Leadership</text>
  <text x="105" y="400" fill="#6B7280" font-family="system-ui" font-size="12">Upcoming: Distributed AI orchestration &amp; scaling</text>

  <!-- Right Column: AI Insights & Radar -->
  <rect x="530" y="100" width="240" height="170" rx="12" fill="#0C0F26" stroke="#3B82F6" stroke-opacity="0.3"/>
  <text x="550" y="130" fill="#A78BFA" font-family="system-ui" font-size="11" font-weight="bold">SKILL GAP ANALYSIS</text>
  
  <text x="550" y="160" fill="#FFFFFF" font-family="system-ui" font-size="12">System Design</text>
  <rect x="550" y="168" width="200" height="6" rx="3" fill="#1F2937"/>
  <rect x="550" y="168" width="180" height="6" rx="3" fill="#3B82F6"/>

  <text x="550" y="195" fill="#FFFFFF" font-family="system-ui" font-size="12">AI Model Training</text>
  <rect x="550" y="203" width="200" height="6" rx="3" fill="#1F2937"/>
  <rect x="550" y="203" width="160" height="6" rx="3" fill="#8B5CF6"/>

  <text x="550" y="230" fill="#FFFFFF" font-family="system-ui" font-size="12">Cloud Deployment</text>
  <rect x="550" y="238" width="200" height="6" rx="3" fill="#1F2937"/>
  <rect x="550" y="238" width="190" height="6" rx="3" fill="#10B981"/>

  <!-- Right Bottom: Mock Interview Score -->
  <rect x="530" y="290" width="240" height="170" rx="12" fill="#0C0F26" stroke="#1E293B"/>
  <text x="550" y="320" fill="#34D399" font-family="system-ui" font-size="11" font-weight="bold">LATEST INTERVIEW SIMULATION</text>
  <text x="550" y="355" fill="#FFFFFF" font-family="system-ui" font-size="28" font-weight="bold">92<tspan font-size="14" fill="#9CA3AF">/100</tspan></text>
  <text x="550" y="380" fill="#94A3B8" font-family="system-ui" font-size="12">"Exceptional problem solving and clear architectural explanation."</text>
  <rect x="550" y="405" width="90" height="24" rx="6" fill="#1E293B"/>
  <text x="595" y="421" text-anchor="middle" fill="#60A5FA" font-family="system-ui" font-size="11">View Report</text>
</svg>`;

// 3. Naudex Research SVG
const naudexResearchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg-naudex" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#040817"/>
      <stop offset="100%" stop-color="#010309"/>
    </linearGradient>
    <linearGradient id="cyan-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#2563FF"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#bg-naudex)"/>

  <!-- App Header -->
  <rect x="30" y="30" width="740" height="50" rx="10" fill="#080E24" stroke="#0EA5E9" stroke-opacity="0.2"/>
  <circle cx="60" cy="55" r="10" fill="#0EA5E9"/>
  <text x="80" y="60" fill="#FFFFFF" font-family="system-ui" font-weight="bold" font-size="14">Naudex AI Research</text>
  <rect x="230" y="45" width="220" height="22" rx="11" fill="#0E1738" stroke="#1E293B"/>
  <text x="245" y="60" fill="#64748B" font-family="system-ui" font-size="11">Search arXiv, PubMed, DOI...</text>
  <rect x="620" y="43" width="130" height="25" rx="6" fill="url(#cyan-grad)"/>
  <text x="685" y="60" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">Summarize Paper</text>

  <!-- Left: Research Synthesizer -->
  <rect x="30" y="100" width="490" height="360" rx="14" fill="#070C1E" stroke="#1E293B"/>
  <text x="55" y="135" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="bold">ACTIVE DOCUMENT SYNTHESIS</text>
  <text x="55" y="160" fill="#FFFFFF" font-family="system-ui" font-size="16" font-weight="bold">Attention Mechanisms in Multimodal Agents (2025)</text>

  <!-- Key Insights List -->
  <rect x="55" y="180" width="440" height="60" rx="8" fill="#0D1533" stroke="#2563FF" stroke-opacity="0.3"/>
  <text x="70" y="202" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="bold">KEY FINDING #1</text>
  <text x="70" y="222" fill="#E2E8F0" font-family="system-ui" font-size="12">Cross-attention layer pruning reduced inference memory footprint by 42%.</text>

  <rect x="55" y="255" width="440" height="60" rx="8" fill="#0D1533" stroke="#1E293B"/>
  <text x="70" y="277" fill="#4ADE80" font-family="system-ui" font-size="11" font-weight="bold">KEY FINDING #2</text>
  <text x="70" y="297" fill="#E2E8F0" font-family="system-ui" font-size="12">Zero-shot reasoning accuracy achieved 91.4% on standard benchmarks.</text>

  <rect x="55" y="330" width="440" height="60" rx="8" fill="#0D1533" stroke="#1E293B"/>
  <text x="70" y="352" fill="#F59E0B" font-family="system-ui" font-size="11" font-weight="bold">KEY FINDING #3</text>
  <text x="70" y="372" fill="#E2E8F0" font-family="system-ui" font-size="12">Linear attention approximations maintain 98.7% fidelity on long-context tasks.</text>

  <text x="55" y="425" fill="#64748B" font-family="system-ui" font-size="11">Export as LaTeX, Markdown, or PDF • 14 Citations Linked</text>

  <!-- Right: Knowledge Graph & Metrics -->
  <rect x="540" y="100" width="230" height="170" rx="12" fill="#070C1E" stroke="#1E293B"/>
  <text x="555" y="125" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="bold">CITATION IMPACT</text>
  <!-- Mini Graph Nodes -->
  <circle cx="650" cy="180" r="14" fill="#2563FF"/>
  <circle cx="590" cy="155" r="8" fill="#0EA5E9"/>
  <circle cx="710" cy="155" r="9" fill="#0EA5E9"/>
  <circle cx="610" cy="225" r="10" fill="#38BDF8"/>
  <circle cx="690" cy="225" r="8" fill="#38BDF8"/>
  <line x1="650" y1="180" x2="590" y2="155" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="650" y1="180" x2="710" y2="155" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="650" y1="180" x2="610" y2="225" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="650" y1="180" x2="690" y2="225" stroke="#1E293B" stroke-width="1.5"/>

  <!-- Right Bottom: Accuracy Badge -->
  <rect x="540" y="290" width="230" height="170" rx="12" fill="#070C1E" stroke="#2563FF" stroke-opacity="0.3"/>
  <text x="555" y="320" fill="#64748B" font-family="system-ui" font-size="11">AI Extraction Accuracy</text>
  <text x="555" y="355" fill="#FFFFFF" font-family="system-ui" font-size="28" font-weight="bold">99.4%</text>
  <text x="555" y="380" fill="#94A3B8" font-family="system-ui" font-size="12">Hallucination check verified with mathematical proof verification.</text>
</svg>`;

// 4. Real Estate Platform SVG
const realEstateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg-real" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050B18"/>
      <stop offset="100%" stop-color="#020409"/>
    </linearGradient>
    <linearGradient id="sky-sunset" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#bg-real)"/>

  <!-- App Header -->
  <rect x="30" y="30" width="740" height="50" rx="10" fill="#0B132B" stroke="#2563FF" stroke-opacity="0.2"/>
  <circle cx="60" cy="55" r="10" fill="#3B82F6"/>
  <text x="80" y="60" fill="#FFFFFF" font-family="system-ui" font-weight="bold" font-size="14">PrimeEstates Luxury</text>
  <rect x="220" y="45" width="80" height="20" rx="6" fill="#1E293B"/>
  <rect x="310" y="45" width="80" height="20" rx="6" fill="#1E293B"/>
  <rect x="400" y="45" width="80" height="20" rx="6" fill="#1E293B"/>
  <rect x="640" y="42" width="110" height="26" rx="13" fill="#2563FF"/>
  <text x="695" y="59" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">List Property</text>

  <!-- Hero Banner Preview: Modern Luxury Villa -->
  <rect x="30" y="100" width="740" height="240" rx="14" fill="url(#sky-sunset)" stroke="#1E293B"/>
  
  <!-- Architectural Villa Silhouette & Glass Windows -->
  <polygon points="120,300 120,180 340,180 340,300" fill="#0A0F1D"/>
  <polygon points="340,300 340,150 560,150 560,300" fill="#0D1426"/>
  <polygon points="560,300 560,200 680,200 680,300" fill="#0A0F1D"/>

  <!-- Warm Illuminated Windows -->
  <rect x="150" y="200" width="70" height="40" rx="4" fill="#FDE047" opacity="0.85"/>
  <rect x="240" y="200" width="70" height="40" rx="4" fill="#FEF08A" opacity="0.75"/>
  <rect x="365" y="170" width="80" height="60" rx="4" fill="#FDE047" opacity="0.9"/>
  <rect x="460" y="170" width="80" height="60" rx="4" fill="#FEF08A" opacity="0.8"/>
  <rect x="365" y="245" width="175" height="50" rx="4" fill="#60A5FA" opacity="0.4"/>

  <!-- Swimming Pool with Water Reflection -->
  <rect x="180" y="300" width="440" height="35" rx="6" fill="#0284C7" opacity="0.7"/>

  <!-- Floating Hero Overlay Card -->
  <rect x="60" y="130" width="280" height="110" rx="12" fill="#050B18" fill-opacity="0.9" stroke="#38BDF8" stroke-opacity="0.4"/>
  <text x="80" y="160" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="bold">EXCLUSIVE LISTING</text>
  <text x="80" y="185" fill="#FFFFFF" font-family="system-ui" font-size="18" font-weight="bold">The Obsidian Villa</text>
  <text x="80" y="210" fill="#E2E8F0" font-family="system-ui" font-size="13">$4,250,000 • 5 Beds • 6 Baths</text>

  <!-- Bottom: Filter Bar & Thumbnails -->
  <rect x="30" y="360" width="740" height="100" rx="14" fill="#090E21" stroke="#1E293B"/>
  <rect x="55" y="385" width="140" height="50" rx="8" fill="#131B36"/>
  <text x="70" y="405" fill="#94A3B8" font-family="system-ui" font-size="11">Location</text>
  <text x="70" y="425" fill="#FFFFFF" font-family="system-ui" font-size="13" font-weight="600">Beverly Hills, CA</text>

  <rect x="210" y="385" width="140" height="50" rx="8" fill="#131B36"/>
  <text x="225" y="405" fill="#94A3B8" font-family="system-ui" font-size="11">Property Type</text>
  <text x="225" y="425" fill="#FFFFFF" font-family="system-ui" font-size="13" font-weight="600">Modern Villa</text>

  <rect x="365" y="385" width="140" height="50" rx="8" fill="#131B36"/>
  <text x="380" y="405" fill="#94A3B8" font-family="system-ui" font-size="11">Price Range</text>
  <text x="380" y="425" fill="#FFFFFF" font-family="system-ui" font-size="13" font-weight="600">$2.5M - $8.0M</text>

  <rect x="530" y="385" width="215" height="50" rx="8" fill="#2563FF"/>
  <text x="637" y="415" text-anchor="middle" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="bold">Explore 140+ Properties →</text>
</svg>`;

// Avatars for Testimonials
const avatarAwais = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <linearGradient id="grad-a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="60" fill="url(#grad-a)"/>
  <circle cx="60" cy="48" r="24" fill="#E2E8F0"/>
  <path d="M 24 105 C 24 82, 40 76, 60 76 C 80 76, 96 82, 96 105 Z" fill="#2563FF"/>
  <!-- Glasses / Tie -->
  <polygon points="57,78 63,78 61,95 59,95" fill="#FFFFFF"/>
</svg>`;

const avatarSalman = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <linearGradient id="grad-s" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#065F46"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="60" fill="url(#grad-s)"/>
  <circle cx="60" cy="48" r="24" fill="#F8FAFC"/>
  <path d="M 24 105 C 24 82, 40 76, 60 76 C 80 76, 96 82, 96 105 Z" fill="#0D9488"/>
</svg>`;

const avatarUsman = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <linearGradient id="grad-u" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="60" fill="url(#grad-u)"/>
  <circle cx="60" cy="48" r="24" fill="#F1F5F9"/>
  <path d="M 24 105 C 24 82, 40 76, 60 76 C 80 76, 96 82, 96 105 Z" fill="#6366F1"/>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'project_smart_meal.svg'), smartMealSvg);
fs.writeFileSync(path.join(targetDir, 'project_career_coach.svg'), careerCoachSvg);
fs.writeFileSync(path.join(targetDir, 'project_naudex_research.svg'), naudexResearchSvg);
fs.writeFileSync(path.join(targetDir, 'project_real_estate.svg'), realEstateSvg);
fs.writeFileSync(path.join(targetDir, 'avatar_awais.svg'), avatarAwais);
fs.writeFileSync(path.join(targetDir, 'avatar_salman.svg'), avatarSalman);
fs.writeFileSync(path.join(targetDir, 'avatar_usman.svg'), avatarUsman);

console.log('Project and avatar SVG assets generated successfully!');
