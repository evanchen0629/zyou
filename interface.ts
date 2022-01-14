/**
 * 应用场景表
 */
export interface ApplySceneDO对象 {
    /**
     * 主键id
     */
    id?: number;
}
/**
 * id
 */
export interface BaseIdDTO对象 {
    /**
     * 主键id
     */
    id?: number;
}
export interface GroupChatActiveConfigReq {
    /**
     * 配置值
     */
    value?: number;
}
export interface PrimaryKeyQuery {
    id?: number;
}
export interface Type {
    typeName?: string;
}
export interface CallBackReq {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 坐席企微id
     */
    followUid?: string;
}
/**
 * 渠道码用户标签
 */
export interface ChannelCustomerTagRequestVO {
    /**
     * 标签id
     */
    id?: number;
    /**
     * 标签name
     */
    name?: string;
}
export interface CircleSettingDTO {
    /**
     * 封面url
     */
    imgUrl?: string;
    /**
     * 个性签名
     */
    signature?: string;
}
export interface CircleTypeDTO {
    id?: number;
    /**
     * 类型名称
     */
    typeName?: string;
}
export interface CustGroupDataSourceDTO {
    /**
     * 客群来源名称
     */
    custViewName?: string;
    /**
     * 客群来源id
     */
    id?: number;
}
export interface FollowUserDTO {
    id?: number;
    /**
     * 坐席姓名
     */
    realName?: string;
}
export interface GroupOwnerVO {
    /**
     * 群主企微id
     */
    ownerAccount?: string;
    /**
     * 群主name
     */
    ownerName?: string;
}
/**
 * 群活码
 */
export interface GroupQrCodeDTO {
    /**
     * 主键
     */
    id?: number;
    /**
     * 状态:2-停用,-1-删除
     */
    status?: number;
}
export interface Kvdto {
    key?:   string;
    value?: string;
}
export interface KeyValueDTO {
    key?:   string;
    value?: string;
}
export interface MiniProgramsEnableDTO {
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否启用 1：启用  0:禁用
     */
    isEnabled?: boolean;
}
export interface 加V客服信息实体类 {
    realName?:   string;
    seatUserId?: number;
}
export interface 图表数据承载类 {
    /**
     * 数量值(Y轴)
     */
    num?: number;
    /**
     * 统计时间点(X轴)
     */
    timePoint?: string;
}
export interface 渠道全局统计数据查询实体类 {
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 站点ID
     */
    siteId?: number;
}
/**
 * 渠道码使用对象
 */
export interface ChannelCodeConfigObjectDO对象 {
    /**
     * 添加上限，如果是部门：部门中每个人的上限
     */
    maxAddTimes?: number;
    /**
     * 使用对象id
     */
    useObjectId?: number;
    /**
     * 用户名称
     */
    userObjectName?: string;
}
export interface CorpDistributeInfoDTO {
    /**
     * 坐席名称
     */
    name?: string;
    /**
     * 分配比例
     */
    weight?: number;
    /**
     * 账号
     */
    weworkAccount?: string;
}
export interface CustGroupDTO {
    /**
     * 客群名称
     */
    custGroupName?:        string;
    custGroupPersonCount?: string;
    /**
     * 客群id
     */
    id?: number;
}
export interface CustomerAddDTO {
    channelCode?: string;
    siteId?:      number;
    wxUserId?:    string;
}
/**
 * 扫任务码返回对象
 */
export interface ScanTaskDTO {
    /**
     * 群活码图片
     */
    codeImg?: string;
    /**
     * 入群副标题
     */
    guideSubtitle?: string;
    /**
     * 入群引导标题
     */
    guideTitle?: string;
}
/**
 * 欢迎语查询实体对象
 */
