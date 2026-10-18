# Sharath Chandra R Portfolio

## Architecture

- Next.js App Router, TypeScript, Tailwind CSS, and CSS design tokens.
- `/` is the Professional view, `/creative` is the Creative view, and `/work/[slug]` provides reusable project pages.
- Reusable primitives live in `src/components/ui`; portfolio-specific presentation lives in `src/components/features`; content remains in `src/content`.
- Content types and runtime validation protect project slugs and required fields.

## Maintenance

- Add or edit profile, experience, projects, achievements, and creative placeholders in `src/content`.
- Reusable component examples live in Storybook under `src/stories`.
- Run `npm run storybook` to review components and `npm run build-storybook` before publishing component changes.

## Commands

```bash
npm run dev
npm run typecheck
npm run build
npm run storybook
npm run build-storybook
```

## Deferred content

- Profile portrait
- Poems and photography
- Film references and workshop history
- Resume download
