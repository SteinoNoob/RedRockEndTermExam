export function addCommand(str, json) {
    let props = Object.getOwnPropertyNames(json);
    for (let i = 0; i < props.length; i++) {
        let symbol = (i === 0) ? "?" : "&";
        str += `${symbol}${props[i]}=${json[props[i]]}`;
    }
    return str;
};

export const ne = {
    ports: {
        // 登录
        qr_key: "http://codeman.ink/api/login/qr/key",
        qr_create: "http://codeman.ink/api/login/qr/create",
        qr_check: "http://codeman.ink/api/login/qr/check",
        login_status: "http://codeman.ink/api/login/status",
        // 搜索相关
        hot_search: "http://codeman.ink/api/search/hot",
        search: "http://codeman.ink/api/search",
        // banner
        banners: "http://codeman.ink/api/banner",
        // 歌单相关
        official: "http://codeman.ink/api/personalized",
        recommend: "http://codeman.ink/api/recommend/resource",
        list_detail: "http://codeman.ink/api/playlist/detail",
        // 歌曲详情
        songDetail: "http://codeman.ink/api/song/detail",
        songUrl: "http://codeman.ink/api/song/url/v1",
        lyric: "http://codeman.ink/api/lyric",
        comment: "http://codeman.ink/api/comment/music",
    },

    /**
     * @param {Number} num 
     * @param {Boolean} code false为播放量，true为歌曲时长毫秒
     * @returns {String}
     */
    format: (num, code = false) => {
        if (code = true) {
            let durInt = Math.round(num / 1000);
            let sec = durInt % 60, min = (durInt - sec) / 60;
            let checkTime = function (x) { return (x < 10) ? "0" + x : x; };
            return `${checkTime(min)}:${checkTime(sec)}`;
        } else {
            return num > 10000 ? `${String((num / 10000).exFixed(1))}万` : String(num);
        }
    },
    /**
     * @param {String} url @returns {Promise}
     */
    request: async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    },
    /** 将歌词时间点转换为currentTime
     * @param {String} str @returns {Number}
     */
    lrcMark: (str) => {
        let reg = /^(\d\d):(\d\d)\.(\d\d)$/g;
        return Number(str.replace(reg, ($0, $1, $2, $3) => {
            let min = Number($1) * 60,
                sec = Number($2),
                milisec = Number($3) / 100;
            return (min + sec + milisec).toString();
        }));
    },
};

export const { ports } = ne;

