か(document).scroll((e)=>{
    if(document.documentElement.scrollTop > 70)
    {
        か(".mainNav").stym(
            [
                "backgroundColor",
                "boxShadow"
            ],
            [
                "rgb(14, 16, 16)",
                "0 0 2vw 0.1vw white"
            ]
        );
    }
    else 
    {
        か(".mainNav").stym(
            [
                "backgroundColor",
                "boxShadow"
            ],
            [
                "transparent",
                "0 0 0 0"
            ]
        );
    }
    
})