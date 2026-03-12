function search(arr,a)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==a)
        {
            console.log("The index of the element",a,"is",i)
            return
        }
    }
    console.log("Element not found ")
}

arr=[90,78,65,98]
search(arr,78)
search(arr,20)