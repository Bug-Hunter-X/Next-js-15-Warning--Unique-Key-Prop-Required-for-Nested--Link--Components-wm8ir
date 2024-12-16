# Next.js 15 Nested Link Warning: Unique Key Prop

This repository demonstrates a common warning encountered in Next.js 15 applications involving nested `<Link>` components from `next/link`.  The warning message is:

`Warning: Each <Link> inside a <Link> needs a unique key prop`

The issue arises when `<Link>` components are nested without providing unique `key` props to each child component. While the application may function correctly, this warning hints at potential performance problems and other unforeseen complications.

The solution involves adding unique keys to resolve the warning.