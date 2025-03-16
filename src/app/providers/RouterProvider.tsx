import { createElement, lazy } from 'react'
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom'
// import { pathKeys } from '~shared/lib/react-router'
// import { articlePageRoute } from '~pages/article'
// import { editorPageRoute } from '~pages/editor'
// import { homePageRoute } from '~pages/home'
// import { loginPageRoute } from '~pages/login'
// import { page404Route } from '~pages/page-404'
// import { profilePageRoute } from '~pages/profile'
// import { registerPageRoute } from '~pages/register'
// import { settingsPageRoute } from '~pages/settings'

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />
}

const GenericLayout = lazy(() =>
  import('~pages/layouts').then((module) => ({
    default: module.GenericLayout,
  })),
)

const GuestLayout = lazy(() =>
  import('~pages/layouts').then((module) => ({
    default: module.GuestLayout,
  })),
)

const UserLayout = lazy(() =>
  import('~pages/layouts').then((module) => ({
    default: module.UserLayout,
  })),
)

const browserRouter = createBrowserRouter([
  {
    children: [
      {
        element: createElement(enhance(GenericLayout)),
        children: [homePageRoute, articlePageRoute, profilePageRoute],
      },
      {
        element: createElement(enhance(UserLayout)),
        children: [editorPageRoute, settingsPageRoute],
      },
      {
        element: createElement(enhance(GuestLayout)),
        children: [loginPageRoute, registerPageRoute],
      },
      {
        element: createElement(Outlet),
        children: [page404Route],
      },
      {
        loader: async () => redirect(pathKeys.page404()),
        path: '*',
      },
    ],
  },
])