function getFormElements(children) {
  let result = {};
  let result2 = {};
  
  // const element = document.querySelector(id);
  // const children = element.children();
  for (let i=0; i<=children.length; i++) {
    const name = children[i].name;
    const heirarchy = name.split('.');
    if (heirarchy.length) {
      let lastItem;
      heirarchy.map((item, index) => {
        if (!result) {
          result[item] = {}
        } else if (!result[item] && index ===0) {
          result[item] = {}
        } else if (index === 1) {
          result[lastItem][item] = {};
          result2 = result[lastItem]    
        } else {
          result[result2][item] = {}
        }
        lastItem = item; 
      })
    }
  }
} 

getFormElements([{name:'value.hello.one'}, {name:'value.hu.li'}]);