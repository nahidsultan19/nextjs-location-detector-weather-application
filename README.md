This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Descriptions

Developed a weather application using Next.js App Router with advanced routing architecture.

- Created custom API routes to handle weather data for multiple predefined locations.

- Implemented Parallel Routes and Slots to structure the layout efficiently and improve UI composition.

- Used the Browser Geolocation API to detect user latitude and longitude, then dynamically redirected from the main page.js to location-specific routes.

- Designed a reusable data-fetching utility library to avoid placing fetch logic directly inside components, ensuring better separation of concerns and reusability across different pages.

- Retrieved and rendered dynamic weather data into JSX-based UI components.

- Implemented a location switch feature, allowing users to toggle between supported locations.

- Added direct URL-based location support, enabling users to access weather information via route parameters.
