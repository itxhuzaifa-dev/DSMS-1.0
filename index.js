// #num array write a function that output most repeating Number

function findMostOccu(arr) {
    const occurence = {}
    arr.forEach(element => {
        if (occurence[element]) {
            occurence[element] += 1
        } else {
            occurence[element] = 1
        }
    });
    let most = 0
    let keyVal = ''
    for (key in occurence) {
        if (occurence[key] >= most) {
            most = occurence[key]
            keyVal = key
        }
    }
    return keyVal
}
let array = [1, 2, 3, 2, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1]
console.log(findMostOccu(array))







let obj1 = {
    name: "huzaifa",
    obj: {
        name: "asad",
        callMe: function () {
            console.log(this.name);

        },
        callMeArrow() {
            let arrow = () => {
                console.log(this.name);
            }
            arrow()
        }
    }
}

obj1.obj.callMeArrow()