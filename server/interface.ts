/**
 * 应用场景表
 */
export interface IApplySceneDeleteRequest {
    /**
     * 主键id
     */
    id?: number;
}
export interface IApplySceneDeleteResponse {
    fail?:              boolean;
    ok?:                boolean;
    result?:            { [key: string]: any };
    returnCode?:        string;
    returnMsg?:         string;
    systemCurrentTime?: Date;
    traceId?:           string;
}
