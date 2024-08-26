# **Frontend Mentor Challenge - Social media dashboard with theme switcher**

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H "https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Tailwindcss dark theme](#tailwindcss-dark-theme)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/Social-media-dashboard-with-theme-switcher>

- Website: <https://xup60521.github.io/Social-media-dashboard-with-theme-switcher/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- react

- vite

- typescript

- tailwindcss

- zod (prevent typescript error when using react context)

- svgr (to import svg directly in react)

### What I learned

#### Tailwindcss dark theme

Tailwindcss provides a simple way to implement dark theme.

By changing `darkMode` to `selector` in `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    // ...
}
```

A simple theme-changeable component looks like:

```tsx
export default function App() {
  const [isDark, setIsDark] = useState(false)
  return <div className={isDark ? "dark" : ""}>
      <button 
        onClick={()=>setIsDark(!isDark)}
        className="text-black dark:text-whtie"
      >
        change theme
      </button>
    </div>
}
```

Following this method, we can built our theme-changeable web relatively fast.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>