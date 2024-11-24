import type { UserContext, UserContextService } from '@mesalvo/mesalvo-oauth2'
import { AuthGuard } from '@mesalvo/mesalvo-oauth2'

interface UserIdentity {
  id: string | number
  fullName?: string
  avatar?: string
  [key: string]: unknown
}

type AuthRedirectResult = {
  redirectTo?: string | false
  logoutOnFailure?: boolean
}

type AuthProvider = {
  login: () => Promise<UserContext>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  checkError: ({ status }: { status: number }) => Promise<void>
  getIdentity?: () => Promise<UserIdentity>
  getPermissions: () => Promise<unknown>
}

const convertUserContextToIdentity = (userContext: UserContext): UserIdentity => {
  return {
    id: userContext.user.id,
    fullName: userContext.user.firstName + ' ' + userContext.user.lastName,
    userContext: userContext,
  }
}

const authProvider = (userContextService: UserContextService): AuthProvider => {
  return {
    // called when the user attempts to log in
    login: () => {
      const authGuard = AuthGuard.instance()
      return authGuard.queryUserContextOrRedirectToLogin()
    },

    // called when the user clicks on the logout button
    logout: () => {
      const authGuard = AuthGuard.instance()
      authGuard.redirectToLogoutPage()
      return Promise.resolve()
    },

    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
      if (status === 401) {
        // token invalid => logout
        return Promise.reject(new Error('authProvider.errors.sessionExpired'))
      } else {
        // try to continue (even it auth denied)
        return Promise.resolve()
      }
    },

    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => Promise.resolve(),

    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),

    // called to retrieve the user identity from the userContext
    // (also initializes the userContext on login)
    getIdentity: async () => {
      const userContext = await userContextService.acquireUserContext()
      return convertUserContextToIdentity(userContext)
    },
  }
}

export { authProvider, convertUserContextToIdentity, type UserIdentity, type AuthRedirectResult }
