const notes =[{title: "Early morning",
               body: "wake up. go to rev."},
            {
                title: "afternoon",
                body: "sleep. lunch"
            },
            {
                title: "fevening",
                body: "chai. gym"
            }]

const sortnotes = function(notes){
    notes.sort(function(a,b){
        if (a.title < b.title){
            return -1
        }else if(a.title > b.title){
            return 1
        }else{
            return 0
        }
    })
}
sortnotes(notes)
console.log(notes)
