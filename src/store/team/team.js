import getters from "@/store/team/getters";
export default {
    namespaced: true,
    state :{
        team:[
            {
                GalatasarayLogo:'https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png'
            },
            {
                BesiktasLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/BesiktasJK-Logo.svg/1200px-BesiktasJK-Logo.svg.png'
            },
            {
                FenevLogo:'https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png'
            },
            {
                TrabzonLogo:'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Trabzonspor_Amblem.svg/800px-Trabzonspor_Amblem.svg.png'
            }
        ]
    },
    getters
}