function countvowels(str, i = 0) {
    if(i>str.length) return 0;
    const vowels ='aeiouAEIOU'
    return (vowels.includes(str[i])? 1 : 0) + countvowels(str,i+1);
}
console.log(countvowels("hello javascript"))