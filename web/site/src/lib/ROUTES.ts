/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
const PAGES = {
  "/": `/`,
  "/about": `/about`,
  "/admin": `/admin`,
  "/admin/escapes": `/admin/escapes`,
  "/admin/escapes/[slug]/delete": (params: { slug: (string | number) }) => {
    return `/admin/escapes/${params.slug}/delete`
  },
  "/admin/escapes/[slug]/edit": (params: { slug: (string | number) }) => {
    return `/admin/escapes/${params.slug}/edit`
  },
  "/admin/escapes/create": `/admin/escapes/create`,
  "/admin/users": `/admin/users`,
  "/admin/users/[userId]/edit": (params: { userId: (string | number) }) => {
    return `/admin/users/${params.userId}/edit`
  },
  "/auth/login": `/auth/login`,
  "/auth/register": `/auth/register`,
  "/contact": `/contact`,
  "/escapes": `/escapes`,
  "/escapes/[slug]": (params: { slug: (string | number) }) => {
    return `/escapes/${params.slug}`
  },
  "/escapes/[slug]/book": (params: { slug: (string | number) }) => {
    return `/escapes/${params.slug}/book`
  },
  "/escapes/[slug]/book/pay": (params: { slug: (string | number) }) => {
    return `/escapes/${params.slug}/book/pay`
  },
  "/faq": `/faq`,
  "/jobs": `/jobs`,
  "/privacy-policy": `/privacy-policy`,
  "/profile": `/profile`,
  "/profile/edit": `/profile/edit`,
  "/teambuilding": `/teambuilding`,
  "/terms-and-conditions": `/terms-and-conditions`
}

/**
 * SERVERS
 */
const SERVERS = {
  
}

/**
 * ACTIONS
 */
const ACTIONS = {
  "default /admin/escapes/[slug]/edit": (params: { slug: (string | number) }) => {
    return `/admin/escapes/${params.slug}/edit`
  },
  "default /admin/escapes/create": `/admin/escapes/create`,
  "default /admin/users/[userId]/edit": (params: { userId: (string | number) }) => {
    return `/admin/users/${params.userId}/edit`
  },
  "default /auth/login": `/auth/login`,
  "default /auth/register": `/auth/register`,
  "default /contact": `/contact`,
  "default /escapes/[slug]": (params: { slug: (string | number) }) => {
    return `/escapes/${params.slug}`
  },
  "default /escapes/[slug]/book": (params: { slug: (string | number) }) => {
    return `/escapes/${params.slug}/book`
  },
  "profile /profile/edit": `/profile/edit?/profile`,
  "password /profile/edit": `/profile/edit?/password`,
  "default /teambuilding": `/teambuilding`
}

/**
 * LINKS
 */
const LINKS = {
  
}

type ParamValue = string | number | undefined

/**
 * Append search params to a string
 */
export const appendSp = (sp?: Record<string, ParamValue | ParamValue[]>, prefix: '?' | '&' = '?') => {
  if (sp === undefined) return ''

  const params = new URLSearchParams()
  const append = (n: string, v: ParamValue) => {
    if (v !== undefined) {
      params.append(n, String(v))
    }
  }

  for (const [name, val] of Object.entries(sp)) {
    if (Array.isArray(val)) {
      for (const v of val) {
        append(name, v)
      }
    } else {
      append(name, val)
    }
  }

  const formatted = params.toString()
  if (formatted) {
    return `${prefix}${formatted}`
  }
  return ''
}

/**
 * get the current search params
 * 
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */ 
export const currentSp = () => {
  const params = new URLSearchParams(window.location.search)
  const record: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    record[key] = value
  }
  return record
}

function StringOrUndefined(val: any) {
  if (val === undefined) {
    return undefined
  }

  return String(val)
}

// route function helpers
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never

const AllObjs = { ...PAGES, ...ACTIONS, ...SERVERS, ...LINKS }
type AllTypes = typeof AllObjs

/**
 * To be used like this: 
 * ```ts
 * import { route } from './ROUTES'
 * 
 * route('site_id', { id: 1 })
 * ```
 */
export function route<T extends FunctionKeys<AllTypes>>(key: T, ...params: FunctionParams<AllTypes[T]>): string
export function route<T extends NonFunctionKeys<AllTypes>>(key: T): string
export function route<T extends keyof AllTypes>(key: T, ...params: any[]): string {
  if (AllObjs[key] as any instanceof Function) {
    const element = (AllObjs as any)[key] as (...args: any[]) => string
    return element(...params)
  } else {
    return AllObjs[key] as string
  }
}

/**
* Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
*
* Full example:
* ```ts
* import type { KIT_ROUTES } from './ROUTES'
* import { kitRoutes } from 'vite-plugin-kit-routes'
*
* kitRoutes<KIT_ROUTES>({
*  PAGES: {
*    // here, key of object will be typed!
*  }
* })
* ```
*/
export type KIT_ROUTES = {
  PAGES: { '/': never, '/about': never, '/admin': never, '/admin/escapes': never, '/admin/escapes/[slug]/delete': 'slug', '/admin/escapes/[slug]/edit': 'slug', '/admin/escapes/create': never, '/admin/users': never, '/admin/users/[userId]/edit': 'userId', '/auth/login': never, '/auth/register': never, '/contact': never, '/escapes': never, '/escapes/[slug]': 'slug', '/escapes/[slug]/book': 'slug', '/escapes/[slug]/book/pay': 'slug', '/faq': never, '/jobs': never, '/privacy-policy': never, '/profile': never, '/profile/edit': never, '/teambuilding': never, '/terms-and-conditions': never }
  SERVERS: Record<string, never>
  ACTIONS: { 'default /admin/escapes/[slug]/edit': 'slug', 'default /admin/escapes/create': never, 'default /admin/users/[userId]/edit': 'userId', 'default /auth/login': never, 'default /auth/register': never, 'default /contact': never, 'default /escapes/[slug]': 'slug', 'default /escapes/[slug]/book': 'slug', 'profile /profile/edit': never, 'password /profile/edit': never, 'default /teambuilding': never }
  LINKS: Record<string, never>
  Params: { slug: never, userId: never }
}
