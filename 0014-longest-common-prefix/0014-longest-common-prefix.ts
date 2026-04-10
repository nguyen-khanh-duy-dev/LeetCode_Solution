// case 1: Có chuỗi rồng => ""
// Output max == Chuỗi ngắn nhất trong mảng
// Nếu có 1 chuỗi thì => chính là chuỗi đó
function longestCommonPrefix(strs: string[]): string {

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]; 
        for (let j = 1; j < strs.length; j++) {
            
            if (strs[j][i] !== char || i === strs[j].length) {
                return strs[0].slice(0, i); 
            }
        }
    }
    return strs[0];
};