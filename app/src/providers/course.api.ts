import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../app/api.config'
@Injectable()
export class CourseApi {

    constructor(private http: HttpClient) {

    }

    public list(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'course/list';
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
                return ApiConfig.ErrorHandle('course/list', data, err);
            });
    }

}
