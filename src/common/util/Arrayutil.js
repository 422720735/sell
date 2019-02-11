export default class Arrayutil {
    static sectionListSections(data) {
        /*
        * let sections =[
        {typeName:"导演", persons:[{name:"唐季礼"}]},
        {typeName:"演员",persons:[{name:"成龙"},{name: "李治廷"}]}
      ];
        * */
        let sections = [];
        data.forEach(item => {
            console.log(item)
        });
        return sections
    }
}