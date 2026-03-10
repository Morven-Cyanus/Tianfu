<script setup>
import { ref, computed } from 'vue'
import { useApplications } from '@/composables/useApplications'
import { useAuth } from '@/composables/useAuth'
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'

const { applications, elitesData, approveApplication, rejectApplication, deleteApplication, addElite, deleteElite, updateElite } = useApplications()
const { authUser, isAuthLoading, authError, isAdmin, verifyGitHubUser, localLogin, logout } = useAuth()

// 登录表单
const showLoginForm = ref(!isAdmin.value)
const loginMethod = ref('local') // 'local' 或 'github'
const username = ref('')
const password = ref('')
const githubToken = ref('')

const activeTab = ref('applications')
const editingEliteIndex = ref(null)
const editingElite = ref(null)
const showAddForm = ref(false)
const newElite = ref({
  天府: '',
  号: '',
  凡间: '',
  神界: '',
  称: '',
  原型: '',
  主脉: '',
  势力: '',
  生: '',
  故乡: '',
  道: '',
})

// 处理登录
const handleLogin = async () => {
  if (loginMethod.value === 'local') {
    if (localLogin(username.value, password.value)) {
      showLoginForm.value = false
      username.value = ''
      password.value = ''
    }
  } else {
    // GitHub 登录
    if (await verifyGitHubUser(username.value, githubToken.value)) {
      showLoginForm.value = false
      username.value = ''
      githubToken.value = ''
    }
  }
}

// 处理登出
const handleLogout = () => {
  logout()
  showLoginForm.value = true
  username.value = ''
  password.value = ''
  githubToken.value = ''
}

// 批准申请（权限检查）
const approve = (id) => {
  if (!isAdmin.value) {
    alert('只有 Morven-Cyanus 才能批准申请')
    return
  }
  if (approveApplication(id)) {
    alert('已批准申请并添加到天府群英！')
  }
}

// 拒绝申请
const reject = (id) => {
  if (confirm('确定要拒绝此申请吗？')) {
    rejectApplication(id)
    alert('已拒绝申请')
  }
}

// 删除申请
const deleteApp = (id) => {
  if (confirm('确定要删除此申请吗？')) {
    deleteApplication(id)
    alert('已删除申请')
  }
}

// 编辑群英
const startEditElite = (index) => {
  editingEliteIndex.value = index
  editingElite.value = { ...elitesData.value[index] }
}

// 保存编辑
const saveEditElite = () => {
  if (editingEliteIndex.value !== null && editingElite.value) {
    updateElite(editingEliteIndex.value, editingElite.value)
    editingEliteIndex.value = null
    editingElite.value = null
    alert('已更新记录')
  }
}

// 取消编辑
const cancelEditElite = () => {
  editingEliteIndex.value = null
  editingElite.value = null
}

// 添加新群英
const addNewElite = () => {
  if (!newElite.value.号 || !newElite.value.凡间) {
    alert('请至少填写"号"和"凡间"字段')
    return
  }
  addElite({ ...newElite.value })
  newElite.value = {
    天府: '',
    号: '',
    凡间: '',
    神界: '',
    称: '',
    原型: '',
    主脉: '',
    势力: '',
    生: '',
    故乡: '',
    道: '',
  }
  showAddForm.value = false
  alert('已添加新成员到天府群英')
}

// 删除群英
const deleteEliteRecord = (index) => {
  if (confirm('确定要删除此记录吗？')) {
    deleteElite(index)
    alert('已删除记录')
  }
}

// 获取申请状态的中文
const getStatusText = (status) => {
  const statusMap = {
    pending: '待审批',
    approved: '已批准',
    rejected: '已拒绝',
  }
  return statusMap[status] || status
}

// 获取申请状态的样式类
const getStatusClass = (status) => {
  return `status-${status}`
}
</script>

