This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Install the dependencies:

```bash
npm install
```

2. Go to your [Square Developer Dashboard](https://developer.squareup.com/apps), create an app and get the credentials.

3. Create a file named `.env.local` in your project's root folder, copy this code and replace the data with your credentials:

```
SQUARE_ACCESS_TOKEN='YOUR_ACCESS_TOKEN'
NEXT_PUBLIC_SQUARE_APP_ID='YOUR_APP_ID'
NEXT_PUBLIC_SQUARE_LOCATION_ID='YOUR_LOCATION_ID'
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Use any of the [Sandbox credit card numbers](https://developer.squareup.com/docs/devtools/sandbox/payments#web-and-mobile-client-testing) to test the payment flow.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Square on Next.js, take a look at:
https://developer.squareup.com/blog/accept-payments-with-square-using-next-js-app-router/
