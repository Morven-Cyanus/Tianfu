import { ref, computed } from 'vue'

const ADMIN_USERNAME = 'Morven-Cyanus'
const AUTH_KEY = 'tianfu_admin_auth'

const authUser = ref(null)
const isAuthLoading = ref(false)
const authError = ref(null)

export const useAuth = () => {
  // 从 localStorage 加载认证状态
  const loadAuth = () => {
    try {
      const saved = localStorage.getItem(AUTH_KEY)
      if (saved) {
        authUser.value = JSON.parse(saved)
      }
    } catch (e) {
      console.error('加载认证信息失败:', e)
    }
  }

  // 通过 GitHub API 验证用户身份
  const verifyGitHubUser = async (username, token) => {
    isAuthLoading.value = true
    authError.value = null
    
    try {
      const response = await fetch(`https://api.github.com/user`, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      })

      if (!response.ok) {
        throw new Error('Token 验证失败')
      }

      const userData = await response.json()
      
      if (userData.login !== ADMIN_USERNAME) {
        throw new Error(`只有 ${ADMIN_USERNAME} 才能访问管理后台`)
      }

      // 认证成功
      const authData = {
        username: userData.login,
        name: userData.name,
        avatar: userData.avatar_url,
        token: token,
        loginTime: new Date().toISOString(),
      }

      authUser.value = authData
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData))
      
      return true
    } catch (error) {
      authError.value = error.message
      authUser.value = null
      localStorage.removeItem(AUTH_KEY)
      return false
    } finally {
      isAuthLoading.value = false
    }
  }

  // 简单的本地认证（用于演示/本地开发）
  const localLogin = (username, password) => {
    if (username === ADMIN_USERNAME && password === 'admin123') {
      const authData = {
        username: ADMIN_USERNAME,
        loginTime: new Date().toISOString(),
        isLocal: true,
      }
      authUser.value = authData
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData))
      return true
    }
    authError.value = '用户名或密码错误'
    return false
  }

  // 登出
  const logout = () => {
    authUser.value = null
    localStorage.removeItem(AUTH_KEY)
    authError.value = null
  }

  // 检查是否为管理员
  const isAdmin = computed(() => {
    return authUser.value && authUser.value.username === ADMIN_USERNAME
  })

  // 初始化时加载认证状态
  loadAuth()

  return {
    authUser,
    isAuthLoading,
    authError,
    isAdmin,
    verifyGitHubUser,
    localLogin,
    logout,
    loadAuth,
  }
}
