# Portfolio Website - Begonet Debebe

A modern, responsive, and professional portfolio website built with React for a Full-Stack Developer specialized in Backend (Laravel & Node.js) and Machine Learning.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalist design with professional developer theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark & Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO-Friendly**: Proper meta tags and semantic HTML structure
- **React Router**: Multi-page navigation with smooth transitions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Sections

1. **Home** - Hero section with introduction and call-to-action buttons
2. **About Me** - Professional summary, career goals, and interests
3. **Skills** - Categorized skill sets with progress bars
4. **Projects** - Showcase of projects with technologies and links
5. **Machine Learning** - ML concepts, algorithms, and workflow
6. **Resume** - Education, experience, and certifications
7. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client (available for API calls)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Section.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── MachineLearning.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Profile Information**: Edit `src/pages/Home.jsx` to update name, title, and bio
2. **About Section**: Modify `src/pages/About.jsx` for professional summary and goals
3. **Skills**: Update skills in `src/pages/Skills.jsx`
4. **Projects**: Add your projects in `src/pages/Projects.jsx`
5. **Resume**: Update education, experience, and certifications in `src/pages/Resume.jsx`
6. **Contact**: Update contact information in `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
}
```

### Add Resume PDF

1. Place your resume PDF in the `public` folder
2. Update the download function in `src/pages/Resume.jsx` to link to your PDF file

### Connect Contact Form

The contact form currently simulates submission. To connect it to a backend:

1. Create an API endpoint to handle form submissions
2. Update the `handleSubmit` function in `src/pages/Contact.jsx` to send data to your API using Axios

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import the repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 📝 License

This project is private and proprietary.

## 👤 Author

**Begonet Debebe**
- Full-Stack Developer
- Backend (Laravel & Node.js)
- Machine Learning Engineer

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for the icon library

---

Built with ❤️ using React and modern web technologies.

