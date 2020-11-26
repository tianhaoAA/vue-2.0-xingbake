// 设置存储 

export const SET_SESSION_STORAGE = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};
// 获取存储
export const GET_SESSION_STORAGE = (name) => {
    // console.log(JSON.parse(localStorage.getItem('navRouter')));
    return JSON.parse(localStorage.getItem(name));
}