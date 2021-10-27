
/*
<script src="">
is tarah se js bulane par jaise hi js script ko encounter kerta hai 
js ko server se fetch karta hai aur phir use execute krta hai phir aage ka html render karta hai
</script>

.......html rendering....
                         >>>>>> fetching js from server  >>>>>>  <<<< executing js <<<<<<<
                                                                                           .... html rendering.....





<script async src="">
is case me html rendering ke saath sath js file ko servder se fetch kiya jaata hai phir
html rendering ko rokker execute kiya jaata hai 
phir se html rendering kiya jaata hai
</script>   

.... html rendering............                        .... html rendering............
         >>>> fetching js >>>>> <<< executing js >>>>> 



<script defer src="">
is case me html render hota rehta hai aur js file bhi fetch hota rahta hai 
js fetch hone ke baad, html render hone ke baad js file execute ho jayegi

.... html rendering................ html rendering............ 
         >>>> fetching js >>>>>                               <<< executing js >>>>> 
</script>
*/