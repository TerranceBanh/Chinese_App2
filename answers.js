const answers = {
    numbers: [
        { ch: '零', pinyin: 'líng', en: 'zero', }, 
        { ch: '一', pinyin: 'yī', en: 'one',  }, 
        { ch: '二', pinyin: 'èr', en: 'two', }, 
        { ch: '三', pinyin: 'sān', en: 'three', }, 
        { ch: '四', pinyin: 'sì', en: 'four', }, 
        { ch: '五', pinyin: 'wǔ', en: 'five', }, 
        { ch: '六', pinyin: 'liù', en: 'six', }, 
        { ch: '七', pinyin: 'qī', en: 'seven', }, 
        { ch: '八', pinyin: 'bā', en: 'eight', }, 
        { ch: '九', pinyin: 'jiǔ', en: 'nine', }, 
        { ch: '十', pinyin: 'shí', en: 'ten', },
        { ch: '百', pinyin: 'bǎi', en: 'hundred', }, 
        { ch: '千', pinyin: 'qiān', en: 'thousand', }, 
        { ch: '万', pinyin: 'wàn', en: 'ten thousand', }, 
        { ch: '亿', pinyin: 'yì', en: 'billion', },
    ],
    pronouns: [
        { ch: '我', pinyin: 'wǒ', en: 'me, I', },
        { ch: '你', pinyin: 'nǐ', en: 'you', }, 
        { ch: '您', pinyin: 'nín', en: 'you (polite)', }, 
        { ch: '他', pinyin: 'tā (male)', en: 'he/him', }, 
        { ch: '她', pinyin: 'tā (female)', en: 'she', }, 
        { ch: '我们', pinyin: 'wǒ men', en: 'us', }, 
        { ch: '你们', pinyin: 'nǐ men', en: 'you (plural)', }, 
        { ch: '您们', pinyin: 'nín men', en: 'you (polite, plural)', }, 
        { ch: '他们', pinyin: 'tā men (male)', en: 'them (male)', }, 
        { ch: '她们', pinyin: 'tā men (female)', en: 'them (female)', }, 
        { ch: '我的', pinyin: 'wǒ de', en: 'mine', }, 
        { ch: '你的', pinyin: 'nǐ de', en: 'yours', }, 
        { ch: '您的', pinyin: 'nín de', en: 'yours (polite)', }, 
        { ch: '他的', pinyin: 'tā de (male)', en: 'his', }, 
        { ch: '她的', pinyin: 'tā de (female)', en: 'her/hers', }, 
        { ch: '我们的', pinyin: 'wǒ men de', en: 'ours', }, 
        { ch: '你们的', pinyin: 'nǐ men de', en: 'yours (plural) ', }, 
        { ch: '您们的', pinyin: 'nín men de', en: 'yours (polite plural)', }, 
        { ch: '他们的', pinyin: 'tā men de (male)', en: 'theirs (male)', }, 
        { ch: '她们的',  pinyin: 'tā men de (female)', en: 'theirs (female)', }, 
    ]
    ,
    family: [
        { ch: '家庭', pinyin: 'jiā tíng', en: 'family / household', }, 
        { ch: '父母', pinyin: 'fù mǔ', en: 'father and mother / parents', }, 
        { ch: '爸爸', pinyin: 'bà ba', en: 'father', }, 
        { ch: '父亲', pinyin: 'fù qīn', en: 'father (formal)', },
        { ch: '妈妈', pinyin: 'Mā mā', en: 'mother', }, 
        { ch: '母亲', pinyin: 'mǔ qīn', en: 'mother (formal)', }, 
        { ch: '继母', pinyin: 'jì mǔ', en: 'step mother', }, 
        { ch: '哥哥', pinyin: 'gē ge', en: 'older brother', }, 
        { ch: '弟弟', pinyin: 'dì di', en: 'younger brother', }, 
        { ch: '姐姐', pinyin: 'jiě jie', en: 'older sister', }, 
        { ch: '妹妹', pinyin: 'mèi mèi', en: 'younger sister', },
    
        { ch: '配偶', pinyin: 'pèi ǒu', en: 'spouse', }, 
        { ch: '先生', pinyin: 'xiān sheng', en: 'Mister', }, 
        { ch: '丈夫', pinyin: 'zhàng fu', en: 'husband (formal)', }, 
        { ch: '老公', pinyin: 'lǎo gong', en: '(informal) husband', }, 
        { ch: '太太', pinyin: 'tài tai', en: 'Missus', }, 
        { ch: '夫人', pinyin: 'fū rén', en: 'Missus (old chinese)', }, 
        { ch: '妻子', pinyin: 'qī zi', en: 'wife (formal)', },
        { ch: '老婆', pinyin: 'lǎo pó', en: '(informal) wife', },
    
        { ch: '孩子', pinyin: 'hái zi', en: 'child'}, 
        { ch: '儿子', pinyin: 'ér zi', en: 'son'}, 
        { ch: '儿媳', pinyin: 'ér xí', en: 'son\'s wife'},
        { ch: '女婿', pinyin: 'nǚ xù', en: 'daughter\'s husband'},
        { ch: '女儿', pinyin: 'nǚ ér', en: 'daughter'}, 
        { ch: '叔叔', pinyin: 'shū shu', en: 'uncle (non-blood related)'},
        { ch: '爷爷', pinyin: 'yé ye', en: '(informal) father\'s father'}, 
        { ch: '奶奶', pinyin: 'nǎi nai', en: '(informal) father\'s mother'},
        { ch: '公公', pinyin: 'gōng gōng', en: '(informal) mother\'s father'},
        { ch: '姥姥', pinyin: 'lǎo lǎo', en: '(informal) mother\'s mother'}, 
        { ch: '祖父', pinyin: 'zǔ fù', en: 'father\'s father'}, 
        { ch: '祖母', pinyin: 'zǔ mǔ', en: 'father\'s mother'},
        { ch: '外祖父', pinyin: 'wài zǔ fù', en: 'mother\'s father'}, 
        { ch: '外祖母', pinyin: 'wài zǔ mǔ', en: 'mother\'s mother'},
        { ch: '岳父', pinyin: 'yuè fù', en: 'father-in-law'}, // Check for distinction between wife and husband
        { ch: '岳母', pinyin: 'yuè mǔ', en: 'mother-in-law'}, // Check for distinction between wife and husband
        { ch: '孙女', pinyin: 'sūn nǚ', en: 'granddaughter'}, // Check for distinction between father's and mother's side
        { ch: '孙子', pinyin: 'sūn zi', en: 'grandson'}, // Check for distincition between father's and mother's side
        
        // { ch: '外婆', pinyin: 'wài pó', en: '(informal) mother\'s mother'}, 
        // { ch: '外公', pinyin: 'wài gōng', en: '(informal) mother\'s father'}, 
        // { ch: '亲戚', pinyin: 'qīn qi', en: '(a) relative (i.e. family member)'}, 
        // { ch: '姑妈', pinyin: 'gū mā', en: 'aunt'},
        // { ch: '表兄弟', pinyin: 'biǎo xiōng dì', en: 'father\\'s sister\\'s sons / maternal male cousin'}, 
        // { ch: '世代', pinyin: 'shì dài', en: 'generation; generation to generation'}, 
        // { ch: '双胞胎', pinyin: 'shuāng bāo tāi', en: 'twin'}, 
        // { ch: '堂兄弟', pinyin: 'táng xiōng dì', en: 'father\\'s brother\\'s sons; paternal male cousin'}, 
        // { ch: '外甥', pinyin: 'wài shēng', en: 'sister\\'s son / wife\\'s sibling\\'s son'}, 
        // { ch: '外甥女', pinyin: 'wài sheng nǚ', en: 'sister\\'s daughter / wife\\'s sibling\\'s daughter'}, 
        // { ch: '兄弟', pinyin: 'xiōng dì', en: 'brothers / younger brother / brethren'}, 
    ],
    time: [
        // {ch: '时钟', pinyin: '', en: 'clock', },
        // {ch: '闹钟', pinyin: '', en: 'alarm clock', },
        // {ch: '电子报', pinyin: '', en: 'digital clock', },
        // {ch: '古代', pinyin: '', en: 'ancient history', },
        // {ch: '沙中', pinyin: '', en: 'hourglass', },
        // {ch: '怀表', pinyin: '', en: 'pocket watch', },
        // {ch: '日晷', pinyin: '', en: 'sun dial', },
        {ch: '记事日历', pinyin: 'jì shì rì lì', en: 'schedule', },
        {ch: '休息', pinyin: 'xiū xí', en: 'break', },
        {ch: '日历', pinyin: 'rì lì', en: 'calendar', },
        {ch: '世纪', pinyin: 'shì jì', en: 'century', },
        // {ch: '日期', pinyin: '', en: 'date', },
        // {ch: '结束', pinyin: '', en: 'end', },
        // {ch: '中世纪', pinyin: '', en: 'middle ages', },
        // {ch: '早晨', pinyin: '', en: 'early morning', },
        // {ch: '正点', pinyin: '', en: 'punctiality', },
        // {ch: '时间', pinyin: '', en: 'time', },
        
        {ch: '日出', pinyin: 'rì chū', en: 'sunrise', },
        {ch: '夕阳', pinyin: 'xī yáng', en: 'sunset', },
    
        {ch: '历史', pinyin: 'lì shǐ', en: 'history', },
        {ch: '未来', pinyin: 'wèi lái', en: 'future', },
        {ch: '现在', pinyin: 'xiàn zài', en: 'now', }, // Ask what is the difference between 目前 and 现在
        {ch: '过去', pinyin: 'guò qù', en: 'past', },
    
        // {ch: '早上', pinyin: 'Zǎoshang', en: 'morning', },
        // {ch: '下午', pinyin: 'Xiàwǔ', en: 'afternoon', },
        // {ch: '晚上', pinyin: 'Wǎnshàng', en: 'evening/night', },
        // {ch: '黄昏', pinyin: '', en: 'dusk', },
        // {ch: '黎明', pinyin: '', en: 'dawn', },
        
        {ch: '前天', pinyin: 'qián tiān', en: 'day before yesterday', },
        {ch: '昨天', pinyin: 'zuó tiān', en: 'yesterday', },
        {ch: '今天', pinyin: 'jīn tiān', en: 'today', },
        {ch: '明天', pinyin: 'míng tiān', en: 'tomorrow', },
        {ch: '后天', pinyin: 'hòu tiān', en: 'day after tomorrow', },
    
        {ch: '季节', pinyin: 'jì jié', en: 'seasons', },
        {ch: '春天', pinyin: 'chūn tiān', en: 'spring', },
        {ch: '夏天', pinyin: 'xià tiān', en: 'summer', },
        {ch: '秋天', pinyin: 'qiū tiān', en: 'autumn/fall', },
        {ch: '冬天', pinyin: 'dōng tiān', en: 'winter', },
        
        {ch: '年', pinyin: 'nián', en: 'year', },
        {ch: '月', pinyin: 'yuè', en: 'month', },
        {ch: '天', pinyin: 'tiān', en: 'day', },
        {ch: '小时', pinyin: 'xiǎo shí', en: 'hour', },
        {ch: '分钟', pinyin: 'fēn zhōng', en: 'minute', },
        {ch: '秒', pinyin: 'miǎo', en: 'second', },
        {ch: '毫秒', pinyin: 'háo miǎo', en: 'millisecond', },
        {ch: '点钟', pinyin: 'diǎn zhōng', en: 'oclock', },
    
        {ch: '周末', pinyin: 'zhōu mò', en: 'weekend', },
        {ch: '星期一', pinyin: 'xīng qí yī', en: 'Monday', },
        {ch: '星期二', pinyin: 'xīng qí èr', en: 'Tuesday', },
        {ch: '星期三', pinyin: 'xīng qí sān', en: 'Wednesday', },
        {ch: '星期四', pinyin: 'xīng qí sì', en: 'Thursday', },
        {ch: '星期五', pinyin: 'xīng qí wǔ', en: 'Friday', },
        {ch: '星期六', pinyin: 'xīng qí liù', en: 'Saturday', },
        {ch: '星期天', pinyin: 'xīng qí tiān', en: 'Sunday', },
        
        {ch: '一月', pinyin: 'yī yuè', en: 'January', },
        {ch: '二月', pinyin: 'èr yuè', en: 'Feburary', },
        {ch: '三月', pinyin: 'sān yuè', en: 'March', },
        {ch: '四月', pinyin: 'sì yuè', en: 'April', },
        {ch: '五月', pinyin: 'wǔ yuè', en: 'May', },
        {ch: '六月', pinyin: 'liù yuè', en: 'June', },
        {ch: '七月', pinyin: 'qī yuè', en: 'July', },
        {ch: '八月', pinyin: 'bā yuè', en: 'August', },
        {ch: '九月', pinyin: 'jiǔ yuè', en: 'September', },
        {ch: '十月', pinyin: 'shí yuè', en: 'October', },
        {ch: '十一月', pinyin: 'shí yī yuè', en: 'November', },
        {ch: '十二月', pinyin: 'shí èr yuè', en: 'December', },
    ],
    color: [
        {ch: '颜色', pinyin: 'yán sè', en: 'color', },
        {ch: '白色', pinyin: 'bái sè', en: 'white', },
        {ch: '黑色', pinyin: 'hēi sè', en: 'black', },
        {ch: '粉红色', pinyin: 'fěn hóng sè', en: 'pink', },
        {ch: '红色', pinyin: 'hóng sè', en: 'red', },
        {ch: '蓝色', pinyin: 'Lán sè', en: 'blue', },
        {ch: '绿色', pinyin: 'lǜ sè', en: 'green', },
        {ch: '黄色', pinyin: 'huáng sè', en: 'yellow', },
        {ch: '紫色', pinyin: 'zǐ sè', en: 'purple', },
        {ch: '橙色', pinyin: 'chéng sè', en: 'orange', },
        {ch: '棕色', pinyin: 'zōng sè', en: 'brown', },
        {ch: '灰色', pinyin: 'huī sè', en: 'gray', },
        // {ch: '', pinyin: '', en: 'gold', },
        // {ch: '', pinyin: '', en: 'silver', },
        // {ch: '彩色', pinyin: 'cǎi sè', en: 'multicolor', },
        // {ch: '五颜六色', pinyin: 'wǔ yán liù sè ', en: 'colorful', },
        // {ch: '莹', pinyin: 'yíng', en: 'beautiful transparent color??', }, Confirm the meaning of this word
        // {ch: '', pinyin: '', en: '', },
        // {ch: '', pinyin: '', en: '', },
        // {ch: '', pinyin: '', en: '', },
        // {ch: '', pinyin: '', en: '', },
        // {ch: '', pinyin: '', en: '', },
        // {ch: '', pinyin: '', en: '', },
    
    ],
    greetings: [
        {ch: '你好', pinyin: '', en: 'hello', },
        {ch: '早上好', pinyin: '', en: 'good morning', },
        {ch: '下午好', pinyin: '', en: 'good afternoon', },
        {ch: '晚上好', pinyin: '', en: 'good evening', },
        {ch: '晚安', pinyin: '', en: 'good night', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
        {ch: '', pinyin: '', en: '', },
    ],
}

const {
    numbers,
    pronouns,
    family,
    time,
    color,
    greetings
} = answers



for (let i = 0, length = numbers.length; i < length; i++) {
    numbers[i].audio = `
        <button type="button" onclick="document.querySelector('[src=\\'./chinese/${numbers[i].ch}.mp3\\']').play()">
            &#9654;
            <audio preload="none" src="./chinese/${numbers[i].ch}.mp3"></audio>
        </button>
    `
}
for (let i = 0, length = pronouns.length; i < length; i++) {
    pronouns[i].audio = `
        <button type="button" onclick="document.querySelector('[src=\\'./chinese/${pronouns[i].ch}.mp3\\']').play()">
            &#9654;
            <audio preload="none" src="./chinese/${pronouns[i].ch}.mp3"></audio>
        </button>
    `
}
for (let i = 0, length = family.length; i < length; i++) {
    family[i].audio = `
        <button type="button" onclick="document.querySelector('[src=\\'./chinese/${family[i].ch}.mp3\\']').play()">
            &#9654;
            <audio preload="none" src="./chinese/${family[i].ch}.mp3"></audio>
        </button>
    `
}
for (let i = 0, length = time.length; i < length; i++) {
    time[i].audio = `
        <button type="button" onclick="document.querySelector('[src=\\'./chinese/${time[i].ch}.mp3\\']').play()">
            &#9654;
            <audio preload="none" src="./chinese/${time[i].ch}.mp3"></audio>
        </button>
    `
}
for (let i = 0, length = color.length; i < length; i++) {
    color[i].audio = `
        <button type="button" onclick="document.querySelector('[src=\\'./chinese/${color[i].ch}.mp3\\']').play()">
            &#9654;
            <audio preload="none" src="./chinese/${color[i].ch}.mp3"></audio>
        </button>
    `
}
// INDICATE MALE AND FEMALE AND FORMAL AND POLITE
// const people

// const school



// const food

// const animals

// const weather

// const sports

// const tools

// const vehicles

// const jobs

// const furniture

// const building

// const electric

// const plumbing

// const clothes

// const materials

// const electronics

// const verbs

// const adjectives

// const phrases

// const office

// const government

// const geography

// const medical
