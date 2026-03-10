import { ref, computed } from 'vue'

// 保存申请数据的 key
const APPLICATIONS_KEY = 'tianfu_applications'
const ELITES_KEY = 'tianfu_elites'

// 申请列表
const applications = ref([])

// 天府群英列表
const elitesData = ref([
  { 天府: '天府七圣', 号: '幻酒神尊', 凡间: '萧骛杰', 神界: '骛杰', 称: '幻尊', 原型: '崔伟杰', 主脉: '幻域 幻海', 势力: '天府 幻域', 生: '天元', 故乡: '余阳城', 道: '幻' },
  { 天府: '', 号: '玉阳仙人', 凡间: '王煜阳', 神界: '玉阳', 称: '山人', 原型: '王炳丁', 主脉: '玉阳仙国', 势力: '天府', 生: '天元', 故乡: '余阳城', 道: '战' },
  { 天府: '', 号: '星宗神主', 凡间: '石辰阳', 神界: '阳辰', 称: '宗师', 原型: '祁振昕', 主脉: '星府 召天', 势力: '天府 星府', 生: '天元', 故乡: '余阳城', 道: '召' },
  { 天府: '', 号: '太平居士', 凡间: '李玄弈', 神界: '玄奕', 称: '同吾仙人', 原型: '李奕同', 主脉: '太平界', 势力: '天府 太平界', 生: '天元', 故乡: '余阳城', 道: '符 法' },
  { 天府: '', 号: '神军总帅', 凡间: '明瑞漓', 神界: '木灵锐', 称: '圣将', 原型: '李睿杰', 主脉: '天府神军', 势力: '天府 天枢', 生: '天元', 故乡: '余阳城', 道: '战 兵' },
  { 天府: '', 号: '神机子', 凡间: '张风栋', 神界: '龙镜渊', 称: '枢机', 原型: '张栋凯', 主脉: '神机城', 势力: '天府 神机城', 生: '天元', 故乡: '余阳城', 道: '阵 兵' },
  { 天府: '', 号: '醍醐仙人', 凡间: '毕子诚', 神界: '', 称: '星师首座', 原型: '毕子成', 主脉: '星府 卜星', 势力: '天府 天枢', 生: '天元', 故乡: '望古城', 道: '衍 祭' },
  { 天府: '梦阁主', 号: '苍穹梦皇', 凡间: '', 神界: '帝释天', 称: '须弥天帝', 原型: '袁敕天', 主脉: '须弥道场', 势力: '天府 梦境', 生: '天元', 故乡: '帝王城', 道: '梦 王' },
  { 天府: '圣阁主', 号: '明诏圣君', 凡间: '', 神界: '谨倾歌', 称: '圣君', 原型: '王普锦', 主脉: '圣道神殿', 势力: '天府 圣域', 生: '天元', 故乡: '江城', 道: '圣 王' },
  { 天府: '魂界主', 号: '冥古之魂', 凡间: '赵徵羽', 神界: '独孤春秋', 称: '英灵狂战', 原型: '赵若水', 主脉: '冥古暗渊', 势力: '天府 阴间', 生: '冥古域', 故乡: '黯天渊', 道: '魂 战' },
  { 天府: '天机阁主', 号: '玄衍道尊', 凡间: '秦祖', 神界: '', 称: '天机圣', 原型: '秦祖润', 主脉: '天衍', 势力: '天府 天枢', 生: '玄天域', 故乡: '神城', 道: '玄 衍' },
  { 天府: '造化阁主', 号: '无感恩帝', 凡间: '云恩', 神界: '恩帝', 称: '麟尊', 原型: '李其恩', 主脉: '造化', 势力: '天府 天枢', 生: '玄天域', 故乡: '极山', 道: '造化' },
  { 天府: '神阁主', 号: '玄一道主', 凡间: '笼中雀', 神界: '君倩', 称: '衍道人', 原型: '李宇坤', 主脉: '羽化星阁', 势力: '天府 诸天', 生: '神罗界', 故乡: '神圣国', 道: '灭' },
  { 天府: '万物阁主', 号: '广都殿主', 凡间: '陈熙', 神界: '陈太平', 称: '西岳真人', 原型: '常笑谦', 主脉: '天府 散人', 势力: '天府 四海', 生: '荒宇', 故乡: '浩然天下', 道: '炼物' },
  { 天府: '阴间帝王', 号: '迁殇鬼客', 凡间: '八仲', 神界: '黯流云', 称: '魂', 原型: '申军宇', 主脉: '天府 阴间', 势力: '天府 阴间', 生: '冥古城', 故乡: '鬼都', 道: '鬼 煞' },
  { 天府: '雷阁主', 号: '落叶真仙', 凡间: '王惊雷', 神界: '', 称: '雷域之主', 原型: '王洛湲', 主脉: '天府 天枢', 势力: '天府 天枢', 生: '天陆', 故乡: '幽都', 道: '雷霆' },
  { 天府: '天枢道主', 号: '大我念神', 凡间: '大户宇', 神界: '', 称: '神念仙尊', 原型: '郭皓宇', 主脉: '天府 天枢', 势力: '天府 天枢', 生: '天陆', 故乡: '幽都', 道: '神念' },
  { 天府: '冥府之主', 号: '阎王帝君', 凡间: '秦田', 神界: '易晓天', 称: '先尊', 原型: '田政浩', 主脉: '天府 冥府', 势力: '天府 阴间', 生: '天陆', 故乡: '幽都', 道: '阴冥' },
  { 天府: '药阁主', 号: '药尊者', 凡间: '药神', 神界: '昊尘', 称: '药老', 原型: '黄昊昊', 主脉: '药阁 药谷', 势力: '天府 星府', 生: '天陆', 故乡: '幽都', 道: '药 毒' },
  { 天府: '炼器阁主', 号: '无极生', 凡间: '李随便', 神界: '李百炼', 称: '六库仙圣', 原型: '李睿泽', 主脉: '神机城', 势力: '天府 神机城', 生: '天陆', 故乡: '幽都', 道: '战 炼' },
  { 天府: '术法阁主', 号: '万法主宰', 凡间: '嬴翊', 神界: '', 称: '执政官', 原型: '秦翊博', 主脉: '圣邦 罗兰', 势力: '天府 圣城', 生: '圣邦', 故乡: '圣澜星域', 道: '法' },
  { 天府: '道阁主', 号: '唯法真主', 凡间: '木禾石', 神界: '', 称: '裁决长', 原型: '李科研', 主脉: '圣邦 罗兰', 势力: '天府 圣城', 生: '圣邦', 故乡: '圣澜星域', 道: '法' },
  { 天府: '天道阁主', 号: '天暗星尊', 凡间: '闻人翊彪', 神界: '', 称: '不良帅', 原型: '陈毅彪', 主脉: '天师道场', 势力: '天府 天师府', 生: '荒宇', 故乡: '九幽玄天', 道: '霸' },
  { 天府: '火阁主', 号: '焚天神尊', 凡间: '宋凌天', 神界: '', 称: '磐石金刚', 原型: '宋立星', 主脉: '荒神天', 势力: '天府 裁决堂', 生: '星图', 故乡: '赤毓界', 道: '身' },
  { 天府: '因果道主', 号: '只因仙人', 凡间: '刘海柱', 神界: '', 称: '乾坤英侠', 原型: '王维烨', 主脉: '千界门', 势力: '天府 天枢', 生: '天陆', 故乡: '幽都', 道: '坤' },
  { 天府: '荒道主', 号: '东发上人', 凡间: '蒙枫', 神界: '', 称: '东方上仙', 原型: '孟怡枫', 主脉: '八极 流火', 势力: '天府 神境', 生: '荒宇', 故乡: '雾境之森', 道: '体' },
])

