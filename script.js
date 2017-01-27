let page_title = document.getElementsByClassName("pagetitle").item(0).textContent;
let sub_page_title = document.getElementsByClassName("subtitle").item(0).textContent;

console.log(page_title + ', ' + sub_page_title);

if (page_title === "特許・実用新案テキスト検索" && sub_page_title === "検索結果一覧")
{
    let list = document.querySelectorAll("a.detailedLink");
    a = Array.prototype.map.call( list, (elm)=>{ return elm.textContent; });
    console.log(a);
    // for (elm of list) {
    //    console.log(elm.textContent);
    //}
}
