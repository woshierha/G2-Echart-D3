<template>
    <div>
        <EChart :chart-data="eoptions"></EChart>
        <BarChart :chart-data="piedata"></BarChart>
    </div>
</template>
 <script>
 import EChart from '@/components/EChart.vue';
import { WordCloud } from '@antv/g2plot';
import BarChart from './barChart.vue';
  export default{
    components: { EChart, WordCloud, BarChart },
    data() {
        return{
          list: [
            {
                "valueX": 0,
                "valueY": 976,
                "keyY": "COVID19",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 468,
                "keyY": "coronavirus",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 186,
                "keyY": "GE2020",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 138,
                "keyY": "China",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 117,
                "keyY": "US",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 110,
                "keyY": "HongKong",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 81,
                "keyY": "COVID_19",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 69,
                "keyY": "HiPanda",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 64,
                "keyY": "BREAKING",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 63,
                "keyY": "Xinjiang",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 63,
                "keyY": "Beijing",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 61,
                "keyY": "HK",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 56,
                "keyY": "HiChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 54,
                "keyY": "新冠肺炎",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 52,
                "keyY": "ChinaStory",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 51,
                "keyY": "COVID",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 51,
                "keyY": "Huawei",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 49,
                "keyY": "يوميات_الصين",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 45,
                "keyY": "ChinaView",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 45,
                "keyY": "CCRCGP",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 44,
                "keyY": "ChinaFaces",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 41,
                "keyY": "中國面孔",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 39,
                "keyY": "AmazingChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 38,
                "keyY": "XiJinping",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 36,
                "keyY": "الأخبارالدولية",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 35,
                "keyY": "gaokao",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 35,
                "keyY": "GlamorChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 34,
                "keyY": "OneMoment",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 33,
                "keyY": "flood",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 32,
                "keyY": "Africa",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 32,
                "keyY": "AfricanTribes",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 31,
                "keyY": "SeeChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 30,
                "keyY": "WorldNews",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 30,
                "keyY": "WHO",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 30,
                "keyY": "India",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "傳奇大掌櫃",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "CGTNOpinion",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "BackToWork",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "传奇大掌柜",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "EverydayHero",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "Rally",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 29,
                "keyY": "Kenya",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 28,
                "keyY": "ProsperTogether",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 27,
                "keyY": "YourSay",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 27,
                "keyY": "TribesInAFlux",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 26,
                "keyY": "直通兩岸",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 25,
                "keyY": "中國劇場",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 24,
                "keyY": "SushantSinghRajput",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 24,
                "keyY": "AJOpinion",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 23,
                "keyY": "PandaMoment",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 22,
                "keyY": "CCTV4",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 22,
                "keyY": "NewLife",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 22,
                "keyY": "PursuitOfHappiness",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 22,
                "keyY": "Headlines",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 22,
                "keyY": "nationalsecurity",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 21,
                "keyY": "SouthAfrica",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 21,
                "keyY": "AsiaAlbum",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 21,
                "keyY": "CGTNFirstVoice",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 21,
                "keyY": "5G",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 20,
                "keyY": "NationalSecurityLaw",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 20,
                "keyY": "Chinese",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 19,
                "keyY": "ChinaStyle",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 19,
                "keyY": "سحرالصين",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 19,
                "keyY": "UK",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 19,
                "keyY": "PandaTime",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 18,
                "keyY": "Anhui",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 18,
                "keyY": "BestJobInTheWorld",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 18,
                "keyY": "Opinion",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 18,
                "keyY": "XinjiangRediscovered",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "Shanghai",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "Stunning",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "LATEST",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "PandaPic",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "Gansu",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 17,
                "keyY": "Egypt",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "全球戰疫進行時",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "Yunnan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "summer",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "EcoFuture",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "HKSAR",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "Wuhan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 16,
                "keyY": "國家記憶",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "早讀",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "天下華人",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "劇好看",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "快問快答",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "今日藝能秀",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "健康有道",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "食遊八方",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "夜讀",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "Trump",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "Mars",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "直播",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "聲音",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "中华美食家",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "萌物大本营",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "EcoChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 15,
                "keyY": "ChinaNews",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "Uganda",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "Guizhou",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "Guangxi",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "新漫評",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "Tibet",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "Japan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 14,
                "keyY": "generalelection",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "UN",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "URHero",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "新聞聯播",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "海峽兩岸",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "Bollywood",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "lotus",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "Hebei",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "EXCLUSIVE",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 13,
                "keyY": "TimesEvoke",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "Shandong",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "floods",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "中國習近平",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "今日關注",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "Aperture24",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "SouthChinaSea",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "PandaTheatre",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "Henan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "ChinaTech",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 12,
                "keyY": "GeorgeFloyd",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "BlackLivesMatter",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "Chongqing",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "大美中國",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "Libya",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "美好生活",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "康熙王朝",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "Hubei",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "COVID19Frontline",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "humanrights",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "التبادلات_الصينية_العربية",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "DiscoverInnerMongolia",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "TOICoronaLetter",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "pandemic",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "港人心聲",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "第一现场",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "Jiangsu",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "CoronavirusOutbreak",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "FoodMark",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 11,
                "keyY": "Shaanxi",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "environment",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "UnitedShades",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "ChorusofLife",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "中國輿論場",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Jiangxi",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Zhejiang",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "BeAmazed",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Sudan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "BeltandRoad",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Tunisia",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "KanganaRanaut",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Russia",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "ключевыеслова",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "iwantmypaper",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "PeoplesDailyComments",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "harvest",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "ForBetterLife",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "photosoftheday",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "thebigstory",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "stbigstory",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Zimbabwe",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 10,
                "keyY": "Nigeria",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "ChinaTec",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "Hunan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "尋古拾珍",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "Somalia",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "vaccine",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "Brexit",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "graduation",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "水木清华",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "CautionYesPanicNo",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "nepotism",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "微镜头",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "economy",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 9,
                "keyY": "WorldToday",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "ZeroPoverty2020",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "ChineseEconomy",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "WhatsUp",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "tourism",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "FollowMe",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "AerialChina",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "MoreThanTalented",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "匠心",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "收藏家",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "大美中国",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "FriendshipMessenger",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "CutThroughTheNoise",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "Sichuan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "Ad",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "PovertyAlleviation",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 8,
                "keyY": "TimesTop10",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "Hainan",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "France",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "Zambia",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "Brazil",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "UPDATE",
                "obj": null,
                "innerList": null
            },
            {
                "valueX": 0,
                "valueY": 7,
                "keyY": "AsiaPacific",
                "obj": null,
                "innerList": null
            }
          ],
          piedata: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
          //热词图数据
          eoptions:{
          title: {
            text: 'Echart示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
         }
        }
    }
  }
 </script>
<style scoped>
</style>