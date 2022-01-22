export interface IChannelFindChannelByIdRequest {
    /**
     * id
     */
    id?: number;
}
export interface IChannelStatisticsGetSeatUserListRequest {
    /**
     * channelCode
     */
    channelCode?: string;
}
export interface IChannelQrConfigGetByIdRequest {
    /**
     * id
     */
    id?: number;
}
export interface IChannelQrConfigGetPromotionImageRequest {
    /**
     * id
     */
    id?: number;
}
export interface IChannelQrConfigGetStyleRequest {
    /**
     * id
     */
    id?: number;
}
export interface IChannelQrConfigRefreshQrCodeRequest {
    /**
     * id
     */
    id?: number;
}
export interface ICustGroupQueryCustDeliveryDetailRequest {
    /**
     * custGroupId
     */
    custGroupId?: number;
}
export interface ICustomerGroupDetailCustomerGroupRequest {
    /**
     * 客户群id
     */
    chatId?: string;
}
export interface IDistributePlanGetByIdRequest {
    /**
     * id
     */
    id?: number;
}
export interface IGroupMsgTrategyDetailRequest {
    /**
     * 主策略id
     */
    strategyId?: number;
}
export interface IGroupMsgTrategyGetCacheRequest {
    /**
     * strategyType
     */
    strategyType?: string;
}
export interface IGroupMsgTrategySubStrategyDetailRequest {
    /**
     * recordId
     */
    recordId?: number;
}
export interface IGroupMsgTrategySubStrategyStatRequest {
    /**
     * recordId
     */
    recordId?: number;
}
export interface IInnerTaskDistributePlanRefreshDisPlanQueneRequest {
    /**
     * id
     */
    id?: number;
}
export interface IJoinGroupTaskDetailJoinGroupTaskRequest {
    /**
     * 任务二维码id
     */
    joinGroupTaskId?: number;
}
export interface ITagDetailTagGroupRequest {
    /**
     * 标签组id
     */
    tagGroupId?: number;
}
export interface IWelcomeMsgDeleteRequest {
    /**
     * id
     */
    id?: number;
}
export interface IWelcomeMsgDeleteGroupRequest {
    /**
     * id
     */
    id?: number;
}
export interface IWelcomeMsgInfoRequest {
    /**
     * id
     */
    id?: number;
}
export interface IWelcomeMsgInfoGroupRequest {
    /**
     * id
     */
    id?: number;
}
export interface IWeworkReplyTreeRequest {
    /**
     * userId
     */
    userId?: string;
}
export interface IWeworkReplyDownloadRequest {
    /**
     * templateId
     */
    templateId?: number;
}
export interface IWeworkReplyGetCategoryTreeRequest {
    /**
     * templateId
     */
    templateId?: number;
}
export interface IWeworkUserGetSimpleVisitCardInfoRequest {
    /**
     * weworkAccount
     */
    weworkAccount?: string;
}
export interface IWorkSchedulingGetTemplateBizLineListRequest {
    /**
     * 排班模板ID
     */
    id?: string;
}
export interface ICustGroupQueryDataByScollRequest {
    /**
     * cusGroupIds
     */
    cusGroupIds?: any[];
}
export interface IInnerChannelQrDeptModifyRequest {
    /**
     * deptId
     */
    deptId?: any[];
}
export interface IChannelDropDownListRequest {
    /**
     * businessLineId
     */
    businessLineId?: number;
    /**
     * checkDistributPlan
     */
    checkDistributPlan?: string;
}
export interface ICircleCheckRequest {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 坐席企微id
     */
    followUid?: string;
}
export interface ICircleDetailRequest {
    /**
     * id
     */
    id?: number;
    /**
     * needMediaId 需要素材id true/false
     */
    needMediaId?: boolean;
}
export interface IDistributePlanGetChannelCacheRequest {
    corpId?: string;
    unionId?: string;
}
export interface IInnerChannelQrUserResignRequest {
    /**
     * deptId
     */
    deptId?: number;
    /**
     * userId
     */
    userId?: number;
}
export interface IInnerDistributePlanGetChannelBaseInfoRequest {
    /**
     * corpId
     */
    corpId?: string;
    /**
     * unionId
     */
    unionId?: string;
}
export interface IInnerWorkSchedulingGetUserTodayDetailListRequest {
    /**
     * siteId
     */
    siteId?: number;
    /**
     * userId
     */
    userId?: number;
}
export interface IServiceFeedbackCheckInviteRequest {
    /**
     * extUserId
     */
    extUserId?: string;
    /**
     * followUserId
     */
    followUserId?: string;
}
export interface ITagDetailTagLibraryRequest {
    /**
     * onlyShowQw
     */
    onlyShowQw?: boolean;
    /**
     * 标签库id
     */
    tagLibId?: number;
}
export interface IWelcomeInnerGetChannelQrBaseInfoRequest {
    /**
     * channelCode
     */
    channelCode?: string;
    /**
     * siteId
     */
    siteId?: number;
}
export interface IWorkSchedulingGetTemplateDetailRequest {
    /**
     * 业务线ID
     */
    bizLineId?: string;
    /**
     * 排班模板ID
     */
    id?: string;
}
export interface IChannelPageListRequest {
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
}
export interface IDistributePlanGetChannelByPlanIdRequest {
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 方案id
     */
    planId?: number;
}
export interface IInnerWorkSchedulingGetTodayDetailListRequest {
    /**
     * bizLineId
     */
    bizLineId?: number;
    /**
     * siteId
     */
    siteId?: number;
    /**
     * userId
     */
    userId?: number;
}
export interface IWorkSchedulingTemplateDetailPageListRequest {
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 模板ID
     */
    templateId?: number;
}
export interface IWorkSchedulingTemplatePageListRequest {
    /**
     * 业务线ID
     */
    businessLineId?: number;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
}
export interface IApplySceneListRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface IApplyScenePageRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface ICirclePageOptDetailRequest {
    /**
     * 互动统计id
     */
    optId?: number;
    /**
     * 互动类型
     */
    optType?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
}
export interface ICustGroupListByDsIdRequest {
    /**
     * custName
     */
    custName?: string;
    /**
     * dsId
     */
    dsId?: number;
    /**
     * pageNo
     */
    pageNo?: number;
    /**
     * pageSize
     */
    pageSize?: number;
}
export interface ICustomerGroupListGroupOwnerRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface IDistributePlanPageListRequest {
    channelName?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    planName?: string;
}
export interface IGroupMsgTrategyPageStrategyRequest {
    /**
     * 群发策略名称
     */
    name?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 策略类型 1 客户群发 2企业群发 3企客兔群发
     */
    strategyType?: string;
}
export interface IMiniProgramsListRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface IMiniProgramsPageRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface ITagGetUserTagsRequest {
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
}
export interface ITagListTagGroupRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
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
}
export interface IWelcomeMsgListRequest {
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
export interface IWelcomeMsgPageRequest {
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
/**
 * 应用场景表
 */
export interface IApplySceneDeleteRequest {
    /**
     * 主键id
     */
    id?: number;
}
export interface ICircleCancelRequest {
    id?: number;
}
export interface ICustomerGroupSaveActiveConfigRequest {
    /**
     * 配置值
     */
    value?: number;
}
export interface IGroupMsgTrategyCancelRequest {
    id?: number;
}
export interface IGroupMsgTrategyDisableRequest {
    id?: number;
}
export interface IGroupMsgTrategyRemindRequest {
    id?: number;
}
export interface IGroupMsgTrategyResendRequest {
    id?: number;
}
/**
 * id
 */
export interface IJoinGroupTaskDeleteJoinGroupTaskRequest {
    /**
     * 主键id
     */
    id?: number;
}
/**
 * id
 */
export interface IJoinGroupTaskScanJoinGroupTaskRequest {
    /**
     * 主键id
     */
    id?: number;
}
/**
 * 应用场景表
 */
export interface IMaterialDeleteRequest {
    /**
     * 主键id
     */
    id?: number;
}
/**
 * id
 */
export interface ITagDeleteTagGroupRequest {
    /**
     * 主键id
     */
    id?: number;
}
/**
 * id
 */
export interface ITagDeleteTagLibraryRequest {
    /**
     * 主键id
     */
    id?: number;
}
export interface IChannelStatisticsExportSeatData2ExcelRequest {
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
export interface IDistributePlanGetMiniProgramShortUrlRequest {
    /**
     * backgroud
     */
    backgroud?: string;
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 方案id
     */
    planId?: number;
    /**
     * unionId
     */
    unionId?: string;
    /**
     * uuid
     */
    uuid?: string;
}
export interface IDistributePlanGetQrcodeRequest {
    /**
     * backgroud
     */
    backgroud?: string;
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 方案id
     */
    planId?: number;
    /**
     * unionId
     */
    unionId?: string;
    /**
     * uuid
     */
    uuid?: string;
}
export interface IDistributePlanGetShortUrlRequest {
    /**
     * backgroud
     */
    backgroud?: string;
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 方案id
     */
    planId?: number;
    /**
     * unionId
     */
    unionId?: string;
    /**
     * uuid
     */
    uuid?: string;
}
export interface IGroupMsgTrategyPageAgentStatRequest {
    exeStatus?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    recordId?: number;
    strategyId?: number;
}
export interface IGroupMsgTrategyPageFailRecordRequest {
    exeStatus?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    recordId?: number;
    strategyId?: number;
}
export interface IJoinGroupTaskPageJoinGroupTaskRequest {
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 任务二维码名称
     */
    joinGroupTaskName?: string;
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
}
export interface IChannelStatisticsGetGlobalDataRequest {
    /**
     * 渠道CODE
     */
    channelCode?: string;
    /**
     * 站点ID
     */
    siteId?: number;
}
export interface ICircleSendCallBackRequest {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 坐席企微id
     */
    followUid?: string;
}
export interface ICircleUpdateSettingRequest {
    /**
     * 封面url
     */
    imgUrl?: string;
    /**
     * 个性签名
     */
    signature?: string;
}
/**
 * 群活码
 */
export interface IJoinGroupTaskDeleteGroupQrCodeRequest {
    /**
     * 主键
     */
    id?: number;
    /**
     * 状态:2-停用,-1-删除
     */
    status?: number;
}
export interface IMiniProgramsEnableRequest {
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否启用 1：启用  0:禁用
     */
    isEnabled?: boolean;
}
export interface IServiceFeedbackCheckCommitFeedBackRequest {
    /**
     * id
     */
    id?: number;
    /**
     * unionId
     */
    unionId?: string;
}
export interface IInnerChannelQrCustomerAddRequest {
    channelCode?: string;
    siteId?: number;
    wxUserId?: string;
}
/**
 * 欢迎语查询实体对象
 */
export interface IWelcomeInnerGetSend2WxWelcomeMsgRequest {
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
export interface IChannelStatisticsExportDateData2ExcelRequest {
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
export interface ICirclePageRequest {
    /**
     * 开始时间
     */
    beginTime?: Date;
    /**
     * 朋友圈类型 1 企业 2个人
     */
    circleType?: string;
    /**
     * 朋友圈内容
     */
    content?: string;
    /**
     * 创建人
     */
    creator?: string;
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
}
export interface ICustomerGroupDownloadStatGroupDetailRequest {
    /**
     * 群ID
     */
    chatId?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束日期
     */
    endDate?: Date;
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
     * 开始日期
     */
    startDate?: Date;
}
export interface ICustomerGroupStatGroupDetailRequest {
    /**
     * 群ID
     */
    chatId?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束日期
     */
    endDate?: Date;
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
     * 开始日期
     */
    startDate?: Date;
}
export interface IGroupMemberDownloadGroupMemberRequest {
    /**
     * 群ID
     */
    chatId?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束日期
     */
    endDate?: Date;
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
     * 开始日期
     */
    startDate?: Date;
}
export interface IGroupMemberPageGroupMemberRequest {
    /**
     * 群ID
     */
    chatId?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束日期
     */
    endDate?: Date;
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
     * 开始日期
     */
    startDate?: Date;
}
export interface ITagListTagLibraryRequest {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 更新人
     */
    modifier?: string;
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
     * 标签库名称
     */
    tagLibraryName?: string;
}
export interface ITagPageTagLibraryRequest {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 更新人
     */
    modifier?: string;
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
     * 标签库名称
     */
    tagLibraryName?: string;
}
export interface IWeworkReplyListRequest {
    /**
     * 类目id
     */
    categoryId?: number;
    /**
     * 查询的文本内容 (将废弃,见 contents)
     */
    content?: string;
    /**
     * 查询的文本内容 contents
     */
    contents?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 1企业话术，2个人话术，保存的时候不必填
     */
    type?: number;
    /**
     * 企业微信坐席的id，必填
     */
    userId?: string;
}
export interface IWeworkReplyGetlistRequest {
    /**
     * 分类id
     */
    cateId?: number;
    /**
     * 快捷回复内容 见新字段 contents
     */
    content?: string;
    /**
     * 快捷回复内容
     */
    contents?: string;
    /**
     * 创建人姓名
     */
    createName?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 创建人角色id
     */
    roleId?: number;
}
export interface IWorkSchedulingSaveOrUpdateTemplateRequest {
    /**
     * 模板关联业务线
     */
    businessLineIdList?: number[];
    /**
     * 排班模板ID
     */
    id?: number;
    /**
     * 排班模板名称
     */
    templateName?: string;
}
export interface IWelcomeMsgPageGroupRequest {
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
export interface IMaterialPageRequest {
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 素材名称
     */
    materialName?: string;
    /**
     * 素材类型 0：文本  1:图片 2:视频 3:文档 4:网页 5:小程序 6:模版素材
     */
    materialType?: number;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 应用场景id
     */
    sceneId?: number;
    /**
     * 站点id
     */
    siteId?: number;
}
export interface IChannelStatisticsGetSeatDataListRequest {
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
export interface IGroupMsgTrategyCustSendCallBackRequest {
    exUid?: string;
    failReason?: string;
    followUid?: string;
    recordId?: number;
    status?: string;
}
export interface IWeworkReplySaveRequest {
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
    id?: number;
    /**
     * 企业微信坐席的id，必填
     */
    userId?: string;
}
export interface IWorkSchedulingAdjustSeatDetailByDateRequest {
    /**
     * 业务线ID
     */
    bizLineId?: number;
    /**
     * 班次ID(非休息班该值必填)
     */
    itemId?: number;
    /**
     * 是否休息 Y:代表休息班 N:代表排班
     */
    rest?: string;
    /**
     * 日期格式yyyy-MM-dd
     */
    schedulingDate?: string;
    /**
     * 坐席用户ID
     */
    userId?: number;
}
export interface ICirclePageOptRequest {
    /**
     * 朋友圈id
     */
    circleId?: number;
    /**
     * 坐席followUid
     */
    followUid?: string;
    /**
     * 昵称
     */
    nickName?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 展示评论为0
     */
    showAllComment?: boolean;
    /**
     * 展示点赞为0
     */
    showAllLike?: boolean;
    /**
     * 排序字段 likeNum/commentNum
     */
    sortField?: string;
    /**
     * 排序方向 ascend/descend
     */
    sortType?: string;
}
export interface IWeworkReplyTemplatePageListRequest {
    /**
     * 创建人
     */
    creator?: string;
    endGmtCreated?: Date;
    endGmtModified?: Date;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 模版名称
     */
    name?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    startGmtCreated?: Date;
    startGmtModified?: Date;
}
export interface IInnerUserTagAddRequest {
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
export interface IChannelStatisticsGetChartDataRequest {
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
export interface IGroupMsgTrategyPageRecordRequest {
    /**
     * 开始时间
     */
    beginTime?: Date;
    /**
     * 客群名称
     */
    custName?: string;
    /**
     * 结束时间
     */
    endTime?: Date;
    /**
     * 群发策略名称
     */
    name?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 执行状态
     */
    status?: string;
    /**
     * 策略类型 1 客户群发 2企业群发 3企客兔群发
     */
    strategyType?: string;
    /**
     * 子策略id
     */
    subId?: number;
    /**
     * 子策略名称
     */
    subName?: string;
}
export interface ICustomerGroupPageCustomerGroupRequest {
    /**
     * 选中群id集合
     */
    chatIdList?: any[];
    /**
     * 客户群名称
     */
    customerGroupName?: string;
    /**
     * 群状态
     */
    customerGroupStatus?: number;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 建群结束日期
     */
    endDate?: Date;
    /**
     * 群主企微账号账号
     */
    ownerAccount?: string;
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
     * 建群开始日期
     */
    startDate?: Date;
}
/**
 * 保存用户标签请求
 */
export interface ITagSaveUserTagsRequest {
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
export interface IChannelStatisticsGetCustomerDetailListRequest {
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
export interface IChannelStatisticsGetDateDataListRequest {
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
export interface IWorkSchedulingGetSeatDateDetailPageListRequest {
    /**
     * 业务线ID
     */
    bizLineId?: number;
    /**
     * 部门ID
     */
    depId?: number;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    /**
     * 日期 yyyy-MM-dd
     */
    schedulingDate?: string;
    /**
     * 坐席姓名
     */
    seatName?: string;
    /**
     * 用户ID
     */
    userId?: number;
}
export interface IGroupChatRecordDownloadChatRecordRequest {
    /**
     * 群Id
     */
    chatId?: string;
    /**
     * 上次查询返回的游标
     */
    cursor?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束时间
     */
    endTime?: Date;
    msgId?: string;
    /**
     * 搜索文本
     */
    msgText?: string;
    /**
     * 消息类型
     */
    msgType?: string;
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
     * 开始时间
     */
    startTime?: Date;
}
export interface IGroupChatRecordPageChatRecordRequest {
    /**
     * 群Id
     */
    chatId?: string;
    /**
     * 上次查询返回的游标
     */
    cursor?: string;
    /**
     * 可见成员ids
     */
    deptIds?: string;
    /**
     * 结束时间
     */
    endTime?: Date;
    msgId?: string;
    /**
     * 搜索文本
     */
    msgText?: string;
    /**
     * 消息类型
     */
    msgType?: string;
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
     * 开始时间
     */
    startTime?: Date;
}
export interface IChannelQrConfigBatchModifyStyleRequest {
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
export interface IChannelQrConfigTestDownloadRequest {
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
export interface IWorkSchedulingGetSeatDetailCountPageListRequest {
    /**
     * 开始日期 yyyy-MM-dd
     */
    beginDate?: string;
    /**
     * 业务线ID
     */
    bizLineId?: number;
    /**
     * 部门ID
     */
    depId?: number;
    deptIds?: number[];
    /**
     * 结束日期 yyyy-MM-dd
     */
    endDate?: string;
    /**
     * 默认分页页码
     */
    pageNum?: number;
    /**
     * 默认分页大小
     */
    pageSize?: number;
    siteId?: number;
}
/**
 * 模版
 */
export interface IWeworkReplyTemplateDeleteByIdRequest {
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
 * 模版
 */
export interface IWeworkReplyTemplateSaveOrUpdateRequest {
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
export interface IApplySceneSaveOrUpdateRequest {
    /**
     * 应用场景参数集合
     */
    applySceneList?: ApplySceneDTO对象[];
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
export interface IMiniProgramsSaveOrUpdateRequest {
    /**
     * 小程序新增/修改参数集合
     */
    miniProgramList?: MiniProgramsDTO[];
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
export interface IChannelQrConfigPageRequest {
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
    creator?: string;
    /**
     * 创建人id
     */
    creatorId?: number;
    deptId?: number;
    /**
     * 结束时间
     */
    endTime?: Date;
    id?: number;
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
export interface IWeworkReplyDeleteCategoryRequest {
    /**
     * 子节点
     */
    children?: IWeworkReplyDeleteCategoryRequest[];
    id?: number;
    /**
     * 名字,保存的时候必填
     */
    name?: string;
    /**
     * 各个节点的快捷回复数量
     */
    number?: number;
    /**
     * 父节点，保存的时候必填，根节点填0
     */
    parentId?: number;
    siteId?: number;
    /**
     * 直属子节点数量
     */
    subNumber?: number;
    /**
     * 模版Id
     */
    templateId?: number;
}
export interface IWeworkReplySaveCategoryRequest {
    /**
     * 子节点
     */
    children?: IWeworkReplySaveCategoryRequest[];
    id?: number;
    /**
     * 名字,保存的时候必填
     */
    name?: string;
    /**
     * 各个节点的快捷回复数量
     */
    number?: number;
    /**
     * 父节点，保存的时候必填，根节点填0
     */
    parentId?: number;
    siteId?: number;
    /**
     * 直属子节点数量
     */
    subNumber?: number;
    /**
     * 模版Id
     */
    templateId?: number;
}
export interface IWorkSchedulingBatchAdjustSeatDetailRequest {
    /**
     * 业务线ID
     */
    bizLineId?: number;
    /**
     * 排班明细列表
     */
    detailItemList?: BatchAdjustSeatDetailItem[];
    /**
     * 排班日期(格式yyyy-MM-dd)
     */
    schedulingDateList?: string[];
}
export interface BatchAdjustSeatDetailItem {
    /**
     * 班次ID(非休息班该值必填)
     */
    itemId?: number;
    /**
     * 是否休息班 Y:代表休息班 N:代表排班
     */
    rest?: string;
    /**
     * 坐席用户ID列表
     */
    userIdList?: number[];
}
export interface IWorkSchedulingSaveOrUpdateDetailListRequest {
    /**
     * 生效类型：1.即刻生效 2.次日生效
     */
    effectiveType?: number;
    /**
     * 班次明细列表
     */
    itemList?: SchedulingDetailItem[];
    /**
     * 模板ID
     */
    templateId?: number;
}
export interface SchedulingDetailItem {
    /**
     * 开始时间 24HH:MM 例如-》13:30
     */
    beginTime?: string;
    /**
     * 结束时间 24HH:MM 例如-》18:30
     */
    endTime?: string;
    /**
     * 标识是否是已生效数据 取值Y 或 N
     */
    isEff?: string;
    /**
     * 班次ID
     */
    itemId?: number;
    /**
     * 班次名称
     */
    name?: string;
}
export interface IWechatWorkDateStatisticsRequest {
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
export interface IWechatWorkSumStatisticsRequest {
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
export interface IWechatWorkUserStatisticsRequest {
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
 * 服务评价
 */
export interface IServiceFeedbackCreateOrUpdateRequest {
    /**
     * 创建者
     */
    creator?: string;
    /**
     * 扩展字段
     */
    extraInfo?: string;
    /**
     * 外部联系人id
     */
    extUserId?: string;
    /**
     * 坐席id
     */
    followUserId?: string;
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
     * 是否删除
     */
    isDeleted?: string;
    /**
     * 选择标签
     */
    label?: string[];
    /**
     * 修改者
     */
    modifier?: string;
    /**
     * 评分
     */
    score?: number;
    /**
     * 备注
     */
    serviceComment?: string;
    /**
     * 服务日期
     */
    serviceDate?: Date;
    /**
     * 客户id
     */
    unionId?: string;
}
/**
 * 渠道管理
 */
export interface IChannelAddOrUpdateRequest {
    /**
     * 是否已被其他方案绑定
     */
    bindDistributePlan?: boolean;
    /**
     * 业务线
     */
    businessLine?: number;
    /**
     * 渠道标识
     */
    channelCode?: string;
    /**
     * 渠道层级
     */
    channelLevel?: number;
    /**
     * 渠道名称标识
     */
    channelName?: string;
    /**
     * 子渠道
     */
    children?: IChannelAddOrUpdateRequest[];
    /**
     * 子渠道数
     */
    childrenNum?: number;
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
     * 上级渠道id
     */
    parentId?: number;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 渠道状态,1有效，0失效
     */
    status?: number;
    /**
     * 子渠道总数
     */
    sumChildren?: number;
    /**
     * 是否已使用 Y-是 N-否
     */
    used?: string;
}
/**
 * 分配方案渠道样式
 */
export interface IDistributePlanAddOrUpdateChannelRequest {
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
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注位置（1:在昵称前，2:在昵称后)
     */
    customerRemarkPosition?: number;
    /**
     * 客户标签
     */
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
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
/**
 * 分配方案渠道样式
 */
export interface IDistributePlanRemoveChannelRequest {
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
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注位置（1:在昵称前，2:在昵称后)
     */
    customerRemarkPosition?: number;
    /**
     * 客户标签
     */
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
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
/**
 * 素材库表
 */
export interface IMaterialSaveOrUpdateRequest {
    /**
     * 文本内容
     */
    content?: string;
    /**
     * 可见成员id，以逗号隔开（选全部传0）
     */
    deptId?: string;
    /**
     * 上传文件名称
     */
    fileName?: string;
    /**
     * 主键
     */
    id?: number;
    /**
     * 素材名称
     */
    materialName?: string;
    /**
     * 模版素材类型参数集合
     */
    materialParams?: MaterialTemplate[];
    /**
     * 素材类型 0：文本  1:图片 2:视频 3:文档 4:网页 5:小程序 6:模版素材
     */
    materialType?: number;
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
     * 应用场景id
     */
    sceneId?: number;
    /**
     * 应用场景名称
     */
    sceneName?: string;
    /**
     * 网页/页面标题
     */
    title?: string;
    /**
     * 图片/附件/网页封面/卡片展示/视频
     */
    url?: string;
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
/**
 * 任务码
 */
export interface IJoinGroupTaskSaveJoinGroupTaskRequest {
    /**
     * 拉群码信息
     */
    groupQrCodeList?: GroupQrCodeDO对象[];
    /**
     * 入群副标题
     */
    guideSubtitle?: string;
    /**
     * 入群引导标题
     */
    guideTitle?: string;
    /**
     * 拉群任务Id
     */
    joinGroupTaskId?: number;
    /**
     * 拉群任务名称
     */
    joinGroupTaskName?: string;
    /**
     * 群码类型 GROUP_CODE企微群活码
     */
    joinGroupType?: string;
    /**
     * 二维码logo
     */
    qrLogoImg?: string;
    /**
     * 入群上限剩余通知人数
     */
    remainNotifyNum?: number;
    /**
     * 标签
     */
    userLabel?: string;
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
export interface IWeworkReplyDeleteRequest {
    /**
     * 企业还是个人
     */
    belong?: string;
    /**
     * 所属类目id
     */
    categoryId?: number;
    /**
     * 回复内容
     */
    content?: string;
    /**
     * 回复内容--json
     */
    contents?: string;
    /**
     * 回复内容数组
     */
    contentsList?: ReplyContentDTO[];
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
    id?: number;
    isDeleted?: string;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 创建人角色Id
     */
    roleId?: number;
    /**
     * 创建人角色
     */
    roleName?: string;
    siteId?: number;
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
export interface IWeworkReplySaveOrUpdateRequest {
    /**
     * 企业还是个人
     */
    belong?: string;
    /**
     * 所属类目id
     */
    categoryId?: number;
    /**
     * 回复内容
     */
    content?: string;
    /**
     * 回复内容--json
     */
    contents?: string;
    /**
     * 回复内容数组
     */
    contentsList?: ReplyContentDTO[];
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
    id?: number;
    isDeleted?: string;
    /**
     * 更新人
     */
    modifier?: string;
    /**
     * 创建人角色Id
     */
    roleId?: number;
    /**
     * 创建人角色
     */
    roleName?: string;
    siteId?: number;
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
 * 标签库
 */
export interface ITagSaveTagLibraryRequest {
    /**
     * 标签库Id
     */
    id?: number;
    /**
     * 是否为默认标签库 Y-是 N-否
     */
    isDefault?: string;
    /**
     * 标签库名称
     */
    name?: string;
    /**
     * 标签组信息
     */
    tagGroupList?: TagGroupDTO[];
}
/**
 * 标签组
 */
export interface TagGroupDTO {
    /**
     * 是否允许客服修改-0:可修改，1:不可修改
     */
    ableSelected?: number;
    /**
     * 标签组Id
     */
    id?: number;
    /**
     * 是否展示给坐席-1:展示, 2:不展示
     */
    isShow?: number;
    /**
     * 标签组名字
     */
    name?: string;
    /**
     * 选中数量
     */
    selectedNum?: number;
    /**
     * 1单选，2多选
     */
    selectType?: number;
    /**
     * 标签信息
     */
    tagList?: TagDO对象[];
    /**
     * 微信Id
     */
    weworkTagId?: string;
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
export interface IWelcomeMsgSaveOrUpdateGroupRequest {
    /**
     * 欢迎语详情
     */
    details?: WelcomeMsgDetailGroupDTO对象[];
    /**
     * 主键
     */
    id?: number;
    /**
     * 通知成员，N-不通知，Y-通知
     */
    notifyType?: string;
    /**
     * 企微欢迎语素材id
     */
    qwTemplateId?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 欢迎语名称
     */
    welcomeMsgName?: string;
}
export interface WelcomeMsgDetailGroupDTO对象 {
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否拼接参数标识 Y/N
     */
    isSplicing?: string;
    /**
     * 素材列表
     */
    materialQws?: MaterialQwDTO对象[];
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 拼接内容
     */
    splicingContent?: KeyValueDTO[];
    /**
     * 欢迎语内容
     */
    welcomeMsgContent?: string;
    /**
     * 欢迎语id
     */
    welcomeMsgId?: number;
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
export interface KeyValueDTO {
    key?: string;
    value?: string;
}
/**
 * 渠道码配置表
 */
export interface IChannelQrConfigAddOrUpdateRequest {
    /**
     * 扫码添加次数
     */
    addTimes?: number;
    /**
     * 添加设置扩展参数 json:{
     * "dayOfWeek": [
     * 1,
     * 2,
     * 3,
     * 4,
     * 5
     * ],
     * "startTime": "09:00:00",
     * "endTime": "11:00:00"
     * }
     */
    addVerifyExtra?: string;
    /**
     * 添加设置 1:自动通过，2：手动设置，3:分时段通过
     */
    addVerifyType?: number;
    /**
     * 备用成员
     */
    backupList?: ChannelCodeConfigObjectDO对象[];
    /**
     * 业务线id
     */
    businessLineId?: number;
    /**
     * 渠道code
     */
    channelCode?: string;
    /**
     * 渠道id
     */
    channelId?: number;
    /**
     * 活码名称
     */
    channelName?: string;
    /**
     * 渠道码有效性,0:失效，1：有效
     */
    channelStatus?: number;
    /**
     * 渠道类型，1：单人，2：多人，3：批量单人
     */
    configType?: number;
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注名称 1:在昵称前，2:在昵称后
     */
    customerRemarkPosition?: number;
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * id
     */
    id?: number;
    /**
     * 使用对象列表
     */
    objectList?: ChannelCodeConfigObjectDO对象[];
    /**
     * 渠道码图片
     */
    qrCode?: string;
    /**
     * 渠道码图片
     */
    qrCodeText?: string;
    /**
     * 执行状态,0:失败，1：刷新成功，2：刷新中，3：部分成功,4:待刷新
     */
    refreshStatus?: number;
    /**
     * 背景图
     */
    styleBackground?: string;
    /**
     * 引导语
     */
    styleContent?: string;
    /**
     * 二维码坐标-X
     */
    styleQrPositionX?: number;
    /**
     * 二维码坐标-Y
     */
    styleQrPositionY?: number;
    /**
     * 二维码大小-高
     */
    styleQrSizeH?: number;
    /**
     * 二维码大小-宽
     */
    styleQrSizeW?: number;
    /**
     * 活码样式 0:自定义，1、2、3分别对应样式1、2、3、
     */
    styleType?: number;
    /**
     * 使用对象，1：部门，2：成员
     */
    useObjectType?: number;
    /**
     * 欢迎语id
     */
    welcomeId?: number;
    /**
     * 欢迎语设置（1：渠道欢迎语，2：默认欢迎语，3：不发送欢迎语）
     */
    welcomeType?: number;
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
/**
 * 分配方案
 */
export interface IDistributePlanAddRequest {
    /**
     * 业务线
     */
    businessLine?: number;
    /**
     * 业务线名称
     */
    businessLineName?: string;
    /**
     * 渠道配置
     */
    channelInfo?: DistributeChannelDO对象[];
    /**
     * 渠道数
     */
    channelSize?: number;
    /**
     * 坐席账号配置
     */
    corpInfo?: CorpDistributeInfoDTO[];
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
     * 方案名称
     */
    planName?: string;
    /**
     * 站点id
     */
    siteId?: number;
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
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注位置（1:在昵称前，2:在昵称后)
     */
    customerRemarkPosition?: number;
    /**
     * 客户标签
     */
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
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
/**
 * 分配方案
 */
export interface IDistributePlanRemovePlanRequest {
    /**
     * 业务线
     */
    businessLine?: number;
    /**
     * 业务线名称
     */
    businessLineName?: string;
    /**
     * 渠道配置
     */
    channelInfo?: DistributeChannelDO对象[];
    /**
     * 渠道数
     */
    channelSize?: number;
    /**
     * 坐席账号配置
     */
    corpInfo?: CorpDistributeInfoDTO[];
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
     * 方案名称
     */
    planName?: string;
    /**
     * 站点id
     */
    siteId?: number;
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
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注位置（1:在昵称前，2:在昵称后)
     */
    customerRemarkPosition?: number;
    /**
     * 客户标签
     */
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
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
/**
 * 分配方案
 */
export interface IDistributePlanUpdateRequest {
    /**
     * 业务线
     */
    businessLine?: number;
    /**
     * 业务线名称
     */
    businessLineName?: string;
    /**
     * 渠道配置
     */
    channelInfo?: DistributeChannelDO对象[];
    /**
     * 渠道数
     */
    channelSize?: number;
    /**
     * 坐席账号配置
     */
    corpInfo?: CorpDistributeInfoDTO[];
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
     * 方案名称
     */
    planName?: string;
    /**
     * 站点id
     */
    siteId?: number;
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
     * 客户描述
     */
    customerDesc?: string;
    /**
     * 客户备注
     */
    customerRemark?: string;
    /**
     * 客户备注位置（1:在昵称前，2:在昵称后)
     */
    customerRemarkPosition?: number;
    /**
     * 客户标签
     */
    customerTag?: string;
    /**
     * 客户标签
     */
    customerTagList?: ChannelCustomerTagRequestVO[];
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
export interface IWelcomeMsgSaveOrUpdateRequest {
    /**
     * 欢迎语详情列表
     */
    details?: WelcomeMsgDetailDTO对象[];
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否默认,Y/N
     */
    isDefault?: string;
    /**
     * 是否读取排班配置
     */
    isScheduling?: string;
    /**
     * 是否有效,Y/N
     */
    isValid?: string;
    /**
     * 通知成员，N-不通知，Y-通知
     */
    notifyType?: string;
    /**
     * 企微欢迎语素材id
     */
    qwTemplateId?: string;
    /**
     * 发送规则 1:即时发送,2:分时段发送
     */
    sendRule?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 欢迎语来源，0-个人欢迎语，1-入群欢迎语
     */
    source?: string;
    /**
     * 关联坐席列表
     */
    users?: WelcomeMsgUserDTO[];
    /**
     * 欢迎语名称
     */
    welcomeMsgName?: string;
}
export interface WelcomeMsgDetailDTO对象 {
    /**
     * 主键
     */
    id?: number;
    /**
     * 是否拼接参数标识 Y/N
     */
    isSplicing?: string;
    /**
     * 上下班标识 Y-上班/N-下班
     */
    isWork?: string;
    /**
     * 素材列表
     */
    materialQws?: MaterialQwDTO对象[];
    /**
     * 分时段规则结束时间
     */
    schedulingEndTime?: string;
    /**
     * 分时段规则开始时间
     */
    schedulingStartTime?: string;
    /**
     * 分时段规则星期,1/2/3/4/5/6/7
     */
    schedulingWeek?: string[];
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 排序
     */
    sortOrder?: number;
    /**
     * 拼接内容
     */
    splicingContent?: KeyValueDTO[];
    /**
     * 欢迎语内容
     */
    welcomeMsgContent?: string;
    /**
     * 欢迎语id
     */
    welcomeMsgId?: number;
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
export interface KeyValueDTO {
    key?: string;
    value?: string;
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
/**
 * 群发策略
 */
export interface IGroupMsgTrategyPredictStatRequest {
    /**
     * 拼接参数 [{'key':'', 'value':''}]
     */
    appendParams?: Kvdto[];
    /**
     * 是否启用开关 Y/N
     */
    appendSwitch?: string;
    /**
     * 筛选内容
     */
    conditionDTO?: ConditionDTO;
    /**
     * 内容
     */
    contentList?: MaterialResDTO[];
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户类型 1全部客户 2部分客户
     */
    custType?: string;
    /**
     * 筛选类型 1标签 2客群 3客户条件
     */
    filterType?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 是否营销保护 Y/N
     */
    isProtect?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 群发子策略名称
     */
    name?: string;
    /**
     * 循环任务计划执行时间
     */
    plannedExecTime?: Date;
    /**
     * 补发配置
     */
    retryType?: string[];
    /**
     * 发送者, 多部门id逗号拼接
     */
    sendDeptIds?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_group_msg_trategy.id
     */
    trategyId?: number;
}
export interface Kvdto {
    key?: string;
    value?: string;
}
/**
 * 筛选内容
 */
export interface ConditionDTO {
    /**
     * 添加好友天数
     */
    addDays?: string;
    /**
     * 年龄范围 10,20
     */
    ageRange?: string;
    /**
     * 客群id
     */
    cgId?: string;
    /**
     * 客群名称
     */
    cgName?: string;
    /**
     * 渠道
     */
    channels?: string[];
    /**
     * 城市
     */
    city?: string;
    /**
     * 客群类型id
     */
    dsId?: number;
    /**
     * 客群类型名称
     */
    dsName?: string;
    inLabel?: string[];
    /**
     * 标签业务线
     */
    inLabelBusId?: number;
    /**
     * 包含标签
     */
    inLabelList?: TagDO对象[];
    outLabel?: string[];
    /**
     * 标签业务线
     */
    outLabelBusId?: number;
    /**
     * 排除标签
     */
    outLabelList?: TagDO对象[];
    /**
     * 性别
     */
    sex?: string;
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
export interface ICircleSaveOrUpdateRequest {
    /**
     * 成员范围 1全部 2部分
     */
    agentRange?: string;
    /**
     * 坐席系统id
     */
    agentSysIds?: number[];
    /**
     * 拼接参数 [{'key':'', 'value':''}]
     */
    appendParams?: Kvdto[];
    /**
     * 参数拼接开关 Y/N
     */
    appendSwitch?: string;
    /**
     * 朋友圈类型 1 企业 2个人
     */
    circleType?: string;
    /**
     * 筛选内容
     */
    conditionDTO?: ConditionDTO;
    /**
     * 内容
     */
    contentList?: MaterialResDTO[];
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 执行状态 1待执行 2执行中 3已完成 4已取消 5 失败
     */
    exeStatus?: string;
    /**
     * 筛选类型 1标签 2客群 3客户条件
     */
    filterType?: string;
    /**
     * 选中坐席
     */
    followUids?: FollowUserDTO[];
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 客户类型 1全部客户 2部分客户
     */
    sendRange?: string;
    /**
     * 发送方式 1即时发送 2 定时发送
     */
    sendType?: string;
    /**
     * 已发送数
     */
    sentNum?: number;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * 未发送数
     */
    unsentNum?: number;
}
export interface Kvdto {
    key?: string;
    value?: string;
}
/**
 * 筛选内容
 */
export interface ConditionDTO {
    /**
     * 添加好友天数
     */
    addDays?: string;
    /**
     * 年龄范围 10,20
     */
    ageRange?: string;
    /**
     * 客群id
     */
    cgId?: string;
    /**
     * 客群名称
     */
    cgName?: string;
    /**
     * 渠道
     */
    channels?: string[];
    /**
     * 城市
     */
    city?: string;
    /**
     * 客群类型id
     */
    dsId?: number;
    /**
     * 客群类型名称
     */
    dsName?: string;
    inLabel?: string[];
    /**
     * 标签业务线
     */
    inLabelBusId?: number;
    /**
     * 包含标签
     */
    inLabelList?: TagDO对象[];
    outLabel?: string[];
    /**
     * 标签业务线
     */
    outLabelBusId?: number;
    /**
     * 排除标签
     */
    outLabelList?: TagDO对象[];
    /**
     * 性别
     */
    sex?: string;
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
export interface FollowUserDTO {
    id?: number;
    /**
     * 坐席姓名
     */
    realName?: string;
}
/**
 * 群发策略
 */
export interface IGroupMsgTrategyCacheRequest {
    /**
     * 循环类型 1day 2week 3month
     */
    cycleType?: string;
    /**
     * 1 启用 2禁用
     */
    enableStauts?: string;
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
     * 策略类型 1 客户群发 2企业群发 3企客兔群发 4企客兔私聊群发
     */
    strategyType?: string;
    /**
     * 子策略
     */
    subTrategyDTOS?: GroupMsgSTrategyDTO[];
    /**
     * 任务类型 1单次 2循环
     */
    taskType?: string;
}
/**
 * 群发策略
 */
export interface GroupMsgSTrategyDTO {
    /**
     * 拼接参数 [{'key':'', 'value':''}]
     */
    appendParams?: Kvdto[];
    /**
     * 是否启用开关 Y/N
     */
    appendSwitch?: string;
    /**
     * 筛选内容
     */
    conditionDTO?: ConditionDTO;
    /**
     * 内容
     */
    contentList?: MaterialResDTO[];
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户类型 1全部客户 2部分客户
     */
    custType?: string;
    /**
     * 筛选类型 1标签 2客群 3客户条件
     */
    filterType?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 是否营销保护 Y/N
     */
    isProtect?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 群发子策略名称
     */
    name?: string;
    /**
     * 循环任务计划执行时间
     */
    plannedExecTime?: Date;
    /**
     * 补发配置
     */
    retryType?: string[];
    /**
     * 发送者, 多部门id逗号拼接
     */
    sendDeptIds?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_group_msg_trategy.id
     */
    trategyId?: number;
}
export interface Kvdto {
    key?: string;
    value?: string;
}
/**
 * 筛选内容
 */
export interface ConditionDTO {
    /**
     * 添加好友天数
     */
    addDays?: string;
    /**
     * 年龄范围 10,20
     */
    ageRange?: string;
    /**
     * 客群id
     */
    cgId?: string;
    /**
     * 客群名称
     */
    cgName?: string;
    /**
     * 渠道
     */
    channels?: string[];
    /**
     * 城市
     */
    city?: string;
    /**
     * 客群类型id
     */
    dsId?: number;
    /**
     * 客群类型名称
     */
    dsName?: string;
    inLabel?: string[];
    /**
     * 标签业务线
     */
    inLabelBusId?: number;
    /**
     * 包含标签
     */
    inLabelList?: TagDO对象[];
    outLabel?: string[];
    /**
     * 标签业务线
     */
    outLabelBusId?: number;
    /**
     * 排除标签
     */
    outLabelList?: TagDO对象[];
    /**
     * 性别
     */
    sex?: string;
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
/**
 * 群发策略
 */
export interface IGroupMsgTrategySaveOrUpdateRequest {
    /**
     * 循环类型 1day 2week 3month
     */
    cycleType?: string;
    /**
     * 1 启用 2禁用
     */
    enableStauts?: string;
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
     * 策略类型 1 客户群发 2企业群发 3企客兔群发 4企客兔私聊群发
     */
    strategyType?: string;
    /**
     * 子策略
     */
    subTrategyDTOS?: GroupMsgSTrategyDTO[];
    /**
     * 任务类型 1单次 2循环
     */
    taskType?: string;
}
/**
 * 群发策略
 */
export interface GroupMsgSTrategyDTO {
    /**
     * 拼接参数 [{'key':'', 'value':''}]
     */
    appendParams?: Kvdto[];
    /**
     * 是否启用开关 Y/N
     */
    appendSwitch?: string;
    /**
     * 筛选内容
     */
    conditionDTO?: ConditionDTO;
    /**
     * 内容
     */
    contentList?: MaterialResDTO[];
    /**
     * 创建人
     */
    creator?: string;
    /**
     * 客户类型 1全部客户 2部分客户
     */
    custType?: string;
    /**
     * 筛选类型 1标签 2客群 3客户条件
     */
    filterType?: string;
    /**
     * 创建时间
     */
    gmtCreated?: Date;
    /**
     * 修改时间
     */
    gmtModified?: Date;
    /**
     * 下次执行时间
     */
    gmtNextExe?: Date;
    /**
     * 主键id
     */
    id?: number;
    /**
     * 删除标识：N-未删除；Y-已删除
     */
    isDeleted?: string;
    /**
     * 是否营销保护 Y/N
     */
    isProtect?: string;
    /**
     * 修改人
     */
    modifier?: string;
    /**
     * 群发子策略名称
     */
    name?: string;
    /**
     * 循环任务计划执行时间
     */
    plannedExecTime?: Date;
    /**
     * 补发配置
     */
    retryType?: string[];
    /**
     * 发送者, 多部门id逗号拼接
     */
    sendDeptIds?: string;
    /**
     * 站点id
     */
    siteId?: number;
    /**
     * scrm_group_msg_trategy.id
     */
    trategyId?: number;
}
export interface Kvdto {
    key?: string;
    value?: string;
}
/**
 * 筛选内容
 */
export interface ConditionDTO {
    /**
     * 添加好友天数
     */
    addDays?: string;
    /**
     * 年龄范围 10,20
     */
    ageRange?: string;
    /**
     * 客群id
     */
    cgId?: string;
    /**
     * 客群名称
     */
    cgName?: string;
    /**
     * 渠道
     */
    channels?: string[];
    /**
     * 城市
     */
    city?: string;
    /**
     * 客群类型id
     */
    dsId?: number;
    /**
     * 客群类型名称
     */
    dsName?: string;
    inLabel?: string[];
    /**
     * 标签业务线
     */
    inLabelBusId?: number;
    /**
     * 包含标签
     */
    inLabelList?: TagDO对象[];
    outLabel?: string[];
    /**
     * 标签业务线
     */
    outLabelBusId?: number;
    /**
     * 排除标签
     */
    outLabelList?: TagDO对象[];
    /**
     * 性别
     */
    sex?: string;
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
