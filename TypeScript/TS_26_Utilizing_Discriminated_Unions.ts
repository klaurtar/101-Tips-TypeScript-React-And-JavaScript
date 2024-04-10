// 🚫 Too Vague
interface DataResponse {
    statusCode: 200 | 204 | 401 | 500;
    status: 'success' | 'error' | 'unauthorized';
    data?: any; // type as any for simplicity
    errorMsg?: string;
}

// ✅ Better Stronger Typing
type BetterDataResponse = {
    statusCode: 200 | 204;
    status: 'success';
    data: any;
} | {
     statusCode: 401 | 500;
    status: 'error' | 'unauthorized';
    errorMsg: string;
}

const fetchData= (): BetterDataResponse => {
    // fetch some data
    return {
        statusCode: 200,
        status: 'success',
        data: [{id: 225}]
    }
}