export interface WxWelcomeMsgQuery {
    /**
     * 渠道名称标识
     */
    channelCode?: string;
    /**
     * 客服username
     */
    followUserId?: string;
    /**
     * 站点标识
     */
    siteId?: number;
}
export interface ResultEntityString {
    result?:            string;
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
}
export interface TriggerConditionDTO {
    /**
     * 触发方式为3时填写偏移量
     */
    offset?: number;
    /**
     * 触发方式为3时填写单位 DAY WEEK MONTH
     */
    timeUnit?: string;
    /**
     * 触发方式为2时填写日期
     */
    triggerDate?: Date;
    /**
     * 触发方式 1立即开始 2指定日期触发 3指定条件 4永久有效
     */
    triggerType?: string;
}
export interface WelcomeMsgQuery {
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 欢迎语内容
     */
    welcomeMsgContent?: string;
    /**
     * 欢迎语名称
     */
    welcomeMsgName?: string;
}
export interface WelcomeMsgUserDTO {
    /**
     * 真实姓名
     */
    realName?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 用户id
     */
    userId?: number;
    /**
     * 用户名
     */
    username?: string;
}
export interface 渠道全局统计数据实体类 {
    /**
     * 当日添加人数
     */
    todayAdd?: number;
    /**
     * 当日流失人数
     */
    todayLost?: number;
    /**
     * 总添加人数
     */
    totalAdd?: number;
    /**
     * 总流失人数
     */
    totalLost?: number;
}
export interface WxMaterialDTO {
    msgType?:     string;
    requestJson?: { [key: string]: { [key: string]: any } };
}
/**
 * 应用场景
 */
