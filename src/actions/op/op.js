import * as actionTypes from "../../const/OpActionTypes.js";
import axios from 'axios'

function PostUserContent(item,next){
    next({
        type: `${actionTypes.FETCH_USER}_REQ`
    });
    axios({
        method: 'post',
        url: ' http://xly-wkop.xiaoniangao.cn/getUserInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid:item,
        }
    }).then(res => {
        next({
            type: `${actionTypes.FETCH_USER}_SUC`,
            data: res.data
        });
    }).catch(err => {
        next({
            type: `${actionTypes.FETCH_USER}_FAI`
        });
    });
}

function PostClassContent(item,next){
    next({
        type: `${actionTypes.FETCH_CLASS}_REQ`
    });    
    axios({
        method: 'post',
        url: ' http://xly-wkop.xiaoniangao.cn/getLessonInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid:item,
        }
    }).then(res => {
        next({
            type: `${actionTypes.FETCH_CLASS}_SUC`,
            data: res.data
        });
    }).catch(err => {
        next({
            type: `${actionTypes.FETCH_CLASS}_FAI`
        });
    });
}

export {
    PostUserContent,
    PostClassContent
}