<template>
  <PageLayout title="管理后台" subtitle="Admin Dashboard">
    <!-- 登录界面 -->
    <GlassPanel v-if="showLoginForm">
      <div class="login-container">
        <h2>🔐 管理员登录</h2>
        <p class="login-hint">只有天府的管理员才能访问管理后台</p>

        <!-- 登录方式切换 -->
        <div class="login-method-tabs">
          <button
            class="method-tab"
            :class="{ active: loginMethod === 'local' }"
            @click="loginMethod = 'local'"
          >
            本地登录
          </button>
          <button
            class="method-tab"
            :class="{ active: loginMethod === 'github' }"
            @click="loginMethod = 'github'"
          >
            GitHub OAuth
          </button>
        </div>

        <!-- 本地登录 -->
        <div v-if="loginMethod === 'local'" class="login-form">
          <div class="form-group">
            <label>用户名</label>
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名"
              class="login-input"
            />
          </div>
          <div class="form-group">
            <label>密码</label>
            <input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              class="login-input"
            />
          </div>
          <p class="login-tip">
              
          </p>
        </div>

        <!-- GitHub 登录 -->
        <div v-else class="login-form">
          <div class="form-group">
            <label>GitHub 用户名</label>
            <input
              v-model="username"
              type="text"
              placeholder="请输入 GitHub 用户名"
              class="login-input"
            />
          </div>
          <div class="form-group">
            <label>GitHub Personal Access Token</label>
            <input
              v-model="githubToken"
              type="password"
              placeholder="请输入 GitHub Token"
              class="login-input"
            />
          </div>
          <p class="login-tip">
            在 <a href="https://github.com/settings/tokens" target="_blank">GitHub Settings</a>
            中生成 Personal Access Token (需要 read:user 权限)
          </p>
        </div>

        <!-- 错误提示 -->
        <div v-if="authError" class="error-message">
          ⚠ {{ authError }}
        </div>

        <!-- 登录按钮 -->
        <button
          class="login-btn"
          @click="handleLogin"
          :disabled="isAuthLoading"
        >
          {{ isAuthLoading ? '验证中...' : '登录' }}
        </button>
      </div>
    </GlassPanel>

    <!-- 管理后台主界面 -->
    <GlassPanel v-else>
      <div class="admin-container">
        <!-- 用户信息栏 -->
        <div class="admin-header">
          <div class="user-info">
            <span v-if="authUser.avatar" class="user-avatar">
              <img :src="authUser.avatar" :alt="authUser.username" />
            </span>
            <div class="user-details">
              <p class="username">👤 {{ authUser.username }}</p>
              <p v-if="authUser.name" class="user-name">{{ authUser.name }}</p>
              <p class="login-time">
                登录于 {{ new Date(authUser.loginTime).toLocaleString('zh-CN') }}
              </p>
            </div>
          </div>
          <button class="logout-btn" @click="handleLogout">登出</button>
        </div>

        <div class="admin-tabs">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'applications' }"
            @click="activeTab = 'applications'"
          >
            💌 加入申请 ({{ applications.filter(a => a.status === 'pending').length }})
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'elites' }"
            @click="activeTab = 'elites'"
          >
            👥 天府群英 ({{ elitesData.length }})
          </button>
        </div>

        <!-- 申请管理标签页 -->
        <div v-if="activeTab === 'applications'" class="tab-content">
          <div v-if="applications.length === 0" class="empty-state">
            <p>暂无申请</p>
          </div>

          <div v-else class="applications-list">
            <div v-for="app in applications" :key="app.id" class="application-card">
              <div class="app-header">
                <h3>{{ app.daohao }} - {{ app.name }}</h3>
                <span :class="getStatusClass(app.status)" class="status-badge">{{ getStatusText(app.status) }}</span>
              </div>

              <div class="app-info">
                <p><strong>申请时间：</strong> {{ app.createdAt }}</p>
                <p><strong>称号：</strong> {{ app.title }}</p>
                <p><strong>势力：</strong> {{ app.force }}</p>
                <p><strong>原型：</strong> {{ app.prototype }}</p>
                <p><strong>故乡：</strong> {{ app.hometown }}</p>
                <p v-if="app.sect"><strong>主脉：</strong> {{ app.sect }}</p>
                <p v-if="app.elitePosition"><strong>天府职位：</strong> {{ app.elitePosition }}</p>
                <p><strong>道则：</strong> {{ app.taoZe }}</p>
              </div>

              <div v-if="app.status === 'pending'" class="app-actions">
                <button class="btn-approve" @click="approve(app.id)">✓ 批准</button>
                <button class="btn-reject" @click="reject(app.id)">✗ 拒绝</button>
                <button class="btn-delete" @click="deleteApp(app.id)">🗑 删除</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 群英管理标签页 -->
        <div v-if="activeTab === 'elites'" class="tab-content">
          <div class="elites-toolbar">
            <button class="btn-add" @click="showAddForm = !showAddForm">
              {{ showAddForm ? '取消' : '➕ 添加新成员' }}
            </button>
          </div>

          <!-- 添加表单 -->
          <div v-if="showAddForm" class="add-form">
            <h4>添加新成员到天府群英</h4>
            <div class="form-grid">
              <div class="form-field">
                <label>天府</label>
                <input v-model="newElite.天府" type="text" />
              </div>
              <div class="form-field">
                <label>号 *</label>
                <input v-model="newElite.号" type="text" />
              </div>
              <div class="form-field">
                <label>凡间 *</label>
                <input v-model="newElite.凡间" type="text" />
              </div>
              <div class="form-field">
                <label>神界</label>
                <input v-model="newElite.神界" type="text" />
              </div>
              <div class="form-field">
                <label>称</label>
                <input v-model="newElite.称" type="text" />
              </div>
              <div class="form-field">
                <label>原型</label>
                <input v-model="newElite.原型" type="text" />
              </div>
              <div class="form-field">
                <label>主脉</label>
                <input v-model="newElite.主脉" type="text" />
              </div>
              <div class="form-field">
                <label>势力</label>
                <input v-model="newElite.势力" type="text" />
              </div>
              <div class="form-field">
                <label>生</label>
                <input v-model="newElite.生" type="text" />
              </div>
              <div class="form-field">
                <label>故乡</label>
                <input v-model="newElite.故乡" type="text" />
              </div>
              <div class="form-field">
                <label>道</label>
                <input v-model="newElite.道" type="text" />
              </div>
            </div>
            <button class="btn-save" @click="addNewElite">保存</button>
          </div>

          <!-- 群英列表 -->
          <div class="elites-table">
            <div v-for="(elite, index) in elitesData" :key="index" class="elite-card">
              <div v-if="editingEliteIndex === index" class="edit-mode">
                <h4>编辑成员</h4>
                <div class="form-grid">
                  <div class="form-field">
                    <label>天府</label>
                    <input v-model="editingElite.天府" type="text" />
                  </div>
                  <div class="form-field">
                    <label>号</label>
                    <input v-model="editingElite.号" type="text" />
                  </div>
                  <div class="form-field">
                    <label>凡间</label>
                    <input v-model="editingElite.凡间" type="text" />
                  </div>
                  <div class="form-field">
                    <label>神界</label>
                    <input v-model="editingElite.神界" type="text" />
                  </div>
                  <div class="form-field">
                    <label>称</label>
                    <input v-model="editingElite.称" type="text" />
                  </div>
                  <div class="form-field">
                    <label>原型</label>
                    <input v-model="editingElite.原型" type="text" />
                  </div>
                  <div class="form-field">
                    <label>主脉</label>
                    <input v-model="editingElite.主脉" type="text" />
                  </div>
                  <div class="form-field">
                    <label>势力</label>
                    <input v-model="editingElite.势力" type="text" />
                  </div>
                  <div class="form-field">
                    <label>生</label>
                    <input v-model="editingElite.生" type="text" />
                  </div>
                  <div class="form-field">
                    <label>故乡</label>
                    <input v-model="editingElite.故乡" type="text" />
                  </div>
                  <div class="form-field">
                    <label>道</label>
                    <input v-model="editingElite.道" type="text" />
                  </div>
                </div>
                <div class="edit-actions">
                  <button class="btn-save" @click="saveEditElite">保存</button>
                  <button class="btn-cancel" @click="cancelEditElite">取消</button>
                </div>
              </div>

              <div v-else class="view-mode">
                <div class="elite-basic-info">
                  <h4>{{ elite.号 }} - {{ elite.凡间 }}</h4>
                  <p v-if="elite.天府" class="elite-position">【{{ elite.天府 }}】</p>
                </div>
                <div class="elite-details">
                  <span v-if="elite.神界">神界: {{ elite.神界 }}</span>
                  <span v-if="elite.称">称: {{ elite.称 }}</span>
                  <span v-if="elite.原型">原型: {{ elite.原型 }}</span>
                  <span v-if="elite.主脉">主脉: {{ elite.主脉 }}</span>
                  <span v-if="elite.势力">势力: {{ elite.势力 }}</span>
                  <span v-if="elite.生">生: {{ elite.生 }}</span>
                  <span v-if="elite.故乡">故乡: {{ elite.故乡 }}</span>
                  <span v-if="elite.道">道: {{ elite.道 }}</span>
                </div>
                <div class="elite-actions">
                  <button class="btn-edit" @click="startEditElite(index)">✏ 编辑</button>
                  <button class="btn-delete" @click="deleteEliteRecord(index)">🗑 删除</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.admin-container {
  padding: 20px 0;
}

