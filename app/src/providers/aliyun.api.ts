import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../app/api.config'
@Injectable()
export class AliyunApi {

    constructor(private http: HttpClient) {

    }

    public sendverifycode(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'aliyun/sendverifycode';
        var headers = ApiConfig.GetHeader(url, data);
        let options = { headers: headers };
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                return res;
            })
            .catch(err => {
                console.error(err);
                return ApiConfig.ErrorHandle('aliyun/sendverifycode', data, err);
            });
    }


}
