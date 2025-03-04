import ApiService from './ApiService'

export async function apiGetCustomersList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: 'http://159.65.147.182:8000/api/resource/Employee?fields=["*"]',
        method: 'get',
        // params,
    })
}

export async function apiGetCustomer<T, U extends Record<string, unknown>>({
    name,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `http://159.65.147.182:8000/api/resource/Employee/${name}`,
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/customer/log`,
        method: 'get',
        params,
    })
}

export async function apiUpdateEmployeeWorkflowState<T>(
    name: string,
    workflowState: string
) {
    return ApiService.fetchDataWithAxios<T>({
        url: `http://159.65.147.182:8000/api/resource/Employee/${name}`,
        method: 'put',
        data: {
            workflow_state: workflowState
        },
    });
}
