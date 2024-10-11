function my_array_uniq(my_uniq) {
    let uniq = [];
    my_uniq.forEach((i) => {
    if (uniq.indexOf(i) === -1){
    uniq.push(i)
    }
    })
    return uniq;
    };