.admin-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
  border-bottom: 2px solid rgba(212, 175, 55, 0.2);
  padding-bottom: 0;
}

.tab-btn {
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-dim);
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  color: var(--gold-light);
  border-bottom-color: var(--gold);
}

.tab-btn:hover {
  color: var(--gold);
}

.tab-content {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-dim);
}

/* 申请卡片 */
.applications-list {
  display: grid;
  gap: 16px;
}

.application-card {
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.application-card:hover {
  background: rgba(212, 175, 55, 0.08);
  border-color: var(--gold);
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
}

.app-header h3 {
  margin: 0;
  color: var(--gold-light);
  font-size: 16px;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.status-pending {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
}

.status-approved {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.status-rejected {
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.app-info {
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.app-info p {
  margin: 0;
  font-size: 13px;
  color: var(--text-main);
}

.app-info strong {
  color: var(--gold-dim);
}

.app-actions {
  display: flex;
  gap: 10px;
}

.btn-approve,
.btn-reject,
.btn-delete,
.btn-edit,
.btn-add,
.btn-save,
.btn-cancel {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-approve {
  background: rgba(76, 175, 80, 0.3);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.5);
}

.btn-approve:hover {
  background: rgba(76, 175, 80, 0.5);
}

.btn-reject {
  background: rgba(244, 67, 54, 0.3);
  color: #f44336;
  border: 1px solid rgba(244, 67, 54, 0.5);
}

.btn-reject:hover {
  background: rgba(244, 67, 54, 0.5);
}

.btn-delete {
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
  border: 1px solid rgba(244, 67, 54, 0.3);
}

.btn-delete:hover {
  background: rgba(244, 67, 54, 0.3);
}

.btn-edit {
  background: rgba(212, 175, 55, 0.2);
  color: var(--gold);
  border: 1px solid rgba(212, 175, 55, 0.4);
}

.btn-edit:hover {
  background: rgba(212, 175, 55, 0.3);
}

.btn-add,
.btn-save {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dim) 100%);
  color: rgba(0, 0, 0, 0.9);
}

.btn-add:hover,
.btn-save:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
}

.btn-cancel {
  background: rgba(200, 200, 200, 0.2);
  color: var(--text-light);
  border: 1px solid rgba(200, 200, 200, 0.3);
}

.btn-cancel:hover {
  background: rgba(200, 200, 200, 0.3);
}

/* 表单 */
.add-form,
.edit-mode {
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.add-form h4,
.edit-mode h4 {
  margin: 0 0 16px 0;
  color: var(--gold-light);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  font-size: 12px;
  color: var(--gold-dim);
  margin-bottom: 6px;
  font-weight: 500;
}

.form-field input {
  padding: 8px 12px;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 6px;
  color: var(--text-light);
  font-size: 13px;
  transition: all 0.3s ease;
}

.form-field input:focus {
  outline: none;
  background: rgba(212, 175, 55, 0.08);
  border-color: var(--gold);
}

.edit-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

/* 群英卡片 */
.elites-toolbar {
  margin-bottom: 20px;
}

.elites-table {
  display: grid;
  gap: 12px;
}

.elite-card {
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 16px;
  transition: all 0.3s ease;
}

.elite-card:hover {
  background: rgba(212, 175, 55, 0.08);
  border-color: var(--gold);
}

.view-mode {
  padding: 8px 0;
}

.elite-basic-info {
  margin-bottom: 12px;
}

.elite-basic-info h4 {
  margin: 0;
  color: var(--gold-light);
  font-size: 15px;
}

.elite-position {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: var(--gold-dim);
}

.elite-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
  font-size: 12px;
  color: var(--text-main);
}

.elite-details span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.elite-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.elite-actions button {
  padding: 6px 12px;
  font-size: 12px;
}

/* 登录界面样式 */
.login-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 40px;
}

.login-container h2 {
  text-align: center;
  color: var(--gold-light);
  margin-bottom: 8px;
  font-size: 24px;
}

.login-hint {
  text-align: center;
  color: var(--text-dim);
  font-size: 13px;
  margin-bottom: 28px;
}

.login-method-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.method-tab {
  flex: 1;
  padding: 10px 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-dim);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.method-tab.active {
  color: var(--gold-light);
  border-bottom-color: var(--gold);
}

.method-tab:hover {
  color: var(--gold);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
}

.login-form .form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.login-form label {
  font-size: 12px;
  color: var(--gold-dim);
  font-weight: 500;
}

.login-input {
  padding: 10px 14px;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 6px;
  color: var(--text-light);
  font-size: 14px;
  transition: all 0.3s ease;
}

.login-input:focus {
  outline: none;
  background: rgba(212, 175, 55, 0.08);
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.login-tip {
  font-size: 12px;
  color: var(--text-dim);
  margin: 0;
}

.login-tip code {
  background: rgba(212, 175, 55, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--gold-light);
  font-family: 'Courier New', monospace;
}

.login-tip a {
  color: var(--gold);
  text-decoration: none;
}

.login-tip a:hover {
  text-decoration: underline;
}

.error-message {
  background: rgba(244, 67, 54, 0.15);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 6px;
  padding: 12px;
  color: #f44336;
  font-size: 13px;
  margin-bottom: 16px;
}

.login-btn {
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dim) 100%);
  border: none;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
}

.login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 管理员头部 */
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-bottom: 28px;
  border-bottom: 2px solid rgba(212, 175, 55, 0.2);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--gold);
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.username {
  margin: 0;
  color: var(--gold-light);
  font-size: 14px;
  font-weight: 600;
}

.user-name {
  margin: 0;
  color: var(--text-main);
  font-size: 12px;
}

.login-time {
  margin: 0;
  color: var(--text-dim);
  font-size: 11px;
}

.logout-btn {
  padding: 8px 16px;
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 6px;
  color: #f44336;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: rgba(244, 67, 54, 0.3);
}

@media (max-width: 768px) {
  .login-container {
    margin: 40px auto;
    padding: 24px;
  }

  .app-info {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .app-actions,
  .elite-actions {
    flex-direction: column;
  }

  .app-actions button,
  .elite-actions button {
    width: 100%;
  }

  .edit-actions {
    flex-direction: column;
  }

  .edit-actions button {
    width: 100%;
  }

  .admin-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .logout-btn {
    width: 100%;
  }
}
</style>
