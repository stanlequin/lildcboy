# Cute Lil' DC Boy - Jason Workman Fan Page

A playful static website created for cutelildcboy.com. All in good fun! 😄

## 🚀 Deploying to Azure Static Web Apps (Free Tier)

### Prerequisites
- An Azure account (sign up at https://azure.microsoft.com/free/)
- GitHub account
- Git installed on your machine

### Step 1: Push to GitHub

1. Initialize git in this directory and push to GitHub:
```bash
cd /Users/stan/Projects/lildcboy
git init
git add .
git commit -m "Initial commit: Jason Workman appreciation site"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Create Azure Static Web App

1. Log in to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"
5. Fill in the details:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create a new one (e.g., "lildcboy-rg")
   - **Name**: Choose a unique name (e.g., "cutelildcboy")
   - **Plan type**: Select **Free**
   - **Region**: Choose closest to you
   - **Source**: Select **GitHub**
   - **Organization**: Your GitHub username
   - **Repository**: Select your repo
   - **Branch**: main
   - **Build Presets**: Custom
   - **App location**: `/` (root)
   - **Api location**: (leave empty)
   - **Output location**: (leave empty)

6. Click "Review + create" then "Create"

### Step 3: Wait for Deployment

Azure will automatically:
- Create a GitHub Action in your repository
- Build and deploy your site
- Provide you with a URL (e.g., https://nice-ocean-xxxxx.azurestaticapps.net)

This usually takes 2-5 minutes. Check the "Actions" tab in your GitHub repo to see progress.

### Step 4: Get Your Azure URL

1. Go to your Azure Static Web App in the portal
2. Find the URL in the "Overview" section
3. This is what you'll point your GoDaddy DNS to

### Step 5: Configure Custom Domain (GoDaddy DNS)

1. In Azure Portal, go to your Static Web App
2. Click on "Custom domains" in the left menu
3. Click "+ Add" and select "Custom domain on other DNS"
4. Enter `cutelildcboy.com`
5. Azure will provide you with validation instructions

6. In your GoDaddy DNS settings, add these records:
   - **CNAME Record**:
     - Type: `CNAME`
     - Name: `www`
     - Value: `<your-azure-static-web-app-url>` (without https://)
     - TTL: 600 (or default)
   
   - **TXT Record** (for validation):
     - Type: `TXT`
     - Name: `@` or `asuid`
     - Value: (provided by Azure)
     - TTL: 600
   
   - **A Record** (for apex domain):
     - Type: `A`
     - Name: `@`
     - Value: (IP address provided by Azure, if available)
     - TTL: 600

7. Wait for DNS propagation (can take up to 48 hours, usually much faster)
8. Verify in Azure that the custom domain is validated

### Alternative: Free Static Web Hosting Methods

If you don't want to use Azure, here are other free options:

1. **GitHub Pages** (completely free):
   - Push code to GitHub
   - Go to repo Settings > Pages
   - Select branch and save
   - Add custom domain in settings

2. **Netlify** (free tier):
   - Sign up at netlify.com
   - Connect your GitHub repo
   - Deploy with one click
   - Add custom domain in site settings

3. **Vercel** (free tier):
   - Sign up at vercel.com
   - Import your GitHub repo
   - Automatic deployments
   - Add custom domain in project settings

## 📁 Project Structure

```
lildcboy/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript for interactive elements
├── staticwebapp.config.json # Azure Static Web Apps configuration
└── README.md               # This file
```

## 🎨 Customization

Feel free to edit:
- `index.html` - Change the content, add more sections
- `styles.css` - Modify colors, fonts, layouts
- `script.js` - Add more affirmations or interactive features

## 💰 Cost

Azure Static Web Apps Free tier includes:
- 100 GB bandwidth per month
- Always free for personal projects
- Custom domains included
- Free SSL certificate

Perfect for this type of site!

## 📝 Notes

- The site is fully static (HTML/CSS/JS only)
- No backend or database needed
- Loads fast and performs well
- Mobile responsive
- Free SSL certificate included in Azure

---

Made with 💙 and lots of jokes. Jason, you're the best! 😄
