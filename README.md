This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Resume Website Idea

The idea of a resume site was born to demonstrate my skills as a developer:

In this website I'll show:

* An homepage '/' with: personal info, education, interest
* A path '/work-experience' path where display all experiences
* A path '/resume/[id]' where id is the internal identifier of the application to display the cover letter and the
  experience specific to that application.
    * The links that routes the user to home or work experience triggers a popup that inform the user that this section
      is reachable only from the given url.

## Folders

- 'data' Repo for JSON & Markdown data
- 'components' Pure react components module
