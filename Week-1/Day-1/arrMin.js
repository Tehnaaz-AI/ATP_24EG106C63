marks=[90,78,65,98]
let min=marks[0] //assuming 
for(let i=0;i<marks.length;i++)
    {
        if(min>marks[i])
        {
            min=marks[i] // updating min
        }
    }
    console.log("smallest element is: ",min)