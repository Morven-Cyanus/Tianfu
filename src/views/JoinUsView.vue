<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApplications } from '@/composables/useApplications'

const router = useRouter()
const { addApplication } = useApplications()

const formData = ref({
  name: '',
  daohao: '',
  title: '',
  force: '',
  prototype: '',
  hometown: '',
  taoZe: '',
  aliasName: '',
  birthPlace: '',
  sect: '',
  elitePosition: '',
})

const submitForm = () => {
  const { name, daohao, title, force, prototype, hometown, taoZe } = formData.value
  
  if (!name || !daohao || !title || !force || !prototype || !hometown || !taoZe) {
    alert('请填写所有必填信息')
    return
  }
  
  // 添加申请到系统
  addApplication(formData.value)
  
  console.log('加入我们 - 提交信息:', formData.value)
  alert('感谢你的加入！我们已收到你的信息，管理员将在后台审核。')
  
  // 重置表单
  resetForm()
  
  // 返回主页
  router.push('/')
}

const resetForm = () => {
  formData.value = {
    name: '',
    daohao: '',
    title: '',
    force: '',
    prototype: '',
    hometown: '',
    taoZe: '',
    aliasName: '',
    birthPlace: '',
    sect: '',
    elitePosition: '',
  }
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="join-us-view">
    <div class="join-us-container">
      <div class="join-us-header">
        <h1>加入玄荒道府</h1>
        <p>欢迎志同道合的修士加入我们的行列</p>
      </div>

      <form @submit.prevent="submitForm" class="join-form">
        <div class="form-row">
          <div class="form-group">
            <label for="name">名字 *</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="请输入你的名字"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="prototype">原型（真名） *</label>
            <input
              id="prototype"
              v-model="formData.prototype"
              type="text"
              placeholder="请输入你的原型或真名"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="daohao">道号 *</label>
            <input
              id="daohao"
              v-model="formData.daohao"
              type="text"
              placeholder="请输入你的道号"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="hometown">故乡 *</label>
            <input
              id="hometown"
              v-model="formData.hometown"
              type="text"
              placeholder="请输入你的故乡"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="title">称号 *</label>
            <input
              id="title"
              v-model="formData.title"
              type="text"
              placeholder="请输入你的称号"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="force">势力 *</label>
            <input
              id="force"
              v-model="formData.force"
              type="text"
              placeholder="请输入你的势力"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group full-width">
          <label for="taoZe">你的道则 *</label>
          <textarea
            id="taoZe"
            v-model="formData.taoZe"
            placeholder="请输入你的道则或人生信条"
            class="form-textarea"
            rows="5"
          />
        </div>

        <div class="form-divider">
          <span>以下信息为可选项，可在管理后台补充完整</span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="aliasName">神界</label>
            <input
              id="aliasName"
              v-model="formData.aliasName"
              type="text"
              placeholder="神界名称"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="birthPlace">生地</label>
            <input
              id="birthPlace"
              v-model="formData.birthPlace"
              type="text"
              placeholder="出生地"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="sect">主脉</label>
            <input
              id="sect"
              v-model="formData.sect"
              type="text"
              placeholder="所属主脉"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="elitePosition">天府职位</label>
            <input
              id="elitePosition"
              v-model="formData.elitePosition"
              type="text"
              placeholder="天府中的职位"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-btn">提交申请</button>
          <button type="button" class="cancel-btn" @click="goBack">返回</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.join-us-view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.3) 0%, rgba(25, 15, 50, 0.3) 100%);
  overflow-y: auto;
}

.join-us-container {
  width: 100%;
  max-width: 800px;
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(30, 20, 50, 0.9) 100%);
  border: 2px solid var(--gold-dim);
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 0 60px rgba(212, 175, 55, 0.2), inset 0 0 30px rgba(212, 175, 55, 0.05);
  backdrop-filter: blur(8px);
}

/* ── Header ── */
.join-us-header {
  text-align: center;
  margin-bottom: 40px;
}

.join-us-header h1 {
  color: var(--gold-light);
  font-size: 32px;
  letter-spacing: 3px;
  margin: 0 0 12px;
  font-weight: 600;
}

.join-us-header p {
  color: var(--text-dim);
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0;
}

/* ── Form ── */
.join-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  color: var(--gold-light);
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 500;
}

.form-input,
.form-textarea {
  padding: 14px 18px;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 8px;
  color: var(--text-light);
  font-size: 14px;
  font-family: inherit;
  transition: all var(--trans);
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  background: rgba(212, 175, 55, 0.08);
  border-color: var(--gold);
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.25);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

/* ── Form Divider ── */
.form-divider {
  grid-column: 1 / -1;
  margin: 28px 0;
  padding: 16px;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold);
  border-radius: 4px;
  text-align: center;
  color: var(--gold-dim);
  font-size: 13px;
  letter-spacing: 0.5px;
}

/* ── Form Actions ── */
.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid rgba(212, 175, 55, 0.15);
}

.submit-btn,
.cancel-btn {
  flex: 1;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all var(--trans);
  font-weight: 600;
}

.submit-btn {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dim) 100%);
  color: rgba(0, 0, 0, 0.9);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(212, 175, 55, 0.5);
}

.cancel-btn {
  background: rgba(212, 175, 55, 0.1);
  color: var(--text-light);
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.cancel-btn:hover {
  background: rgba(212, 175, 55, 0.15);
  border-color: var(--gold);
  color: var(--gold-light);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .join-us-container {
    padding: 32px 24px;
  }

  .join-us-header h1 {
    font-size: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .form-actions {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
