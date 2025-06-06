var func = []   // var com array

for (var i = 0; i < 10; i++) {
    func.push(function(){
        console.log(i)
    })
}

func[2]() // 10
func[8]() // var nao tem escopo, logo incrementou 10 em todos os indices