export interface ApplySceneDTO对象 {
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否默认场景 0:默认场景  1:普通场景
     */
    isDefault?: number;
    /**
     * 是否删除 Y-是 N-否
     */
    isDeleted?: string;
    /**
     * 是否关联素材 0:未关联  1:关联
     */
    isUnionMaterial?: number;
    /**
     * 场景名称
     */
    sceneName?: string;
}
export interface CircleTypeDataDTO {
    /**
     * 朋友圈数
     */
    circleNum?: number;
    /**
     * 评论数
     */
    commentNum?: number;
    id?:         number;
    /**
     * 点赞数
     */
    likeNum?: number;
    /**
     * 类型名称
     */
    typeName?: string;
}
export interface CircleTypeQuery {
    /**
     * 开始时间
     */
    beginTime?: Date;
    /**
     * 结束时间
     */
    endTime?: Date;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 类型名称
     */
    typeName?: string;
}
export interface CustGroupDetailDTO {
    custGroupId?:          number;
    custGroupName?:        string;
    custGroupPersonCount?: string;
    filePath?:             string;
    status?:               string;
}
export interface CustSendCallBackDTO {
    exUid?:      string;
    failReason?: string;
    followUid?:  string;
    recordId?:   number;
    status?:     string;
}
export interface MediaVO {
    /**
     * 素材内容
     */
    content?: string;
    /**
     * 文件名
     */
    fileName?: string;
    /**
     * 企微素材id
     */
    mediaId?: string;
    /**
     * 素材类型 image, voice, video, file, text, miniApp
     */
    type?: string;
    /**
     * 上传时间
     */
    uploadGmt?: Date;
}
export interface MiniProgramsDTO {
    /**
     * appid
     */
    appId?: string;
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否启用 0：启用  1:禁用
     */
    isEnabled?: boolean;
    /**
     * 小程序名称
     */
    miniProgramName?: string;
    /**
     * 原始id
     */
    originId?: string;
}
export interface ReplySaveDTO {
    /**
     * 类目id
     */
    categoryId?: number;
    /**
     * 查询的文本内容
     */
    content?: string;
    /**
     * 查询的文本内容 contents
     */
    contents?: string;
    id?:       number;
    /**
     * 企业微信坐席的id，必填
     */
    userId?: string;
}
export interface 客服维度员工活码统计数据实体类 {
    /**
     * 员工姓名
     */
    seatName?: string;
    /**
     * 坐席用户ID
     */
    seatUserId?: number;
    /**
     * 新增客户数
     */
    totalAdd?: number;
    /**
     * 流失客户数
     */
    totalLost?: number;
    /**
     * 留存客户数
     */
    totalRemain?: number;
}
export interface 客服维度员工活码统计数据查询实体类 {
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 客服坐席ID
     */
    seatUserId?: number;
    /**
     * 站点ID
     */
    siteId?: number;
}
export interface 日期维度员工活码统计数据实体类 {
    /**
     * 留存客户数
     */
    deadlineRemain?: number;
    /**
     * 添加日期
     */
    joinDate?: string;
    /**
     * 新增客户数
     */
    todayAdd?: number;
    /**
     * 流失客户数
     */
    todayLeave?: number;
    /**
     * 客户总数
     */
    totalAdd?: number;
}
export interface AddUserTagDTO {
    /**
     * 业务线Id
     */
    businessLineId?: number;
    /**
     * 坐席Id
     */
    followUserId?: string;
    /**
     * siteId
     */
    siteId?: number;
    /**
     * 微信侧用户id
     */
    userId?: string;
    /**
     * 用户标签id
     */
    userTagIdList?: number[];
}
export interface MaterialTemplate {
    /**
     * 单个文件id，编辑模版素材文件时传
     */
    fileId?: number;
    /**
     * 上传文件名称
     */
    fileName?: string;
    /**
     * 小程序/缩略图路径
     */
    path?: string;
    /**
     * 模版素材类型  1:图片 2:视频 3:文档
     */
    templateMaterialType?: number;
    /**
     * 关联素材库模版id，选素材库的时候传
     */
    unionMaterialId?: number;
    /**
     * 模版素材图片/视频/文档url
     */
    url?: string;
}
export interface ResultEntityVoid {
    fail?:              boolean;
    ok?:                boolean;
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface 加V客户明细详情实体类 {
    /**
     * 添加渠道名称
     */
    channelName?: string;
    /**
     * 客户记录ID
     */
    id?: number;
    /**
     * 添加时间(格式yyyy-MM-dd HH:mm:ss)
     */
    joinTime?: string;
    /**
     * 客户姓名
     */
    name?: string;
    /**
     * 所属客服
     */
    seatName?: string;
    /**
     * 用户状态 1.已添加 2.已删除
     */
    userStatus?: string;
}
export interface 图表数据查询入参实体 {
    /**
     * 开始时间(格式：yyyyMMdd) 仅当timeType=4时必填 且和endTime直接的跨度不能大于30天
     */
    beginTime?: string;
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 数据类型 1.客户总数 2.新增客户数 3.流失客户数 4.留存客户数
     */
    dataType?: number;
    /**
     * 结束时间(格式：yyyyMMdd) 仅当timeType=4时必填 且和beginTime直接的跨度不能大于30天
     */
    endTime?: string;
    /**
     * 站点ID
     */
    siteId?: number;
    /**
     * 时间类型 1.当日 2.近一周 3.近一月 4.近一年(30天)
     */
    timeType?: number;
}
/**
 * 保存用户标签请求
 */
export interface UserTagSaveDTO {
    /**
     * 标识是否追加 true 代表追加 false 代表覆盖
     */
    appendTag?: boolean;
    /**
     * 业务线Id
     */
    businessLineId?: number;
    /**
     * 坐席Id
     */
    followUserId?: string;
    /**
     * siteId
     */
    siteId?: number;
    /**
     * 用户id
     */
    userId?: string;
    /**
     * 用户标签id
     */
    userTagIdList?: number[];
}
export interface DataDTO {
    exuid?:      string;
    familyRole?: string;
    fuid?:       string;
    nickName?:   string;
    product?:    string;
    sex?:        string;
    username?:   string;
}
export interface ResultEntityBoolean {
    fail?:              boolean;
    ok?:                boolean;
    result?:            boolean;
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityInt {
    fail?:              boolean;
    ok?:                boolean;
    result?:            number;
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityLong {
    fail?:              boolean;
    ok?:                boolean;
    result?:            number;
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface 加V明细数据查询实体类 {
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 数据类型 1.客户总数 2.新增客户数 3.流失客户数 4.留存客户数
     */
    dataType?: number;
    /**
     * 添加日期 格式yyyy-MM-dd(seatUserId/joinDate不能同时为空)
     */
    joinDate?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 客服坐席ID(seatUserId/joinDate不能同时为空)
     */
    seatUserId?: string;
    /**
     * 站点ID
     */
    siteId?: number;
}
export interface 日期维度员工活码统计数据查询实体类 {
    /**
     * 开始时间(格式：yyyyMMdd)
     */
    beginTime?: string;
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 结束时间(格式：yyyyMMdd)
     */
    endTime?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 站点ID
     */
    siteId?: number;
    /**
     * 时间类型 1.当日 2.近一周 3.近一月 4.近一年(30天)
     */
    timeType?: number;
}
export interface ResultEntity {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: any };
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityListString {
    fail?:              boolean;
    ok?:                boolean;
    result?:            string[];
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityObject {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: any };
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityMapStringInt {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: number };
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityMapStringLong {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: number };
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ResultEntityJSONArray {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: any }[];
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
export interface ChannelQrConfigStyleVO {
    configIdList?: number[];
    /**
     * 背景图
     */
    styleBackground?: string;
    /**
     * 引导语
     */
    styleContent?: string;
    /**
     * 二维码位置
     */
    styleQrPositionX?: string;
    /**
     * 二维码位置
     */
    styleQrPositionY?: string;
    /**
     * 二维码大小-高
     */
    styleQrSizeH?: string;
    /**
     * 二维码大小-宽
     */
    styleQrSizeW?: string;
    /**
     * 活码样式
     */
    styleType?: number;
}
export interface ReplyContentDTO {
    /**
     * 文本内容 or oss url
     */
    content?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 文件名
     */
    fileName?: string;
    /**
     * 链接
     */
    linkUrl?: string;
    /**
     * 企微素材id
     */
    mediaId?: string;
    /**
     * sort
     */
    sort?: number;
    /**
     * 标题
     */
    title?: string;
    /**
     * 素材类型 image, voice, video, file, text, miniApp, h5
     */
    type?: string;
    /**
     * 上传时间
     */
    uploadGmt?: Date;
}
/**
 * 群详情统计数据
 */
export interface StatGroupVO {
    /**
     * 活跃人数
     */
    activeMemberCnt?: number;
    /**
     * 活跃率
     */
    activeMemberRate?: number;
    /**
     * 客户人数
     */
    customerTotal?: number;
    /**
     * 当日发言人数
     */
    memberHasMsg?: number;
    /**
     * 发言率
     */
    memberHasMsgRate?: number;
    /**
     * 群人数
     */
    memberTotal?: number;
    /**
     * 当日入群
     */
    newMemberCnt?: number;
    /**
     * 当日退群
     */
    quitMemberCnt?: number;
    /**
     * 统计日期
     */
    statDate?: Date;
}
/**
 * 模版
 */
export interface WeworkReplyTemplateDO对象 {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 更新时间
     */
    gmtModified?: Date;
    /**
     * 技能组id
     */
    groupList?: string[];
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否删除 Y-是 N-否
     */
    isDeleted?: string;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 模版名称
     */
    name?: string;
    /**
     * 站点id
     */
    siteId?: number;
}
/**
 * 聊天记录
 */
export interface GroupChatRecordVO {
    /**
     * 用户头像
     */
    avatar?: string;
    /**
     * 群Id
     */
    chatId?: string;
    /**
     * 文件路径
     */
    fileUrl?: string;
    /**
     * 消息内容
     */
    msgContent?: string;
    /**
     * 消息id
     */
    msgId?: string;
    /**
     * 发送时间
     */
    msgTime?: string;
    /**
     * 消息类型
     */
    msgType?: string;
    /**
     * siteId
     */
    siteId?: number;
    /**
     * 发送人id
     */
    userId?: string;
    /**
     * 用户名字
     */
    userName?: string;
}
/**
 * 群成员
 */
export interface GroupMemberVO {
    /**
     * 成员头像
     */
    avatar?: string;
    /**
     * 活跃天数
     */
    currentActiveCntSum?: number;
    /**
     * 发言次数
     */
    currentMsgCnt?: number;
    /**
     * 邀请人数
     */
    inviteCnt?: number;
    /**
     * 入群方式-0-#XXX#邀请入群、1-自动拉群入群、2-无限拉群入群、3-标签拉群入群
     */
    joinScene?: string;
    /**
     * 入群时间
     */
    joinTime?: Date;
    /**
     * 群成员名字
     */
    name?: string;
    /**
     * 类型-0-本企业微信、1-外部企业微信、2-个人微信
     */
    type?: string;
    /**
     * unionid
     */
    unionId?: string;
    /**
     * 群成员id
     */
    userId?: string;
}
export interface MaterialQwDTO对象 {
    /**
     * 文本内容
     */
    content?: string;
    /**
     * 上传文件名称
     */
    fileName?: string;
    /**
     * 素材类型 0：文本  1:图片 2:视频 3:文档 4:网页 5:小程序 6:模版素材
     */
    materialType?: number;
    /**
     * 企微素材ID
     */
    mediaId?: string;
    /**
     * 小程序id
     */
    miniProgramId?: number;
    /**
     * 网页介绍
     */
    pageIntroduce?: string;
    /**
     * 网页链接
     */
    pageLink?: string;
    /**
     * 小程序/缩略图路径
     */
    path?: string;
    /**
     * 网页/页面标题
     */
    title?: string;
    /**
     * 文件上传时间
     */
    uploadGmt?: string;
    /**
     * 图片/附件/网页封面/卡片展示/视频
     */
    url?: string;
}
/**
 * scrm-坐席组
 */
export interface AgentGroupDO对象 {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 坐席userid
     */
    followUserId?: string;
    /**
     * 坐席姓名
     */
    followUserName?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 关联id
     */
    relId?: number;
    /**
     * 关联类型
     */
    relType?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 系统用户id
     */
    sysUserId?: number;
}
export interface ChannelQrConfigQueryVO {
    /**
     * 开始时间
     */
    beginTime?: Date;
    /**
     * 渠道id
     */
    channelId?: string;
    /**
     * 渠道名称
     */
    channelName?: string;
    creator?:     string;
    /**
     * 创建人id
     */
    creatorId?: number;
    deptId?:    number;
    /**
     * 结束时间
     */
    endTime?: Date;
    id?:      number;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 员工id
     */
    userId?: number;
}
export interface ChannelQrInfoDTO {
    businessLine?:   number;
    channelCode?:    string;
    channelId?:      number;
    channelName?:    string;
    createUserName?: string;
    customerTags?:   string;
    description?:    string;
    qrConfigId?:     number;
    remark?:         string;
    remarkPosition?: number;
    welcomeId?:      number;
    welcomeType?:    number;
}
/**
 * scrm-朋友圈互动统计
 */
export interface CircleUserOptDO对象 {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 评论数
     */
    commentNum?: number;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 坐席userid
     */
    followUserId?: string;
    /**
     * 坐席姓名
     */
    followUserName?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 点赞数
     */
    likeNum?: number;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 站点id
     */
    siteId?: number;
}
export interface MaterialVO {
    /**
     * appid
     */
    appId?: string;
    /**
     * 上传模版素材文件id
     */
    fileId?: number;
    /**
     * 上传文件名称
     */
    fileName?: string;
    /**
     * 小程序id
     */
    miniProgramId?: number;
    /**
     * 小程序名称
     */
    miniProgramName?: string;
    /**
     * 网页介绍
     */
    pageIntroduce?: string;
    /**
     * 网页链接
     */
    pageLink?: string;
    /**
     * 小程序/缩略图路径
     */
    path?: string;
    /**
     * 模版素材类型 0：文本  1:图片 2:视频 3:文档 4:网页 5:小程序
     */
    templateMaterialType?: number;
    /**
     * 网页/页面标题
     */
    title?: string;
    /**
     * 关联素材库模版id
     */
    unionMaterialId?: number;
    /**
     * 图片/附件/网页封面/卡片展示/视频
     */
    url?: string;
}
/**
 * 分配方案渠道样式
 */
export interface DistributeChannelDO对象 {
    /**
     * 图片样式 枚举 1 2 3前端固定三个样式
     */
    backgroud?: string;
    /**
     * 渠道标识
     */
    channelCode?: string;
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 渠道名称标识
     */
    channelName?: string;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 扩展字段
     */
    extraInfo?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否删除 Y-是 N-否
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 方案id
     */
    planId?: number;
    /**
     * 备注
     */
    remark?: string;
}
/**
 * 群活码记录表
 */
export interface GroupQrCodeDO对象 {
    /**
     * 群活码图片
     */
    codeImg?: string;
    /**
     * 备注
     */
    comment?: string;
    /**
     * 创建者
     */
    creator?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 更新时间
     */
    gmtModified?: Date;
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否删除
     */
    isDeleted?: string;
    /**
     * 拉群任务id
     */
    joinGroupTaskId?: number;
    /**
     * 加群人数
     */
    joinNum?: number;
    /**
     * 上限人数
     */
    limitNum?: number;
    /**
     * 修改者
     */
    modifier?: string;
    /**
     * 顺序
     */
    qrCodeOrder?: number;
    /**
     * 0-拉人中1-已满员2-已停用3-待开始
     */
    status?: number;
}
/**
 * scrm-企微群
 */
export interface RoomQwDO对象 {
    /**
     * 群id
     */
    chatId?: string;
    /**
     * 群创建时间
     */
    createTime?: Date;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 群名称
     */
    name?: string;
    /**
     * 群主企微id
     */
    ownerAccount?: string;
    /**
     * 群主名称
     */
    ownerName?: string;
    /**
     * 所属人部门信息到账号
     */
    showOwner?: string;
    /**
     * 站点id
     */
    siteId?: number;
}
/**
 * scrm-朋友圈互动统计详情
 */
export interface CircleUserOptDetailDO对象 {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 评论内容
     */
    commentContent?: string;
    /**
     * 互动时间
     */
    createTime?: number;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户昵称
     */
    custNickName?: string;
    /**
     * 客户微信id
     */
    custWxId?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * scrm_circle_user_opt.id
     */
    optId?: number;
    /**
     * like commet
     */
    optType?: string;
    /**
     * 站点id
     */
    siteId?: number;
}
export interface MaterialResDTO {
    /**
     * appid
     */
    appId?: string;
    /**
     * 文本内容
     */
    content?: string;
    /**
     * delay
     */
    delay?: number;
    /**
     * 上传文件名称
     */
    fileName?: string;
    /**
     * 素材类型 0：文本  1:图片 2:视频 3:文档 4:网页 5:小程序 6:模版素材
     */
    materialType?: number;
    /**
     * mediaId
     */
    mediaId?: string;
    /**
     * 小程序id
     */
    miniProgramId?: number;
    /**
     * 小程序名称
     */
    miniProgramName?: string;
    /**
     * 小程序原始id
     */
    originId?: string;
    /**
     * 网页介绍
     */
    pageIntroduce?: string;
    /**
     * 网页链接
     */
    pageLink?: string;
    /**
     * 小程序/缩略图路径
     */
    path?: string;
    /**
     * 网页/页面标题
     */
    title?: string;
    /**
     * 图片/附件/网页封面/卡片展示/视频
     */
    url?: string;
}
export interface StatisticsParameDTO {
    /**
     * 属性名称
     */
    attributeName?: string;
    /**
     * 企业ID
     */
    corpId?: string;
    /**
     * 部门id
     */
    deptId?: number;
    /**
     * 查询结束日期
     */
    endDate?: string;
    /**
     * 查询结束日期
     */
    endDateInt?: number;
    /**
     * 页数
     */
    pageNum?: number;
    /**
     * 每页显示多少条
     */
    pageSize?: number;
    /**
     * 站点ID
     */
    siteId?: number;
    /**
     * 查询起止日期
     */
    startDate?: string;
    /**
     * 查询起止日期
     */
    startDateInt?: number;
    /**
     * 坐席ID
     */
    userId?: number;
    /**
     * 坐席ID集合
     */
    userIds?: number[];
    /**
     * 企微用户ID集合
     */
    workUserIds?: string[];
}
/**
 * 主策略分页vo
 */
export interface GroupMsgStrategyVO {
    /**
     * 循环类型 1day 2week 3month
     */
    cycleType?: string;
    /**
     * 1 启用 2禁用
     */
    enableStauts?: string;
    /**
     * 执行状态
     */
    exeStatus?: string;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 开始时间
     */
    gmtTaskBegin?: Date;
    /**
     * 结束时间
     */
    gmtTaskEnd?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 群发策略名称
     */
    name?: string;
    /**
     * 发送范围 1全部客户 2 部分客户
     */
    sendRange?: string;
    /**
     * 发送方式 1即时发送 2 定时发送
     */
    sendType?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 策略类型 1 客户群发 2企业群发 3企客兔群发
     */
    strategyType?: string;
    /**
     * 子策略
     */
    subStrategyNameList?: string[];
    /**
     * 任务类型 1单次 2循环
     */
    taskType?: string;
}
/**
 * scrm-社群sop推送消息记录
 */
export interface SopMsgDO对象 {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * scrm_customer_group.id
     */
    customerGroupId?: number;
    /**
     * 群名称
     */
    customerName?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 消息id
     */
    msgIds?: string;
    /**
     * 群主企微id
     */
    ownerAccount?: string;
    /**
     * reason
     */
    reason?: string;
    /**
     * scrm_sop_task_record.id
     */
    recordId?: number;
    /**
     * 群id
     */
    roomId?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_sop_task.id
     */
    sopTaskId?: number;
}
/**
 * 企微标签表
 */
export interface TagDO对象 {
    /**
     * 是否允许客服修改-0:可修改，1:不可修改
     */
    ableSelected?: number;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 更新时间
     */
    gmtModified?: Date;
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否为默认标签库 Y-是 N-否
     */
    isDefault?: string;
    /**
     * 是否删除 Y-是 N-否
     */
    isDeleted?: string;
    /**
     * 是否展示给坐席-1:展示, 2:不展示
     */
    isShow?: number;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 标签库,组,标签名字
     */
    name?: string;
    /**
     * 父级id
     */
    parentId?: number;
    /**
     * 1单选，2多选
     */
    selectType?: number;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 类型-0:标签库，1:标签组, 2:标签
     */
    type?: number;
    /**
     * 微信返回的id
     */
    weworkTagId?: string;
}
/**
 * scrm-社群sop任务记录
 */
export interface SopTaskRecordDTO {
    /**
     * 内容
     */
    content?: string;
    /**
     * 执行状态 1待执行 2执行中 3已完成 4已取消 5 失败
     */
    exeStatus?: string;
    /**
     * 失败称
     */
    failNum?: number;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 开始时间
     */
    gmtTaskBegin?: Date;
    /**
     * 结束时间
     */
    gmtTaskEnd?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 任务名称
     */
    name?: string;
    /**
     * 房间名称
     */
    roomNames?: string[];
    /**
     * 发送方式 1定时单次发送 2周期推送
     */
    sendType?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_sop.id
     */
    sopId?: number;
    /**
     * scrm_sop_task.id
     */
    sopTaskId?: number;
    /**
     * 成功数
     */
    successNum?: number;
    /**
     * 任务类型 1 群名变更 2群公告变更 3内容推送
     */
    taskType?: string;
    /**
     * 触发条件
     */
    triggerCondition?: string;
}
/**
 * 企业微信用户数据统计
 */
export interface WechatWorkUserStatisticsDO对象 {
    /**
     * 新增客户数量
     */
    addCustomerNum?: number;
    /**
     * 新增客户总数
     */
    addCustomerSum?: number;
    /**
     * 创建群数量
     */
    creGroupNum?: number;
    /**
     * 创建群总数
     */
    creGroupSum?: number;
    /**
     * 删除总数
     */
    delCustomerNum?: number;
    /**
     * 解散群数量
     */
    delGroupNum?: number;
    /**
     * 主键ID
     */
    id?: number;
    /**
     * 统计日期格式yyyyhhdd
     */
    incrDate?: number;
    /**
     * 统计日期格式yyyy-hh-dd
     */
    incrDateStr?: string;
    /**
     * 进群用户数量
     */
    joinGroupNum?: number;
    /**
     * 进群用户总数
     */
    joinGroupSum?: number;
    /**
     * 退群用户数量
     */
    qiutGroupNum?: number;
    /**
     * 200人以上的群
     */
    scaleGroupNum?: number;
    /**
     * 坐席ID
     */
    sysUserId?: string;
    /**
     * 坐席名称
     */
    userName?: string;
    /**
     * 企业用户Id
     */
    weworkUserId?: string;
    /**
     * 企业用户UserName
     */
    weworkUserName?: string;
}
/**
 * scrm-群发记录
 */
export interface GroupMsgRecordDO对象 {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 执行状态
     */
    exeStatus?: string;
    /**
     * 外部联系人id
     */
    externalContactUserId?: string;
    /**
     * 坐席userid
     */
    followUserId?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 执行时间
     */
    gmtExe?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * msgId
     */
    msgId?: string;
    /**
     * msgNo 消息批号
     */
    msgNo?: number;
    /**
     * 失败原因
     */
    reason?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_group_msg_trategy.id
     */
    strategyId?: number;
    /**
     * scrm_group_msg_trategy_record.id
     */
    strategyRecordId?: number;
    /**
     * 策略类型 1 客户群发 2企业群发 3企客兔群发
     */
    strategyType?: string;
    /**
     * scrm_group_msg_sub_strategy.id
     */
    subStrategyId?: number;
    taskId?:        number;
}
/**
 * scrm-群发-坐席维度统计
 */
export interface GroupMsgAgentStatDO对象 {
    /**
     * 预计送达客户数量
     */
    assignNum?: number;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 所在部门id
     */
    deptId?: number;
    /**
     * 所在部门名称
     */
    deptName?: string;
    /**
     * 执行装态
     */
    exeStatus?: string;
    /**
     * 失败数
     */
    failNum?: number;
    /**
     * 坐席userid
     */
    followUserId?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 执行时间
     */
    gmtExe?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 消息id逗号分隔
     */
    msgIds?: string;
    reason?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_group_msg_trategy.id
     */
    strategyId?: number;
    /**
     * scrm_group_msg_trategy_record.id
     */
    strategyRecordId?: number;
    /**
     * scrm_group_msg_sub_strategy.id
     */
    subStrategyId?: number;
    /**
     * 触达数量
     */
    sucNum?: number;
    /**
     * 同步状态
     */
    synStatus?: string;
    /**
     * 用户id
     */
    sysUserId?: number;
    /**
     * 用户名
     */
    username?: string;
}
/**
 * 客户群表
 */
export interface CustomerGroupDO对象 {
    /**
     * 活跃人数
     */
    activeMemberCnt?: number;
    /**
     * 群头像
     */
    avatarList?: string[];
    /**
     * 群id
     */
    chatId?: string;
    /**
     * 群创建时间
     */
    createTime?: Date;
    /**
     * 建群方式
     */
    createWay?: string;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户人数
     */
    customerTotal?: number;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 更新时间
     */
    gmtModified?: Date;
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否删除 Y-是 N-否
     */
    isDeleted?: string;
    /**
     * 当日发言人数
     */
    memberHasMsg?: number;
    /**
     * 群人数
     */
    memberTotal?: number;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 群名称
     */
    name?: string;
    /**
     * 当日入群
     */
    newMemberCnt?: number;
    /**
     * 群主id
     */
    ownerAccount?: string;
    /**
     * 群主所在部门
     */
    ownerDeptName?: string;
    /**
     * 群主名称
     */
    ownerName?: string;
    /**
     * 当日退群
     */
    quitMemberCnt?: number;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 统计日期
     */
    statDate?: Date;
    /**
     * 群状态-0 - 跟进人正常 1 - 跟进人离职 2 - 离职继承中 3 - 离职继承完成
     */
    status?: number;
}
