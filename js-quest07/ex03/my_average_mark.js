function my_average_mark(mark) {
        var total = 0;
        for (i = 0; i < mark.length; i++){
            total += mark[i]['integer'];
        }
        return (total / mark.length).toFixed(1);
    }