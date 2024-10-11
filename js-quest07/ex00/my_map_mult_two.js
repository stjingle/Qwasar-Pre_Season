var x;

function my_map_mult_two(x){
    for (let i = 0; i < x.length;i++){
        var num = x[i] * 2;
        x[i] = num;
    }
    return x;
}