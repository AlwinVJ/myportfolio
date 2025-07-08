# AI/ML Portfolio

A modern, responsive portfolio website for AI/ML engineers built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Technical Skills Section**: Support for custom logo images
- **Project Showcase**: Featured projects with live demos and source code links
- **Contact Form**: Interactive contact form with validation
- **Professional Sections**: About, Education, Experience, Skills, and Contact

## Adding Skill Logos

To add custom logos for technical skills:

1. **Prepare your images**: 
   - Use PNG or JPEG format
   - Recommended size: 64x64px or higher (square aspect ratio works best)
   - Ensure good contrast and visibility

2. **Add images to the logos folder**:
   - Place your logo files in the `public/logos/` directory
   - Use descriptive filenames (e.g., `python.png`, `tensorflow.png`)

3. **Update the Skills component**:
   - Open `src/components/Skills.tsx`
   - Find the skill you want to update in the `skillCategories` array
   - Add or update the `logoPath` property:
   ```javascript
   { name: 'Python', logoPath: '/logos/python.png' }
   ```

4. **Fallback system**:
   - If an image fails to load or doesn't exist, the component automatically falls back to colored initials
   - This ensures the site remains functional even with missing images

## Example Logo Structure

```
public/
└── logos/
    ├── python.png
    ├── tensorflow.png
    ├── pytorch.png
    ├── aws.png
    ├── docker.png
    └── ... (other skill logos)
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update personal information in each component
- **Skills**: Add/remove skills in the `Skills.tsx` component
- **Projects**: Update project information in the `Projects.tsx` component

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Vite