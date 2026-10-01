# UMANG 2026 — Olympus Reborn
### Annual Sports Festival | International Institute of Information Technology Bangalore (IIIT Bangalore)

Official registration website for **UMANG 2026**, built with React 19, TypeScript, Vite, and Tailwind CSS.
Theme: **Olympus Reborn** (Greek Mythology + Ancient Olympics + Modern Collegiate Sports).

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🏛️ Project Features & Structure

- **Dedicated Multi-Page Flow**:
  - `HOME`: Cinematic Hero, Intro, Sports Carousel, Pillars, Final CTA.
  - `SPORTS`: Full grid of all 9 sports with category filters and live search.
  - `SPORT DETAIL`: Dedicated page for each sport with Overview, Format & Rules, Visual Gallery, and direct Event Registration buttons.
  - `ABOUT`: The spirit of Umang, Olympus Reborn lore, campus traditions.
  - `SPORTS COMMITTEE`: Student coordinators with photos, roles, LinkedIn & Instagram hover profiles.
  - `CONTACT & MAP`: Embedded Google Maps satellite view for IIIT Bangalore campus, transit directions, official Umang Instagram, and contact cards.
  - `FOOTER`: Present across all pages with campus address, contact info, and social links.

---

## 📝 How to Update Google Form Links

All registration links are centralized in a single file:

📁 **`src/config/registrationLinks.ts`**

Simply replace the placeholder URLs with your official Google Form links:

```typescript
export const REGISTRATION_LINKS: Record<EventRegistrationKey, string> = {
  // Basketball
  basketball_men_3v3: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  basketball_men_5v5: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  basketball_women_3v3: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  
  // Football
  football_men_6v6: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",

  // Table Tennis, Badminton, Volleyball, Tennis, Kabaddi, Throwball, Chess...
};
```

---

## 🚀 How to Push to GitHub & View on GitHub Pages Online Link

### Step 1: Push Code to GitHub
1. Create a repository on [GitHub](https://github.com/new) named `umang-2026`.
2. Connect your code and push to the `main` branch:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/umang-2026.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages to Get Your Online View Link
This repository is pre-configured with:
- `base: './'` in `vite.config.ts` (ensuring all assets load correctly on GitHub Pages)
- Automated deployment workflow in `.github/workflows/deploy.yml`

To activate your online link:
1. Open your repository on GitHub (`https://github.com/<YOUR_USERNAME>/umang-2026`).
2. Go to **Settings** (top tab with gear icon).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **"Build and deployment" > "Source"**, select **GitHub Actions**.
5. Once selected, go to the **Actions** tab in your repository:
   - You will see the **"Deploy to GitHub Pages"** workflow running automatically.
   - When it completes with a green checkmark `✓`, your online link will appear:
   
   🌐 **`https://<YOUR_GITHUB_USERNAME>.github.io/umang-2026/`**
6. Click that link or find it displayed right on your repository's front page under the **Environments** section on the right sidebar!