// 初始化：从 localStorage 加载数据
export const useApplications = () => {
  const loadApplications = () => {
    try {
      const saved = localStorage.getItem(APPLICATIONS_KEY)
      if (saved) {
        applications.value = JSON.parse(saved)
      }
    } catch (e) {
      console.error('加载申请失败:', e)
    }
  }

  const loadElites = () => {
    try {
      const saved = localStorage.getItem(ELITES_KEY)
      if (saved) {
        elitesData.value = JSON.parse(saved)
      }
    } catch (e) {
      console.error('加载群英失败:', e)
    }
  }

  // 保存申请
  const saveApplications = () => {
    try {
      localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications.value))
    } catch (e) {
      console.error('保存申请失败:', e)
    }
  }

  // 保存群英数据
  const saveElites = () => {
    try {
      localStorage.setItem(ELITES_KEY, JSON.stringify(elitesData.value))
    } catch (e) {
      console.error('保存群英失败:', e)
    }
  }

  // 添加申请
  const addApplication = (appData) => {
    const newApp = {
      id: Date.now(),
      ...appData,
      status: 'pending', // pending, approved, rejected
      createdAt: new Date().toLocaleString(),
    }
    applications.value.push(newApp)
    saveApplications()
    return newApp
  }

  // 删除申请
  const deleteApplication = (id) => {
    const index = applications.value.findIndex(app => app.id === id)
    if (index > -1) {
      applications.value.splice(index, 1)
      saveApplications()
    }
  }

  // 更新申请
  const updateApplication = (id, updates) => {
    const app = applications.value.find(a => a.id === id)
    if (app) {
      Object.assign(app, updates)
      saveApplications()
    }
    return app
  }

  // 批准申请并添加到群英
  const approveApplication = (id) => {
    const app = applications.value.find(a => a.id === id)
    if (!app) return false

    // 从申请数据创建群英记录
    const eliteRecord = {
      天府: app.elitePosition || '',
      号: app.daohao,
      凡间: app.name,
      神界: app.aliasName || '',
      称: app.title,
      原型: app.prototype,
      主脉: app.sect || '',
      势力: app.force,
      生: app.birthPlace || '',
      故乡: app.hometown,
      道: app.taoZe || '',
    }

    elitesData.value.push(eliteRecord)
    saveElites()

    // 更新申请状态
    updateApplication(id, { status: 'approved' })
    return true
  }

  // 拒绝申请
  const rejectApplication = (id) => {
    updateApplication(id, { status: 'rejected' })
  }

  // 添加手动输入的群英记录
  const addElite = (eliteData) => {
    elitesData.value.push(eliteData)
    saveElites()
  }

  // 删除群英记录
  const deleteElite = (index) => {
    elitesData.value.splice(index, 1)
    saveElites()
  }

  // 更新群英记录
  const updateElite = (index, data) => {
    Object.assign(elitesData.value[index], data)
    saveElites()
  }

  // 获取待审批申请数量
  const pendingCount = computed(() => {
    return applications.value.filter(app => app.status === 'pending').length
  })

  // 初始化时加载数据
  loadApplications()
  loadElites()

  return {
    applications,
    elitesData,
    addApplication,
    deleteApplication,
    updateApplication,
    approveApplication,
    rejectApplication,
    addElite,
    deleteElite,
    updateElite,
    pendingCount,
    loadApplications,
    loadElites,
  }
}
