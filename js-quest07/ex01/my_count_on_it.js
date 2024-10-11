function my_count_on_it(jet){
    for (let i = 0; i < jet.length;i++){
        var num = jet[i].length;
        jet[i] = num;
    }
    return jet;
}