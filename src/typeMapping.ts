import init from './init'
import generateAll from './generateAll'
import generateFormPath from './generateFormPath'
import generateFormModule from './generateFormModule'

export const prompList = [
  {
    type: 'list',
    message: '请选择',
    name: 'type',
    choices: [
      { name: '初始化文件', value: 'init' },
      { name: '生成全部', value: 'generateAll' },
      { name: '生成单条接口', value: 'generateFormPath' },
      { name: '模块化生成', value: 'generateFormModule' },
    ],
  },
]

export const typeMapping = {
  init,
  generateAll,
  generateFormPath,
  generateFormModule,
}
